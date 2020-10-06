package stepDefinitions;

import cucumber.TestContext;
import io.cucumber.java8.En;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import pageObjects.FundTransferObjects;

import static helpers.UtilFunctions.*;
import static testSupport.WebDriverUtil.attachScreenshot;

public class FundTransferSteps implements En {
    TestContext testContext;
    FundTransferObjects fundTransferObjects;
	
	public FundTransferSteps(TestContext context) {
        testContext = context;
        fundTransferObjects = testContext.getPageObjectManager().getFundTransferObjects();
		
		And("^User click on Fund Transfer Tab$", () -> {
			attachScreenshot();
			fundTransferObjects.fundTransferTab.click();
		});

		And("^User clicks the FundTransfer button$", ()-> {
		 try {
			attachScreenshot();
			fundTransferObjects.btnFundTransfer.click();
		 } catch (Exception e) {
			 Assert.fail("Not able to perform click due to "+e.getMessage());
		 }
			
		});

		Then("^User see the warning message when mandatory field is missing$", () -> {
			Assert.assertTrue(fundTransferObjects.warningMsgAmt.isDisplayed());
			Assert.assertTrue(fundTransferObjects.warningMsgFundTransferOpt.isDisplayed());
			Assert.assertTrue(fundTransferObjects.warningMsgDOT.isDisplayed());
			Assert.assertTrue(fundTransferObjects.warningMsgDesc.isDisplayed());
			attachScreenshot();
		});

		Then("^User inputs the (.+), (.+), (.+),(.+), (.+) and (.+) to complete the fund transfer$", (String ReceiverBankName, String ReceiverName, String ReceiverAccountNumber, String RoutingNumber, String Amount, String Description)-> {
			Thread.sleep(2000);
			fundTransferObjects.txtReceiverBankName.sendKeys(ReceiverBankName);
			fundTransferObjects.txtReceiverName.sendKeys(ReceiverName);
			fundTransferObjects.txtReceiverAccountNo.sendKeys(ReceiverAccountNumber);
			fundTransferObjects.txtSwiftAccountNo.sendKeys(RoutingNumber);
			Select select = new Select(fundTransferObjects.btnTransferType);
			select.selectByIndex(1);
			fundTransferObjects.txtAmount.sendKeys(Amount);

			SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
			Date date = new Date();
			String currDate = dateFormat.format(date);
			
			WebDriver driver = getLatestDriver();
			JavascriptExecutor js = (JavascriptExecutor)driver;
			js.executeScript("arguments[0].value='"+currDate+"'", fundTransferObjects.txtDate);
			fundTransferObjects.textAreaDescription.sendKeys(Description);
			attachScreenshot();
			
		});

		Then("^user enter authentication code as (.+) and click validate button$", (String AuthenticationCode)-> {
			Assert.assertTrue(fundTransferObjects.txtAuthCode.isDisplayed());
			fundTransferObjects.txtAuthCode.sendKeys(AuthenticationCode);
			attachScreenshot();
			fundTransferObjects.btnValidate.click();
		});

		Then("^User see success message and reference no will be generated$", ()-> {
			Assert.assertTrue(fundTransferObjects.successTxnMessage.isDisplayed());
			String expectedMsg = "International Transaction Successful";
			String actualMsg = fundTransferObjects.successTxnMessage.getText();
			Assert.assertEquals(expectedMsg, actualMsg);
			
			String checkRefTxnNo = fundTransferObjects.referenceTxnNumber.getText();
			if (!checkRefTxnNo.equals("")) {
				attachScreenshot();
			} else {
				Assert.fail("Transaction Reference number generated is not successful");
			}
			
		});

		Then("^user click Account Summary button$", ()-> {
			attachScreenshot();
			fundTransferObjects.accountSummaryMenu.click();
		});

		Then("^User see the account statement in account summary$", ()-> {
			Assert.assertTrue(fundTransferObjects.accountStatementLabel.isDisplayed());
			int acctRows = fundTransferObjects.accountSummaryTbl.size();
			if(acctRows > 1) {
				attachScreenshot();
			} else {
				Assert.fail("Account statement displayed is not successful");
			}		
		});

		
	}

}

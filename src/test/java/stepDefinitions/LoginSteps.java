package stepDefinitions;

import cucumber.TestContext;
import helpers.FileReaderHelper;
import io.cucumber.java8.En;
import pageObjects.LoginObjects;
import static helpers.UtilFunctions.*;
import static testSupport.WebDriverUtil.attachScreenshot;
import org.junit.Assert;

public class LoginSteps implements En {
    TestContext testContext;
    LoginObjects loginObjects;
	
	public LoginSteps(TestContext context) {
        testContext = context;
        loginObjects = testContext.getPageObjectManager().getLoginObjects();
	
	Given("^User login into Demo Bank site$", ()-> {
		try {
			openUrl(FileReaderHelper.getInstance().getConfigFileHelper().getApplicationUrl());
			Assert.assertTrue(loginObjects.txtAccountNo.isDisplayed());
			attachScreenshot();
		} catch (Exception e) {		
			Assert.fail("Launch demo bank site failed due to '"+e.getMessage()+"'");
		}
	});

	When("^user enter the (.+)and (.+)$", (String accountNumber, String Password)-> {
		try {
			loginObjects.txtAccountNo.sendKeys(accountNumber.trim());
			loginObjects.txtPassword.sendKeys(Password.trim());
			attachScreenshot();
		} catch (Exception e) {
			Assert.fail("Enter account number and password failed due to '"+e.getMessage()+"'");
		}
	});

	When("^Click the Login button$", ()-> {
		try {
			attachScreenshot();
			loginObjects.btnLogin.click();
		} catch (Exception e) {
			Assert.fail("Not able to perform click due to '"+e.getMessage());
		}
	});

	Then("^User Should display the warning message when invalid password is given$", ()-> {
		String actualErrorMsg = loginObjects.errorMsg.getText();
		String expectedErrorMsg = "Not valid account number or password or Account is not Active. Please try again or contact to support.";
		Assert.assertEquals(actualErrorMsg,expectedErrorMsg);
		attachScreenshot();
	});

	When("^User navigate to account pin field$", () -> {
		Assert.assertTrue(loginObjects.txtPin.isDisplayed());
		attachScreenshot();
	});

	When("^User enter the valid pin (.+) and click on validate button$", (String PIN)-> {
		loginObjects.txtPin.sendKeys(PIN.trim());
		attachScreenshot();
		loginObjects.btnValidate.click();
	});
	
	}


}

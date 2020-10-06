package stepDefinitions;

import cucumber.TestContext;
import io.cucumber.java8.En;

import static testSupport.WebDriverUtil.attachScreenshot;

import org.junit.Assert;
import pageObjects.AccountDetailObjects;

public class AccountDetailSteps implements En {
    TestContext testContext;
    AccountDetailObjects accountDetailObjects;
	
	public AccountDetailSteps(TestContext context) {
        testContext = context;
        accountDetailObjects = testContext.getPageObjectManager().getAccountDetailObjects();
		
		Then("^user click the account details button$", ()-> {
			attachScreenshot();
			accountDetailObjects.accountDetailsTab.click();
		});

		Then("^user should display all the account details$", ()-> {
			Assert.assertTrue(accountDetailObjects.textAccountDetails.isDisplayed());
			Assert.assertTrue(accountDetailObjects.txtuserName.isDisplayed());
			attachScreenshot();
		});
		
		
	}

}

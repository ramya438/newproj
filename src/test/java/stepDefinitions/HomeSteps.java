package stepDefinitions;

import cucumber.TestContext;
import io.cucumber.java8.En;
import org.junit.Assert;
import pageObjects.HomeObjects;
import static testSupport.WebDriverUtil.attachScreenshot;

public class HomeSteps implements En {
    TestContext testContext;
    HomeObjects homeObjects;
	
	public HomeSteps(TestContext context) {
        testContext = context;
        homeObjects = testContext.getPageObjectManager().getHomeObjects();
		
		Then("^User should navigate to Home Page$", () -> {
			Assert.assertTrue(homeObjects.homePageTitle.isDisplayed());
			attachScreenshot();
		});

		
	}

}

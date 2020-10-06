package stepDefinitions;

import cucumber.TestContext;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import testSupport.StartWeb;
import testSupport.WebDriverUtil;

public class Hooks {
	
	TestContext testContext;
	public static StartWeb startWeb;
	
	public Hooks(TestContext context) {
		testContext = context;
	}
	
	@Before
    public void beforeScenario(Scenario scenario){
        System.out.println("Starting web before every scenario!!!");
        startWeb = new StartWeb(scenario);
    }

    @After
    public void afterScenario(Scenario scenario){
        if (scenario.isFailed()) {
            WebDriverUtil.attachScreenshot();
        }
        testContext.getWebDriverHelper().quitBrowser();
        System.out.println("Finishing Test!!!");
    }
	

}

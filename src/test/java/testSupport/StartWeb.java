package testSupport;

import io.cucumber.java.Scenario;

public class StartWeb {
	
	public WebDriverUtil webDriverUtil;

    public StartWeb(Scenario scenario) {
        webDriverUtil = new WebDriverUtil();
        webDriverUtil.initialize(scenario);
    }

    public void closeWebBrowser(Scenario scenario) {
        webDriverUtil.closebrowser();
        webDriverUtil.quitbrowser();
    }

}

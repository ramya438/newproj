package cucumber;

import helpers.PageObjectHelper;
import helpers.WebDriverHelper;

public class TestContext {
	
	private WebDriverHelper webDriverHelper;
    private PageObjectHelper pageObjectHelper;
    
    public TestContext() throws Exception {
        webDriverHelper = new WebDriverHelper();
        pageObjectHelper = new PageObjectHelper(webDriverHelper.getDriver());
    }

    public WebDriverHelper getWebDriverHelper() {
        return webDriverHelper;
    }
    
    public PageObjectHelper getPageObjectManager() {
        return pageObjectHelper;
    }
}

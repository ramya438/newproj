package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomeObjects {
	
	WebDriver driver;

    public HomeObjects(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }
    
    @FindBy(how = How.XPATH, using = "//a[text()='Fund Transfers']")
	public WebElement btnFundTransfer;
    
	@FindBy(how = How.XPATH, using = "//a[text()='Account Statement']")
	public WebElement btnAccountStatement;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Account Details']")
	public WebElement btnAccountDetails;
	
	@FindBy(how = How.XPATH, using = "//strong[contains(text(),'Available Credit')]")
	public WebElement balance;
	
	@FindBy(how = How.XPATH, using = "//strong[contains(text(),'Welcome')]")
	public WebElement homePageTitle;

	
}

package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AccountDetailObjects {

	WebDriver driver;

    public AccountDetailObjects(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }
    
	@FindBy(how = How.XPATH, using = "//th[text()='User Account Details']")
	public WebElement textAccountDetails;
	
	@FindBy(how = How.XPATH, using = "(//input[@type='text'])[1]")
	public WebElement txtuserName;
	
	@FindBy(how = How.XPATH, using = "//li[contains(text(),'Account Details')]")
	public WebElement accountDetailsTab;
    
    
}

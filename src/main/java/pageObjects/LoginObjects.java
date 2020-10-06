package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginObjects {
	
	WebDriver driver;

    public LoginObjects(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }
    
	@FindBy(how = How.ID, using = "accno")
	public WebElement txtAccountNo;
	
	@FindBy(how = How.ID, using = "pass")
	public WebElement txtPassword;
	
	@FindBy(how = How.ID, using = "submitButton")
	public WebElement btnLogin;
	
	@FindBy(how = How.ID, using = "accpin")
	public WebElement txtPin;
	
	@FindBy(how = How.ID, using = "submitButton")
	public WebElement btnValidate;
	
	@FindBy(how = How.XPATH, using = "//div[contains(text(),'Not valid')]")
	public WebElement errorMsg;


}

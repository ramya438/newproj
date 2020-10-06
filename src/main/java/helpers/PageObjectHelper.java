package helpers;

import org.openqa.selenium.WebDriver;

import pageObjects.*;

public class PageObjectHelper {
	
	private WebDriver driver;
	private LoginObjects loginObjects;
	private HomeObjects homeObjects;
	private AccountDetailObjects accountDetailObjects;
	private FundTransferObjects fundTransferObjects;
	
	
	public PageObjectHelper(WebDriver driver) {
        this.driver = driver;
    }
	
    public LoginObjects getLoginObjects() {
        return (loginObjects == null) ? loginObjects = new LoginObjects(driver) : loginObjects;
    }
    
    public HomeObjects getHomeObjects() {
        return (homeObjects == null) ? homeObjects = new HomeObjects(driver) : homeObjects;
    } 
    
    public AccountDetailObjects getAccountDetailObjects() {
        return (accountDetailObjects == null) ? accountDetailObjects = new AccountDetailObjects(driver) : accountDetailObjects;
    }
    
    public FundTransferObjects getFundTransferObjects() {
        return (fundTransferObjects == null) ? fundTransferObjects = new FundTransferObjects(driver) : fundTransferObjects;
    }    
	

}

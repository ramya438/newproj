package pageObjects;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class FundTransferObjects {
	
	WebDriver driver;

    public FundTransferObjects(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }
    
    @FindBy(how = How.XPATH, using = "//a[contains(text(),'Account Summary')]")
    public WebElement accountSummaryMenu;
    
    @FindBy(how = How.XPATH, using = "//div[@class='TabbedPanelsContent TabbedPanelsContentVisible']//tr/td[2]")
    public List<WebElement> accountSummaryTbl;
    
    @FindBy(how = How.XPATH, using = "//strong[contains(.,'Account Statement')]")
    public WebElement accountStatementLabel;
    
    @FindBy(how = How.XPATH, using = "//li[@class='TabbedPanelsTab'][contains(.,'Fund Transfer')]")
    public WebElement fundTransferTab;
    
	@FindBy(how = How.XPATH, using = "(//input[@name='rbname'])[2]")
	public WebElement txtReceiverBankName;
	
	@FindBy(how = How.XPATH, using = "(//input[@name='rname'])[3]")
	public WebElement txtReceiverName;
	
	@FindBy(how = How.XPATH, using = "//input[@name='accno']")
	public WebElement txtReceiverAccountNo;
	
	@FindBy(how = How.XPATH, using = "(//input[@name='swift'])[3]")
	public WebElement txtSwiftAccountNo;
	
	@FindBy(how = How.XPATH, using = "//input[@name='amt']")
	public WebElement txtAmount;
	
	@FindBy(how = How.XPATH, using = "//select[@name='toption']")
	public WebElement btnTransferType;
	
	@FindBy(how = How.XPATH, using = "//input[@name='dot']")
	public WebElement txtDate;
	
	@FindBy(how = How.XPATH, using = "//textarea[@name='desc']")
	public WebElement textAreaDescription;
	
	@FindBy(how = How.ID, using = "submitButton")
	public WebElement btnFundTransfer;
	
	@FindBy(how = How.ID, using = "token")
	public WebElement txtAuthCode;
	
	@FindBy(how = How.ID, using = "submitButton")
	public WebElement btnValidate;
	
	@FindBy(how = How.XPATH, using = "//span[@id='sprytf_amt']/span[1]")
	public WebElement warningMsgAmt;
	
	@FindBy(how = How.XPATH, using = "//span[@id='spryselect_opt']/span[1]")
	public WebElement warningMsgFundTransferOpt;
	
	@FindBy(how = How.XPATH, using = "//span[@id='sprytf_dot']/span[1]")
	public WebElement warningMsgDOT;
	
	@FindBy(how = How.XPATH, using = "//span[@id='sprytf_desc']/span[1]")
	public WebElement warningMsgDesc;
	
	@FindBy(how = How.XPATH, using = "//strong[contains(.,'Successful')]")
	public WebElement successTxnMessage;
	
	@FindBy(how = How.XPATH, using = "//table//tr[7]/td[2]")
	public WebElement referenceTxnNumber;
	
	
}

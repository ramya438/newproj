package helpers;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class WebDriverHelper {

    private WebDriver driver;
    private static final String CHROME_DRIVER_PROPERTY = "webdriver.chrome.driver";

    public WebDriver getDriver() throws Exception {
        if(driver == null) {
            driver = createLocalDriver();
        }
        return driver;
    }

    private WebDriver createLocalDriver() throws Exception {
        try {
            driver = launchChromeBrowser();

            try {
                poBaseClass.poSetDriver(driver);
            } catch (Exception e) {

            }
        } catch (Exception e) {
            System.out.println("Error occured while setting up WebDriver");
        }

        return driver;
    }

    private static WebDriver launchChromeBrowser() {
		String driverPath = FileReaderHelper.getInstance().getConfigFileHelper().getDriverPath();
		System.out.println(driverPath);
        System.setProperty(CHROME_DRIVER_PROPERTY, driverPath);
        WebDriver webDriver = new ChromeDriver();
        webDriver.manage().timeouts().implicitlyWait(45, TimeUnit.SECONDS);
        webDriver.manage().window().maximize();   
        webDriver.manage().deleteAllCookies();
        return webDriver;
    }

    public void quitBrowser() {
        driver.close();
        driver.quit();
    }

}

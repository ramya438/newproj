package testSupport;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import static helpers.UtilFunctions.*;

import java.util.Set;

import io.cucumber.java.Scenario;

public class WebDriverUtil {
	
	public static Scenario scenario;
    WebDriver driver;

    public void initialize(Scenario scenario) {
        this.scenario = scenario;
    }

    public static void attachScreenshot() {
    	try {
	        WebDriver driver = getLatestDriver();
	        if (driver instanceof TakesScreenshot) {
	            TakesScreenshot screenshotAbleDriver = (TakesScreenshot) driver;
	            try {
	                byte[] screenshot = screenshotAbleDriver.getScreenshotAs(OutputType.BYTES);
	                scenario.embed(screenshot, "image/png");
	            } catch (WebDriverException somePlatformsDontSupportScreenshots) {
	            	System.out.println("Unable to take screenshot"+somePlatformsDontSupportScreenshots.getMessage());
	            }
	        }
        } catch (Exception e) {
        	e.printStackTrace();
        }
    }

    public void quitbrowser() {
        driver = getLatestDriver();
        driver.quit();
    }

    public void closebrowser() {
        driver = getLatestDriver();
        Set<String> windowHandles = driver.getWindowHandles();
        for (String window : windowHandles) {
            driver.switchTo().window(window);
            driver.close();
        }
    }

}

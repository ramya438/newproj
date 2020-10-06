package helpers;

import java.io.File;
import java.io.IOException;
import org.codehaus.plexus.util.FileUtils;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class UtilFunctions {
	
	public static WebDriver gDriver;
	
    public static void openUrl(String URL) {
        WebDriver webDriver = poBaseClass.poGetDriver();
        gDriver = webDriver;
        System.out.println("Opening URL: "+URL);
        webDriver.get(URL);
    }
    
    public static WebDriver getLatestDriver() {
        WebDriver driver = poBaseClass.poGetDriver();
        poBaseClass.poSetDriver(driver);
        return driver;
    }
    
	public static void btnClick(WebElement element) {
        String s = "";
        try {
            s = element.toString();
            if (s.contains("->"))
                s = s.split("->")[1];

            System.out.println("Performed Click @: '" + s + "'");
        } catch (Exception e) {
            e.printStackTrace();
        }
        
		element.click();
	}

	public static void sendKeys(WebElement element, String value) {
		element.sendKeys(value);
	}

	public static void selectValue(WebElement element, String text) {
		Select sel;
		sel = new Select(element);
		sel.selectByVisibleText(text);
	}

	public static void takeScreenshot(String name) {
		try {
			WebDriver driver = poBaseClass.poGetDriver();
			TakesScreenshot tScreenshot = (TakesScreenshot) driver;
			File temp = tScreenshot.getScreenshotAs(OutputType.FILE);
			File dest = new File(System.getProperty("user.dir") + "\\Screenshot\\" + name + ".png");
		
			try {
				FileUtils.copyFile(temp, dest);
			} catch (IOException e) {
				System.out.println("Unable to take screenshot");
			}
		} catch (Exception e) {
            e.printStackTrace();
		}	
		
	}

	public static String getText(WebElement element) throws Exception {
		String checkVal = null;
		try {
			checkVal = element.getText();
			if (!checkVal.equals("null"))
				System.out.println("Value is shown as "+checkVal);
		} catch (Exception e) {
			System.out.println("Check value is shown as null " + e.getMessage());
		}
		return checkVal;
	}

	public static void isDisplay(WebElement element) {
		boolean value = element.isDisplayed();
		try {
		if (value == true) 
			System.out.println("Desired Value is Displayed");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	

}

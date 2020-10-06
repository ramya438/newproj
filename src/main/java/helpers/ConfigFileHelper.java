package helpers;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class ConfigFileHelper {

    private Properties properties;
    private final String propertyFilePath= "configs//Configuration.properties";

    public ConfigFileHelper () {
        BufferedReader reader;
        try {
            reader = new BufferedReader(new FileReader(propertyFilePath));
            properties = new Properties();
            try {
                properties.load(reader);
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
        }
    }

    public String getDriverPath(){
        System.out.println("user.dir:"+System.getProperty("user.dir"));
        String currentDir = System.getProperty("user.dir");
        String driverPath = currentDir + properties.getProperty("driverPath");
        return driverPath;
        
    }

    public String getApplicationUrl() {
        String url = properties.getProperty("url");
        if(url != null) {
        	return url;
        } else {
        	throw new RuntimeException("url not specified in the Configuration.properties file.");
        }
    }

    /*public String getScreenshotPath() {
    	String currentDir = System.getProperty("user.dir");
        String screenshotPath = currentDir + properties.getProperty("ScreenshotPath");
        return screenshotPath;
    }*/

}

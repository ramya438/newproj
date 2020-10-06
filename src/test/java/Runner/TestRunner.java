package Runner;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features",
        glue = {"stepDefinitions"},
        tags = {"@web","@DemoTest"},
        plugin = {"pretty", "json:target/cucumber.json"}
)
public class TestRunner {
	
    @AfterClass
    public static void tearDown() {
        HTMLReporter.main(new String[]{});
    }

}

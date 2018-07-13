package com.honda.hma.iqsalert.IQSALERT;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.honda.hma")
public class IqsAlertApplication {

	public static void main(String[] args) {
		SpringApplication.run(IqsAlertApplication.class, args);
	}
}

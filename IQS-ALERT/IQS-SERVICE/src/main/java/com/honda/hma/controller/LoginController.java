package com.honda.hma.controller;

import org.springframework.web.bind.annotation.*;

import com.honda.hma.model.User;


//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class LoginController {

	@RequestMapping(value="/login", method = RequestMethod.GET)
    public User login(){
	   User user = new User();
	   user.setUserName("Sudhir");
        return user;
    }

}
package com.twixdeals.twix.controller;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver;

@Controller
public class home {
	@GetMapping("/")
	@CrossOrigin(origins = "http://localhoast:3005")
	public String index() {
        return "index";
    }
}

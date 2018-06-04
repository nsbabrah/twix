package com.twixdeals.views;

import org.springframework.stereotype.Controller;
	import org.springframework.ui.Model;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.RequestParam;

	@Controller
	public class home {

	    @GetMapping("/")
	    public String greeting() {
	       
	        return "home";
	    }

	}
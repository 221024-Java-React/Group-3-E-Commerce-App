package com.example.controllers;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exceptions.EmailAlreadyExistsException;
import com.example.exceptions.InvalidCredentialsException;
import com.example.models.Order;
import com.example.models.Person;
import com.example.service.OrderService;
import com.example.service.PersonService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/orders")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class OrderController {
	
	private OrderService oService;
	
	@PostMapping("/addTocart")
	public Order addToCart(@RequestBody LinkedHashMap<String,String>body) {
		System.out.println(body.toString());
		return oService.addToCart(Integer.parseInt(body.get("person_id")), Integer.parseInt(body.get("product_id")), Integer.parseInt(body.get("status_id")),
				Integer.parseInt(body.get("payment_id")),Double.parseDouble(body.get("total_price"))
				,Integer.parseInt(body.get("total_items")));
	} 
	
}


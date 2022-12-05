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
import com.example.models.Person;
import com.example.service.PersonService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/persons")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class PersonController {
	
	private PersonService eService;
	
	@PostMapping("/register")
	public Person register(@RequestBody LinkedHashMap<String, String> body) {
		System.out.println("fsfsfdsfsfffsffdfsdd   "+body.toString());
		return eService.register(body.get("name"), body.get("email"), body.get("password"));
	}
	
	@PostMapping("/login")
	public Person login(@RequestBody LinkedHashMap<String, String> body) {
		
		String email = body.get("email");
		String password = body.get("password");
		
		return eService.login(email, password);
	}
	
	@ExceptionHandler({InvalidCredentialsException.class})
	public ResponseEntity<String> handleInvalid(){
		return new ResponseEntity<>("Invalid Credentials", HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler({EmailAlreadyExistsException.class})
	public ResponseEntity<String> handleExists(){
		return new ResponseEntity<>("Email already registered", HttpStatus.CONFLICT);
	}
}


package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.exceptions.EmailAlreadyExistsException;
import com.example.exceptions.InvalidCredentialsException;
import com.example.models.Person;
import com.example.models.Role;
import com.example.models.Theme;
import com.example.repository.PersonRepository;
import com.example.repository.RoleRepository;
import com.example.repository.ThemeRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class PersonService {
	
	private PersonRepository personRepo; 
	private RoleRepository roleRepo;
	private ThemeRepository themeRepo;
	
	public Person register(String name, String email, String password) {
		Role role = roleRepo.findById(2).get();
		Theme theme = themeRepo.findById(1).get();
		Person person = new Person(0, name, email, password, "","", theme,role);
		
		try {
			Person result = personRepo.save(person);
			return result;
		} catch(Exception ex) {
			throw new EmailAlreadyExistsException();
		}
	}
	
	public Person login(String email, String password) {
		Person person = personRepo.findByEmail(email);
		
		if(!person.getPassword().equals(password)) {
			throw new InvalidCredentialsException();
		}
		//System.out.println("The user login successfully "+person.toString());
		return person;
		
	}

}

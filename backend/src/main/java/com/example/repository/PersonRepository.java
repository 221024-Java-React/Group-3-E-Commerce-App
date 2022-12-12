package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.models.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer>{
	
	Person findByEmail(String email);

}

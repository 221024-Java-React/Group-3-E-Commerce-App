package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.models.Notification;
import com.example.models.Order;
import com.example.models.Person;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{
	List<Order> findAllByPerson(Person p);
}

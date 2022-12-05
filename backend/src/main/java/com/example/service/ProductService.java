package com.example.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exceptions.NotAManagerException;
import com.example.models.Product;
import com.example.models.ProductCategory;
import com.example.models.Order;
import com.example.models.OrderStatus;
import com.example.models.PaymentType;
import com.example.models.Person;
import com.example.repository.PersonRepository;
import com.example.repository.ProductCategoryRepository;
import com.example.repository.ProductRepository;
import com.example.repository.OrderRepository;
import com.example.repository.OrderStatusRepository;
import com.example.repository.PaymentTypeRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class ProductService {

	private ProductRepository tRepo;
	private OrderStatusRepository tsRepo;
	private PaymentTypeRepository ttRepo;
	private PersonRepository eRepo;
	private ProductCategoryRepository cRepo;
	private OrderRepository or;
	
	
	public List<Product> getProductsByCategory(int categoryId) {
		System.out.println("category "+categoryId);
		ProductCategory category = cRepo.findById(categoryId).get();
			return tRepo.findAllByCategory(category);
	}
	
	public List<Product> getAllProducts(){
		List<Product> e = tRepo.findAll();
		
		return e;
	}

	public Person addToCart(String string, String string2, String string3) {
		Order order = new Order();
		//or.save(order);
		return null;
	}
	
}

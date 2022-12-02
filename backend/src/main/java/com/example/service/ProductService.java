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
import com.example.models.OrderStatus;
import com.example.models.PaymentType;
import com.example.models.Person;
import com.example.repository.PersonRepository;
import com.example.repository.ProductCategoryRepository;
import com.example.repository.ProductRepository;
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
	
	public Product createProduct(PaymentType type, String description, Double amount, String email, String date) {
		PaymentType t = ttRepo.findById(type.getPaymentTypeId()).get();
		OrderStatus s = tsRepo.findById(1).get();
		Person e = eRepo.getByEmail(email).get();
		DateTimeFormatter format = DateTimeFormatter.ofPattern("MM-dd-yyyy");
		LocalDate time = LocalDate.parse(date, format);
		Product ticket = new Product();
		return tRepo.save(ticket);
	}
	
	public Product approveDenyTicket(int manager, int id, boolean approved) {
		Person approver = eRepo.findById(manager).get();
		System.out.println(approver);
		if(approver.getRole().getRoleId().equals("ADMIN")) {
			Product t = tRepo.findById(id).get();
			/*if(!t.getStatus().get(0).getStatus().equals("PENDING")) return t;
			OrderStatus ts = approved ? tsRepo.findById(2).get() : tsRepo.findById(3).get();*/
			//List<OrderStatus> status = t.getStatus();
		
		//	status.set(0, ts);
			return tRepo.save(t);
		}
		
		throw new NotAManagerException();
	}
	
	public List<Product> getProductsByCategory(int categoty) {
		Person m = eRepo.findById(categoty).get();
		if(m.getRole().getRole().equals("MANAGER")) {
			ProductCategory s = cRepo.findById(1).get();
			return tRepo.getProductsByCategory(s);
		}
		
		throw new NotAManagerException();
	}
	
	public List<Product> getAllProducts(){
		List<Product> e = tRepo.findAll();
		
		return e;
	}
	
}

package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Product;
import com.example.models.PaymentType;
import com.example.service.ProductService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/products")
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class ProductController {
	
	private ProductService tService;
	
	@PostMapping("/")
	public Product createTicket(@RequestBody NewProductObject body) {
		return tService.createProduct(body.type, body.description, body.amount, body.email, body.date);
	}
	
	@PutMapping("/")
	public Product approveOrDeny(@RequestBody UpdateProductObject body) {
		return tService.approveDenyTicket(body.managerId, body.ticketId, body.approved);
	}
	
	@GetMapping("/{role}")
	public List<Product> getProducts(@PathVariable("role")String role, @RequestParam("id")int id){
		if(role.equals("manager")) {
		
			return tService.getProductsByCategory(id);
		}
		else {
		
			return tService.getProductsByCategory(id);
		}
	}

}

class NewProductObject {
	public PaymentType type;
	public String description;
	public Double amount;
	public String email;
	public String date;
}

class UpdateProductObject {
	public int managerId;
	public int ticketId;
	public boolean approved;
}
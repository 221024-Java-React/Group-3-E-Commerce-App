package com.example.controllers;

import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Receipt;
import com.example.service.ReceiptService;

import lombok.AllArgsConstructor;


@RestController
@RequestMapping("/receipts")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class ReceiptController {
	
	private ReceiptService rService;
	
	@GetMapping("/")
	public List<Receipt> getAllReceipts(){
		
		List<Receipt> receipts = rService.getAllReceipts();
		//System.out.println("reach getallorders method orders are "+orders);
		return receipts;
	}
	
	@PostMapping("/make")
	public void makeReceipt(@RequestBody LinkedHashMap<String, String> body) {
		System.out.println("Enters receipt controller");
		int customer_id = Integer.parseInt(body.get("customer_id"));
		int total_items = Integer.parseInt(body.get("total_items"));
		double total_price = Double.parseDouble(body.get("total_price"));
		rService.makeReceipt(customer_id, total_items, total_price);
	}
}

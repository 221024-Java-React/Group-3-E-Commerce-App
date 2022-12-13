package com.example.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.models.Address;
import com.example.models.Order;
import com.example.models.PaymentType;
import com.example.models.Person;
import com.example.models.Receipt;
import com.example.repository.OrderRepository;
import com.example.repository.OrderStatusRepository;
import com.example.repository.PaymentTypeRepository;
import com.example.repository.PersonRepository;
import com.example.repository.ProductRepository;
import com.example.repository.ReceiptRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class ReceiptService {
	
	private ReceiptRepository receiptRepo;
	private OrderRepository orderRepo;
	private PersonRepository personRepo;

	public List<Receipt> getAllReceipts() {
		List<Receipt> receipts = receiptRepo.findAll();
		return receipts;
	}

	public void makeReceipt(int customer_id, int total_items, double total_price) {
		Person person = personRepo.findById(customer_id).get();
		String order_number="";
		LocalDateTime date_puchased= LocalDateTime.now();
		Set<Order> orders = person.getOrders();
		
		Receipt receipt = new Receipt(0, person, order_number, date_puchased,
				orders, total_items, total_price);
				
		receiptRepo.save(receipt);
	}


}

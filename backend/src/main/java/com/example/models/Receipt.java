package com.example.models;

import java.time.LocalDateTime;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Receipt")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Receipt {

	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "receipt_id")
	private Integer receiptId;
	
	@ManyToOne
    @JoinColumn(name = "customer_id")
	private Person customer;
	
	private String order_number;
	
	LocalDateTime date_puchased;
	
	@OneToMany(mappedBy = "person")
	@JsonIgnore
	Set<Order> orders;
	
	private Integer total_items;
	
	private Double total_price;
	
}

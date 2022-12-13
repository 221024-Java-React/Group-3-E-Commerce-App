package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.models.Receipt;

@Repository
public interface ReceiptRepository extends JpaRepository<Receipt, Integer>{

}

package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.models.PAddress;

@Repository
public interface AddressRepository extends JpaRepository<PAddress, Integer> {

}

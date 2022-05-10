package com.example.fitLife.repository;

import com.example.fitLife.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ProductRepository extends  MongoRepository<Product, UUID>{
    Product findByName (String productName);
}

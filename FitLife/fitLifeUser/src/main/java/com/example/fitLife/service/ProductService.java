package com.example.fitLife.service;

import org.springframework.stereotype.Service;

import com.example.fitLife.model.Product;
import com.example.fitLife.repository.ProductRepository;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class ProductService {
    private final  ProductRepository productRepository;

    public ProductService(ProductRepository productRepositoryRepository) {
        this.productRepository = productRepositoryRepository;
    }

    public Product addProduct(Product product)
    {
        Product productExist = productRepository.findByName (product.getName());
        if(Objects.nonNull(productExist)) {
            return new Product();
        }

        product.setId(UUID.randomUUID());
        product = productRepository.save(product);
        return product;
    }

    public List<Product> getAllProducts(){
        List<Product> allProducts = productRepository.findAll();
        return allProducts;
    }
}

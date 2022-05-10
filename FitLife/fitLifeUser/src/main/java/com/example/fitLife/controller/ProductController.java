package com.example.fitLife.controller;

import com.example.fitLife.model.Product;
import com.example.fitLife.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@Validated
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/addProduct")
    public Product addUser(@Valid @RequestBody Product product) {
        return productService.addProduct(product);
    }

    @GetMapping("/getAllProducts")
    public List<Product> getAllProdducts(){
        return productService.getAllProducts();
    }


}



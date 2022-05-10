package com.example.fitLife.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@Document
public class Product {
    @Id
    private UUID id;
    @NotNull(message = "Product name cannot be empty!")
    private String name;
    @NotNull(message = "Product ImageURL cannot be empty!")
    private String imageURL;
    @NotNull(message = "Product Calorie cannot be empty")
    private double cal;
    @NotNull(message = "Product Carbohydrate cannot be empty")
    private double carb;
    @NotNull(message = "Product Fat cannot be empty!")
    private double fat;
    @NotNull(message = "Product Protein cannot be empty!")
    private double pro;
}
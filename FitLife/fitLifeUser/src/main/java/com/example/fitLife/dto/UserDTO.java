package com.example.fitLife.dto;

import com.example.fitLife.model.Gender;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
    private UUID id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
    private double weight;
    private double length;
    private Gender gender;
    private double recommendedCalories;
}

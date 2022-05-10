package com.example.fitLife.dto;

import com.example.fitLife.model.Gender;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class UserRegisterDTO {
    private UUID id;
    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private int age;
    private double weight;
    private double length;
    private Gender gender;
}

package com.example.fitLife.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@Document
public class User {
    @Id
    private UUID id;
    @NotNull(message = "Kullanıcı Adı Boş Olamaz!")
    private String username;
    private String firstName;
    private String lastName;
    @NotNull(message = "Şifre Boş Olamaz!")
    private String password;
    @Email
    @NotNull(message = "Emain Boş Olamaz!")
    private String email;
    @NotNull(message = "Yaş Boş Olamaz!")
    private int age;
    @NotNull(message = "Ağırlık Boş Olamaz!")
    private double weight;
    @NotNull(message = "Boy Boş Olamaz!")
    private double length;
    @NotNull(message = "Cinsiyet Boş Olamaz!")
    private Gender gender;
    private double recommendedCalories;
}

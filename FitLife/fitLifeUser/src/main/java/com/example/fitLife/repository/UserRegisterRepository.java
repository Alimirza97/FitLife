package com.example.fitLife.repository;

import com.example.fitLife.dto.UserRegisterDTO;
import com.example.fitLife.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface UserRegisterRepository extends MongoRepository<User, UUID> {
    User findByUsername(String username);

}

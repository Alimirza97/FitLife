package com.example.fitLife.repository;

import com.example.fitLife.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface UserLoginRepository extends MongoRepository<User, UUID> {
    User findByUsernameAndPassword(String username, String password);

}

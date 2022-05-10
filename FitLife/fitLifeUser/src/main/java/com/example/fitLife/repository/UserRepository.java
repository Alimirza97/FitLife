package com.example.fitLife.repository;

import com.example.fitLife.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface UserRepository extends MongoRepository<User, UUID> {
    User findByUsernameAndId(String username, UUID id);
}

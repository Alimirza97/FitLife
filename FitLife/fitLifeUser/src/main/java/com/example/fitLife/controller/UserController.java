package com.example.fitLife.controller;

import com.example.fitLife.dto.UserDTO;
import com.example.fitLife.dto.UserIdDTO;
import com.example.fitLife.dto.UserLoginDTO;
import com.example.fitLife.dto.UserRegisterDTO;
import com.example.fitLife.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@Validated
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    public UserIdDTO registerUser(@Valid @RequestBody UserRegisterDTO dto) {
        return userService.registerUser(dto);
    }
    @PostMapping("/login")
    public UserIdDTO loginUser(@Valid @RequestBody UserLoginDTO dto) {
        return userService.loginUser(dto);
    }

    @PostMapping("/getUser")
    public UserDTO getUser(@Valid @RequestBody UserIdDTO dto) {
        return userService.getUser(dto);
    }
}


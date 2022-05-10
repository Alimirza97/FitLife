package com.example.fitLife.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class UserIdDTO {
    private UUID id;
    private String username;
}

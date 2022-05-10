package com.example.fitLife.service;

import com.example.fitLife.dto.UserDTO;
import com.example.fitLife.dto.UserIdDTO;
import com.example.fitLife.dto.UserLoginDTO;
import com.example.fitLife.dto.UserRegisterDTO;
import com.example.fitLife.model.Gender;
import com.example.fitLife.model.User;
import com.example.fitLife.repository.UserLoginRepository;
import com.example.fitLife.repository.UserRegisterRepository;
import com.example.fitLife.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.UUID;

@Service
public class UserService {

    private final UserLoginRepository userLoginRepository;
    private final UserRegisterRepository userRegisterRepository;
    private final UserRepository userRepository;

    public UserService(UserLoginRepository userLoginRepository, UserRegisterRepository userRegisterRepository, UserRepository userRepository) {
        this.userLoginRepository = userLoginRepository;
        this.userRegisterRepository = userRegisterRepository;
        this.userRepository = userRepository;
    }

    public UserIdDTO registerUser(UserRegisterDTO userRegisterDTO) {
        User existUsers = userRegisterRepository.findByUsername(userRegisterDTO.getUsername());
        if(Objects.nonNull(existUsers)) {
            return new UserIdDTO();
            //throw new RuntimeException("Exist User");
        }
        User newUser = mapUserRegisterDtoToUser(userRegisterDTO);
        newUser.setId(UUID.randomUUID());
        newUser.setRecommendedCalories(getRecommendedCalories(userRegisterDTO));
        newUser = userRegisterRepository.save(newUser);
        return mapUserToUserIdDto(newUser);
    }

    private double getRecommendedCalories(UserRegisterDTO userRegisterDTO)
    {
        double recommendedCalories = 0;
        if(userRegisterDTO.getGender() != null && userRegisterDTO.getAge() != 0 && userRegisterDTO.getLength() != 0 && userRegisterDTO.getWeight() != 0) {
            if (userRegisterDTO.getGender() == Gender.MALE) {
                //BMH (Erkek)= 10 X Ağırlık (kg) + 6,25 X Yükseklik (cm) – 5 X yaş (y) + 5
                recommendedCalories = 10 * userRegisterDTO.getWeight() + 6.25 * userRegisterDTO.getLength() - 5 * userRegisterDTO.getAge() + 5;
            } else {
                //BMH (Kadın)= 10 X Ağırlık (kg) + 6,25 X Yükseklik (cm) – 5 X yaş (y) – 161
                recommendedCalories = 10 * userRegisterDTO.getWeight() + 6.25 * userRegisterDTO.getLength() - 5 * userRegisterDTO.getAge() - 161;
            }
        }
        return recommendedCalories;
    }

    public UserIdDTO loginUser(UserLoginDTO UserLoginDTO) {
        User existUsers = userLoginRepository.findByUsernameAndPassword(UserLoginDTO.getUsername(), UserLoginDTO.getPassword());
        if(Objects.nonNull(existUsers)) {
            return mapUserToUserIdDto(existUsers);
        }
        return new UserIdDTO();
    }

    public UserDTO getUser(UserIdDTO dto)
    {
        User existUsers = userRepository.findByUsernameAndId(dto.getUsername(), dto.getId());
        if(Objects.nonNull(existUsers)) {
            return mapUserToUserDto(existUsers);
        }
        return new UserDTO();
    }

    private User mapUserDtoToUser(UserDTO dto)
    {
        User user = new User();
        user.setId(dto.getId());
        user.setUsername(dto.getUsername());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setAge(dto.getAge());
        user.setWeight(dto.getWeight());
        user.setLength(dto.getLength());
        user.setGender(dto.getGender());
        user.setRecommendedCalories(dto.getRecommendedCalories());
        return user;
    }

    private UserDTO mapUserToUserDto(User user)
    {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setAge(user.getAge());
        dto.setWeight(user.getWeight());
        dto.setLength(user.getLength());
        dto.setGender(user.getGender());
        dto.setRecommendedCalories(user.getRecommendedCalories());
        return dto;
    }

    private User mapUserIdDtoToUser(UserIdDTO dto)
    {
        User user = new User();
        user.setId(dto.getId());
        user.setUsername(dto.getUsername());
        return user;
    }

    private UserIdDTO mapUserToUserIdDto(User user)
    {
        UserIdDTO dto = new UserIdDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        return dto;
    }

    private User mapUserLoginDtoToUser(UserLoginDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        return user;
    }
    private User mapUserRegisterDtoToUser(UserRegisterDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setFirstName(dto.getFirstName());
        user.setUsername(dto.getUsername());
        user.setLastName(dto.getLastName());
        user.setPassword(dto.getPassword());
        user.setEmail(dto.getEmail());
        user.setAge(dto.getAge());
        user.setLength(dto.getLength());
        user.setWeight(dto.getWeight());
        user.setGender(dto.getGender());
        return user;
    }

    private UserLoginDTO mapUserToUserLoginDto(User user) {
        UserLoginDTO dto = new UserLoginDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setPassword(user.getPassword());
        return dto;
    }

    private UserRegisterDTO mapUserToUserRegisterDto(User user) {
        UserRegisterDTO dto = new UserRegisterDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setPassword(user.getPassword());
        dto.setEmail(user.getEmail());
        dto.setAge(user.getAge());
        dto.setLength(user.getLength());
        dto.setWeight(user.getWeight());
        dto.setGender(user.getGender());
        return dto;
    }
}

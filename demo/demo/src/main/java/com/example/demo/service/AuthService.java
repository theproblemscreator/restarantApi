package com.example.demo.service;



import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.SignupRequest;
import com.example.demo.entity.User;
import com.example.demo.exception.InvalidCredentialsException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository repository , PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public String signup(SignupRequest request) {
        
        if (repository.existsByEmail(request.getEmail())) {
            return "Email already registered";
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword())); 

        repository.save(user);
        return "Signup successful : "+user.getEmail();
    }

    public String login(LoginRequest request) {

        User user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UserNotFoundException("User not found : "+request.getEmail()));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        return "Login successful";
    }

}


package com.example.demo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.SignupRequest;
import com.example.demo.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private final AuthService authService;

    public UserController(AuthService authService) {
        this.authService = authService;
    }

    // for creating the new user or signUp 
    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request) {
        return authService.signup(request);
    }

    // for logIn the user or signIn 
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) throws Exception {
        return ResponseEntity.ok(authService.login(request));
    }
}

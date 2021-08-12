package com.sirnoob97.github.users.controller;

import com.sirnoob97.github.users.domain.User;
import com.sirnoob97.github.users.domain.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

  private UserRepository userRepository;

  @PostMapping
  public ResponseEntity<?> newUser(@RequestBody User user){
    userRepository.save(user);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }
}

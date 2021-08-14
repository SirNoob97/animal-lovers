package com.sirnoob97.github.users.controller.user;

import java.util.stream.Collectors;

import com.sirnoob97.github.users.domain.animal.AnimalRepository;
import com.sirnoob97.github.users.domain.user.UserRepository;
import com.sirnoob97.github.users.dto.UserRequest;
import com.sirnoob97.github.users.dto.UserResponse;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

  private UserRepository userRepository;
  private AnimalRepository animalRepository;

  @PostMapping
  public ResponseEntity<Void> newUser(@RequestBody UserRequest userRequest) {
    var animals = userRequest.getAnimals().stream()
        .map(a -> animalRepository.findByName(a))
        .map(o -> o.get())
        .collect(Collectors.toSet());

    userRepository.save(userRequest.mapToUser(animals));
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }

  @GetMapping
  public ResponseEntity<Page<UserResponse>> getUsersByAnimal(@RequestParam(name = "animal") String name, Pageable page){
    var animal = animalRepository.findByName(name).get();
    return ResponseEntity.ok(userRepository.findByAnimalOrderByPoints(animal, page));
  }

  @GetMapping("/points")
  public ResponseEntity<Page<UserResponse>> getAllSortedPoints(Pageable page){
    return ResponseEntity.ok(userRepository.findAllByOrderByPointsDesc(page));
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<Void> delete(@PathVariable Long userId) {
    userRepository.deleteByUserId(userId);
    return ResponseEntity.noContent().build();
  }
}
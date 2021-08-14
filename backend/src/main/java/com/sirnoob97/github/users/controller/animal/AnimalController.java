package com.sirnoob97.github.users.controller.animal;

import com.sirnoob97.github.users.domain.animal.AnimalRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/animals")
public class AnimalController {

  private AnimalRepository animalRepository;

  @GetMapping
  public ResponseEntity<Page<String>> getUsers(Pageable page){
    return ResponseEntity.ok(animalRepository.findAll(page).map(a -> a.getName()));
  }
}
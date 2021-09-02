package com.sirnoob97.github.users.domain.animal;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepository extends JpaRepository<Animal, Integer> {
  Optional<Animal> findByName(String name);
}
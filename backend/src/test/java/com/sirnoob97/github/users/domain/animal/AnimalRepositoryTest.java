package com.sirnoob97.github.users.domain.animal;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;

import javax.transaction.Transactional;

import com.sirnoob97.github.users.util.RandomValue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.InvalidDataAccessApiUsageException;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional
class AnimalRepositoryTest {
  
  @Autowired 
  private AnimalRepository animalRepository;

  private static Animal staticAnimal = new Animal(RandomValue.randomString());

  @Test
  public void save_PersistAndReturnAnAnimal_WhenSuccessful(){
    var animalDB = animalRepository.save(staticAnimal);

    assertNotNull(animalDB);
    assertEquals(animalDB.getName(), staticAnimal.getName());
  }

  @Test
  public void save_ThrowInvalidDataAccessApiUsageException_WhenAnimalIsNull() {
    assertThatExceptionOfType(InvalidDataAccessApiUsageException.class).isThrownBy(() -> animalRepository.save(null));
  }

  @Test
  public void save_ThrowDataIntegrityViolationException_WhenAnimalIsEmpty() {
    assertThatExceptionOfType(DataIntegrityViolationException.class).isThrownBy(() -> animalRepository.save(new Animal()));
  }

  @Test
  public void findByName_ReturnAPresentOptionalOfAnimal_WhenSuccessful(){
    animalRepository.save(staticAnimal);
    var animalDB = animalRepository.findByName(staticAnimal.getName());
    
    assertNotNull(animalDB);
    assertTrue(animalDB.isPresent());
    assertEquals(animalDB.get().getName(), staticAnimal.getName());
  }

  @Test
  public void findByName_NoException_WhenAnimalNameIsNull() {
    assertDoesNotThrow(() -> animalRepository.findByName(null));
  }
}
package com.sirnoob97.github.users.domain.user;

import static com.sirnoob97.github.users.util.RandomValue.randomBoolean;
import static com.sirnoob97.github.users.util.RandomValue.randomInteger;
import static com.sirnoob97.github.users.util.RandomValue.randomString;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Set;

import com.sirnoob97.github.users.domain.animal.Animal;
import com.sirnoob97.github.users.domain.animal.AnimalRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional
class UserRepositoryTest {

  @Autowired
  private AnimalRepository animalRepository;

  @Autowired
  private UserRepository userRepository;

  private static User staticUser;
  private static Animal staticAnimal;
  private static Set<Animal> staticAnimalList;

  @BeforeEach
  public void setUp() {
    staticAnimal = new Animal(randomString());
    staticAnimalList = Set.of(staticAnimal);
    //@formatter:off
    staticUser = User.builder().id(randomString())
                                .given(randomString())
                                .surname(randomString())
                                .age(randomInteger())
                                .points(randomInteger())
                                .isActive(randomBoolean())
                                .animals(staticAnimalList)
                                .build();
    //@formatter:on

    assertNotNull(staticUser);
    assertNotNull(staticAnimalList);
    assertFalse(staticAnimalList.isEmpty());
  }

  @Test
  public void save_PersistAUserAndReturnIt_WhenSuccessful() throws Exception {
    var userDB = userRepository.save(staticUser);

    assertNotNull(userDB);
    assertNotNull(userDB.getAnimals());
    assertNotNull(staticUser.getId());
    assertNotNull(userDB.getId());
    assertEquals(userDB.getId(), staticUser.getId());
  }

  @Test
  public void save_ThrowInvalidDataAccessApiUsageException_WhenUserIsNull() {
    assertThatExceptionOfType(InvalidDataAccessApiUsageException.class).isThrownBy(() -> userRepository.save(null));
  }

  @Test
  public void save_ThrowDataIntegrityViolationException_WhenUserIsEmpty() {
    assertThatExceptionOfType(DataIntegrityViolationException.class).isThrownBy(() -> userRepository.save(new User()));
  }

  @Test
  public void save_ThrowDataIntegrityViolationException_WhenAnimalListIsNull() {
    staticUser.setAnimals(null);

    assertDoesNotThrow(() -> userRepository.save(staticUser));
  }

  @Test
  public void findByAnimalOrderByPoints_ReturnAPageOfTenUsers_WhenSuccessful() {
    animalRepository.save(staticAnimal);
    userRepository.save(staticUser);
    var users = userRepository.findByAnimalOrderByPoints(staticAnimal, PageRequest.of(0, 10));

    assertNotNull(users);
    assertFalse(users.isEmpty());
  }

  @Test
  public void findByAnimalOrderByPoints_ThrowInvalidDataAccessApiUsageException_WhenAnimalIsNotPersisted() {
    userRepository.save(staticUser);

    assertThatExceptionOfType(InvalidDataAccessApiUsageException.class)
        .isThrownBy(() -> userRepository.findByAnimalOrderByPoints(staticAnimal, PageRequest.of(0, 10)));
  }
}
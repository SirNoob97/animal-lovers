package com.sirnoob97.github.users.domain;

import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserRepositoryTest {

  @Autowired
  private UserRepository userRepository;

  @Test
  public void firstTest() throws Exception {
    var user = User.builder().id("asdfbxwe").name(new UserName("Martin", "Lopez")).age(24).points(100).isActive(true)
        .animals(List.of(Animal.CAT, Animal.TIGER, Animal.HORSE)).build();
    var userDB = userRepository.save(user);
    assertNotNull(userDB);
  }
}

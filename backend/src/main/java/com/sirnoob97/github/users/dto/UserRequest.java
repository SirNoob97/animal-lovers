package com.sirnoob97.github.users.dto;

import java.util.Map;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sirnoob97.github.users.domain.animal.Animal;
import com.sirnoob97.github.users.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserRequest {

  private String id;
  private String given;
  private String surname;
  private Integer points;
  private Boolean isActive;
  private Integer age;
  private Set<String> animals;

  @JsonProperty("name")
  private void getNameFronNestedObject(Map<String, String> name) {
    this.given = name.get("given");
    this.surname = name.get("surname");
  }

  public User mapToUser(Set<Animal> animals) {
    return User.builder().id(this.id).given(this.given).surname(this.surname).points(this.points)
        .isActive(this.isActive).age(this.age).animals(animals).build();
  }
}

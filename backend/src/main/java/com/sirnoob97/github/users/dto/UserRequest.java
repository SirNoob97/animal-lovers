package com.sirnoob97.github.users.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sirnoob97.github.users.domain.animal.Animal;
import com.sirnoob97.github.users.domain.user.User;
import java.util.Map;
import java.util.Set;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserRequest {

  @NotEmpty(message = "The Given name is required.")
  @Size(
    max = 64,
    message = "The Given name must be a maximun of {max} characters."
  )
  private String given;

  @NotEmpty(message = "The Surname is required.")
  @Size(
    max = 64,
    message = "The Surname must be a maximum of {max} characters."
  )
  private String surname;

  @Max(value = 100L, message = "Max puntation is {value}.")
  @PositiveOrZero(message = "Points mut be positive.")
  @NotNull(message = "Points are required.")
  private Integer points;

  private Boolean isActive;

  @Max(value = 120L, message = "The maximum age allowed is 150 years old.")
  @Min(value = 7, message = "Minimun age requirement {value} years old")
  @PositiveOrZero(message = "Age mut be positive.")
  @NotNull(message = "Age is required.")
  private Integer age;

  @NotNull(
    message = "The list of animals cannot be null, at least it must be empty"
  )
  private Set<String> animals;

  @JsonProperty("name")
  private void getNameFronNestedObject(Map<String, String> name) {
    this.given = name.get("given");
    this.surname = name.get("surname");
  }

  public User mapToUser(Set<Animal> animals) {
    return User
      .builder()
      .given(this.given)
      .surname(this.surname)
      .points(this.points)
      .isActive(this.isActive)
      .age(this.age)
      .animals(animals)
      .build();
  }
}

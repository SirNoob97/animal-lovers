package com.sirnoob97.github.users.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

  private Long userId;
  private String given;
  private String surname;
  private Integer points;
  private Integer age;
}
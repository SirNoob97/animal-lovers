package com.sirnoob97.github.users.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserName {

  @Column(length = 64, nullable = false)
  private String given;

  @Column(length = 64, nullable = false)
  private String surname;
}

package com.sirnoob97.github.users.domain.animal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sirnoob97.github.users.domain.user.User;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "animals")
public class Animal {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(length = 32, unique = true)
  private String name;

  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  @ManyToMany(mappedBy = "animals")
  private Set<User> users;

  public Animal(String name) {
    this.name = name;
  }
}
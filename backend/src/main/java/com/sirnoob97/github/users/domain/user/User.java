package com.sirnoob97.github.users.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sirnoob97.github.users.domain.animal.Animal;
import java.util.Map;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id", insertable = false, updatable = false)
  @Setter(value = AccessLevel.NONE)
  private Long userId;

  @Column(nullable = false, unique = true)
  private String id;

  @Column(length = 64, nullable = false)
  private String given;

  @Column(length = 64, nullable = false)
  private String surname;

  @Column(nullable = false)
  private Integer points;

  @Column(name = "is_active", nullable = false)
  private Boolean isActive;

  @Column(nullable = false)
  private Integer age;

  @EqualsAndHashCode.Exclude
  @ToString.Exclude
  @JsonIgnoreProperties("users")
  @ManyToMany
  @JoinTable(
    name = "users_animals",
    joinColumns = { @JoinColumn(name = "fk_user") },
    inverseJoinColumns = { @JoinColumn(name = "fk_animal") }
  )
  private Set<Animal> animals;

  @JsonProperty("name")
  private void getNameFronNestedObject(Map<String, String> name) {
    this.given = name.get("given");
    this.surname = name.get("surname");
  }
}
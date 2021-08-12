package com.sirnoob97.github.users.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.vladmihalcea.hibernate.type.array.ListArrayType;

import org.hibernate.annotations.Parameter;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "users")
@TypeDef(name = "list-array", typeClass = ListArrayType.class)
public class User {

  @Id
  @Column(length = 24, nullable = false, updatable = false)
  private String id;

  @Embedded
  private UserName name;

  @Column(nullable = false)
  private Integer points;

  @Type(type = "com.vladmihalcea.hibernate.type.array.ListArrayType", parameters = {
      @Parameter(name = ListArrayType.SQL_ARRAY_TYPE, value = "animal") })
  @Column(columnDefinition = "animal[]")
  private List<Animal> animals;

  @Column(nullable = false)
  private Boolean isActive;

  @Column(nullable = false)
  private Integer age;
}

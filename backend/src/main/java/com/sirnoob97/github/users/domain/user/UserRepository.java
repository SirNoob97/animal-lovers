package com.sirnoob97.github.users.domain.user;

import com.sirnoob97.github.users.domain.animal.Animal;
import com.sirnoob97.github.users.dto.UserResponse;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

  @Query(value = "SELECT new com.sirnoob97.github.users.dto.UserResponse(u.given, u.surname, u.points, u.age) FROM User u WHERE :animal MEMBER u.animals ORDER BY u.points DESC")
  Page<UserResponse> findByAnimalOrderByPoints(@Param("animal") Animal animal, Pageable page);
}
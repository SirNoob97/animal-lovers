package com.sirnoob97.github.users.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonCreator.Mode;

public enum Animal {

  BEAR("bear"), CAT("cat"), DOG("dog"), ELEPHANT("elephant"), GORILLA("gorilla"), HORSE("horse"), JAGUAR("jaguar"),
  KANGAROO("kangaroo"), KOALA("koala"), LION("lion"), MONKEY("monkey"), PANDA("panda"), PENGUIN("penguin"),
  TIGER("tiger"), ZEBRA("zebra");

  private String name;

  private Animal(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  @JsonCreator(mode = Mode.DELEGATING)
  public static Animal getAnimalFromJson(String name) {

    for (Animal a : Animal.values()) {
      if (a.getName().equalsIgnoreCase(name))
        return a;
    }
    return null;
  }
}

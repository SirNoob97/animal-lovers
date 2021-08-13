package com.sirnoob97.github.users.util;

import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

public class RandomValue {

  private RandomValue(){}


  public static String randomString() {
    return UUID.randomUUID().toString();
  }

  public static Integer randomInteger(){
    return ThreadLocalRandom.current().nextInt(100);
  }

  public static Boolean randomBoolean(){
    return ThreadLocalRandom.current().nextBoolean();
  }
}

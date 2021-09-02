package com.sirnoob97.github.users.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Cors implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry
      .addMapping("/**")
      .allowedMethods(
        HttpMethod.GET.name(),
        HttpMethod.POST.name(),
        HttpMethod.DELETE.name()
      )
      .allowedHeaders("*")
      .allowedOrigins("http://localhost:3000");
  }
}
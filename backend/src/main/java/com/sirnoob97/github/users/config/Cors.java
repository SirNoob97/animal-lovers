package com.sirnoob97.github.users.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class Cors implements WebMvcConfigurer {

  @Value(value = "${client.info.hostname}")
  public String clientHostname;

  @Value(value = "${client.info.port}")
  public int clientPort;

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    var origins =
        new String[] {
          String.format("http://%s:%s", clientHostname, clientPort),
          "http://localhost",
          "http://localhost:3000"
        };

    registry
        .addMapping("/**")
        .allowedMethods("*")
        .allowedHeaders("*")
        .allowedOrigins(origins)
        .maxAge(3600L);
  }
}

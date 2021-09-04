package com.sirnoob97.github.users.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Cors implements WebMvcConfigurer {

  @Value(value = "${client.info.hostname}")
  public String clientHostname;

  @Value(value = "${client.info.port}")
  public int clientPort;

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry
        .addMapping("/**")
        .allowedMethods(HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.DELETE.name())
        .allowedHeaders("*")
        .allowedOrigins(
            String.format("http://%s:%s", clientHostname, clientPort),
            "http://localhost",
            "http://localhost:3000");
  }
}

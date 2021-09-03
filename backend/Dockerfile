FROM gradle:7.2-jdk11-openj9 AS builder
ENV DIR=/app
WORKDIR $DIR
COPY ./build.gradle .
COPY ./settings.gradle .
COPY ./src ./src
RUN gradle bootJar -x test --info --scan --stacktrace
RUN mkdir -p build/dependency && (cd build/dependency; jar -xf ../libs/*.jar)

FROM adoptopenjdk/openjdk11-openj9:x86_64-alpine-jre-11.0.12_7_openj9-0.27.0
ENV DEPENDENCY=/app/build/dependency
RUN addgroup -S spring && adduser -S user-service -G spring
WORKDIR /user-service
COPY --from=builder ${DEPENDENCY}/BOOT-INF/lib ./app/lib
COPY --from=builder ${DEPENDENCY}/META-INF ./app/META-INF
COPY --from=builder ${DEPENDENCY}/BOOT-INF/classes ./app
ENTRYPOINT ["java", "-cp", "app:app/lib/*", "com.sirnoob97.github.users.UsersApplication"]

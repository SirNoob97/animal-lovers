# animal-lovers

## Prerequisites

- Java 11+.
- NodeJS 14.17.5+.
- Docker engine 20.10.x
- Docker compose 1.26+

## Usage

Run the entire project wit docker compose and go to ```http://localhost```.

    dkc --env-file ./env/.env.dev up -d

If you want to use gradel and yarn to run the projects add the following to the ```package.json```.

    "proxy": "http://localhost:8080/apiV1"

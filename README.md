
# NestJS CQRS ES repository
This is a go to repository for a first chapter of NestJS ES articles.

## Installation

```bash
$ yarn install
```

## Running the app in the container(watch mode)
```bash
docker-compose up nestjs-cqrs-es
``` 
## Running the app locally

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Access EventStore
```bash
http://localhost:2113
```

## Ports in use
```bash
# nest
3131
# event store tcp
1113
# event store http
2113
```
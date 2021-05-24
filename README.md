# Express Vue 2 starter

## Prerequisites
- Node.js & npm
- PostgreSQL
- Clone this repo

## Project setup

1. Install dependencies
```
npm install
```
2. Create a database

3. Copy example config
```
cat .env.example > .env
```
4. Edit the values in `.env`


## Run app in dev mode

Client
```
npm run dev:client
```
Server
```
npm run dev:server
```


## Database commands

### Initialize database
Create database and apply migrations
```
npm run db:create
```
Reset database
```
npm run db:reset
```

### Migrations
Apply migrations
```
npm run db:migrate
```
Undo migrations
```
npm run db:migrate:undo
```
Create migration file
```
npm run db:migration:create -- --name=<filename>
```
### Seeds
Insert all seeds into the database
```
npm run db:seed
```
Undo seeds
```
npm run db:seed:undo
```
Create seed file
```
npm run db:seed:create -- --name=<filename>
```

## Create production build
```
npm run build:client
```


## Lint code
```
npm run lint
```

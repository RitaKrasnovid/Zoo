# Backend

## How to run

`npm run start:`

That's all.
By default it will run application with

`NODE_ENV=local npm run start:dev`

## Sequelize ORM
Create database

`node_modules/.bin/sequelize db:create`

Run database migrations

`node_modules/.bin/sequelize db:migrate`

Fill database with some initial data

`node_modules/.bin/sequelize db:seed:all`

It's possible to undo last migration(s)

`node_modules/.bin/sequelize db:migrate:undo`

Generate new model and migrations

`node_modules/.bin/sequelize model:create --name User --attributes 'name:string email:string bio:text'`


## Tests

`NODE_ENV=test node_modules/.bin/sequelize db:drop`

`NODE_ENV=test node_modules/.bin/sequelize db:create`

`NODE_ENV=test node_modules/.bin/sequelize db:migrate`

`npm test`


# go-sweat-api

## Overview
Go Sweat is built with Node, Express, ReactJS, Postgres, as a fullstack MVC project. This API backend provides endpoints for frontend applications by HTTP request (fetch). The API backend can be installed and run on any machine or server, and exposes CRUD operations for a local database (Postgres in this case).

Node dependencies include:
cors
express
pg
body-parser

The 'pg' module allows for simple database queries, otherwise known as 'pooling'.

The models for this application are:
Sessions 
Workouts
Sets
Exercises
Equipment

The architecture follows the following understanding:
A user working out will do so for a specific period of time, a.k.a. a 'session'
In each 'session' a user may do one or more 'workouts' - repetition of a specific exercise
Each 'workout' may have one or more 'set' - one or more repetitions of the exercise
An exercise is a vocabulary term - a user may choose an existing exercise, or create their own.
Each exercise is associated with a specific piece of equipment - i.e. bodyweight, dumbbells, jugs of water, etc.

Users may log their sessions, workouts, and sets with which exercise and equipment - which is stored in the database. 

## 1. Getting Started
Install the following dependencies:
- [Node](https://nodejs.org/en/)
- [Postgres](https://postgresapp.com/)

### 2. Install Ash - Migration Manager
```sh
#Save in Downloads for example
cd ~/Downloads
git clone --recursive https://github.com/ash-shell/ash.git
cd /usr/local/bin
ln -s /Users/~~YOUR COMPUTER USER HERE~~~/Downloads/ash/ash

#Verify symlink (should ouput /usr/local/bin/ash)
which ash
```

### 3. Clone go-sweat-api repo (to your favorite project directory)
```sh
git clone git@github.com:RyanRomano/go-sweat-api.git
```

### 4. Create the database (any terminal tab)
```sh
createdb sweat_db_local
```

### 5. Install node and ash dependencies (in go-sweat-api directory)
```
npm i
ash apm:install git@github.com:ash-shell/sql.git
ash apm:install git@github.com:ash-shell/migrate.git
```

### 6. Configure the .env file (in go-sweat-api directory)
```sh
cp .env.sample .env.local

#Fill out the missing .env variables with your info:
export SQL_POSTGRES_USER='your login here'
export SQL_POSTGRES_PASSWORD='your password here'
export SQL_POSTGRES_HOST='probably localhost'
export SQL_POSTGRES_PORT='check what port postgres is running on'
```

### 7. Set up the Database Schema (in go-sweat-api directory)
```sh
ash migrate
```

### 8. Now Run it (in go-sweat-api directory)
```
npm start
```
Should now see this message: Listening to localhost:3000! :)

[The next step is to install the front end](https://github.com/RyanRomano/go-sweat-view)

==============================

If having errors with logging into psql, ensure your [~/.pgpass file](https://www.postgresql.org/docs/9.3/libpq-pgpass.html) is configured correctly.

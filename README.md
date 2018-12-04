# go-sweat-api

## Getting Started
Install the following dependencies:
- [Node](https://nodejs.org/en/)
- [Postgres](https://postgresapp.com/)
- [Ash](https://github.com/ash-shell/ash) (Directions Below)

## Clone repo
```sh
git clone git@github.com:RyanRomano/go-sweat-api.git
```

### Create the database
```sh
createdb sweat_db_local
```

### Install node dependencies
```
npm i
```

### Configure the .env file
```sh
cp .env.sample .env.local

#Fill out missing .env variables with your info:
export MIGRATE_DATABASE_DRIVER='postgres'
export MIGRATE_MIGRATIONS_DIRECTORY='ash_migrations'
export SQL_POSTGRES_PATH='psql'
export SQL_POSTGRES_USER='your login here'
export SQL_POSTGRES_PASSWORD='your password here'
export SQL_POSTGRES_HOST='probably localhost'
export SQL_POSTGRES_PORT='check what port postgres is running on'
export SQL_POSTGRES_DATABASE_NAME='sweat_db_local'

#Save the file and back in your repo directory, source env variables with:
source .env.local 
```

### Install Ash
```sh
#Save in downloads (or where ever you like)
cd ~/Downloads
git clone --recursive https://github.com/ash-shell/ash.git
cd /usr/local/bin
ln -s /Users/~~YOUR COMPUTER USER HERE~~~/Downloads/ash .

#Back in your cloned repo directory:
ash apm:install git@github.com:ash-shell/sql.git
ash apm:install git@github.com:ash-shell/migrate.git
```

Also, ensure your [~/.pgpass file](https://www.postgresql.org/docs/9.3/libpq-pgpass.html) is configured with the credentials you have set up in that file.

### Set up the Database Schema
```sh
ash migrate
```

### Now Run it
```
npm start
```

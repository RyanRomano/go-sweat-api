# Go Sweat API

## Getting Started
Clone repo in new directory
```sh
git clone git@github.com:RyanRomano/go-sweat-api.git
```

Install the following dependencies:

- [Ash](https://github.com/ash-shell/ash) (Directions Below)
- [Node](https://nodejs.org/en/)
- [Postgres](https://postgresapp.com/)

### Create a Database

```sh
createdb sweat_db_local
```

### Configuring the .env file
```sh
cp .env.sample .env.local

Fill out .env variables:
# export MIGRATE_DATABASE_DRIVER='postgres'
# export MIGRATE_MIGRATIONS_DIRECTORY='migrations'
# export SQL_POSTGRES_PATH='psql'
# export SQL_POSTGRES_USER='your login here'
# export SQL_POSTGRES_PASSWORD='your password here'
# export SQL_POSTGRES_HOST='probably localhost'
# export SQL_POSTGRES_PORT='check what port postgres is running on'
# export SQL_POSTGRES_DATABASE_NAME='sweat_db_local'

source .env.local 
```

###Ash Installation

```sh
cd ~/Downloads (or wherever you want)
git clone --recursive https://github.com/ash-shell/ash.git
cd /usr/local/bin
ln -s /Users/~~YOUR COMPUTER USER HERE DONT COPY THIS~~~/Downloads/ash .

#Back in your cloned repo directory:
ash apm:install
```

Also, ensure your [~/.pgpass file](https://www.postgresql.org/docs/9.3/libpq-pgpass.html) is configured with the credentials you have set up in that file.

### Install node dependencies

```
npm i
```

### Setting up the Database Schema

```sh
ash migrate
```

### Now Run it

```
npm start
```
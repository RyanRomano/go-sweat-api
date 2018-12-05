# go-sweat-api

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

# go-sweat-api

## 1. Getting Started
Install the following dependencies:
- [Node](https://nodejs.org/en/)
- [Postgres](https://postgresapp.com/)
- [Ash](https://github.com/ash-shell/ash) (Directions Below)

## 2. Clone repo
```sh
git clone git@github.com:RyanRomano/go-sweat-api.git
```

### 3. Create the database
```sh
createdb sweat_db_local
```

### 4. Install node dependencies
```
npm i
```

### 5. Configure the .env file
```sh
cp .env.sample .env.local

#Fill out the missing .env variables with your info:
export SQL_POSTGRES_USER='your login here'
export SQL_POSTGRES_PASSWORD='your password here'
export SQL_POSTGRES_HOST='probably localhost'
export SQL_POSTGRES_PORT='check what port postgres is running on'
#This must match the db name created in step 3:
export SQL_POSTGRES_DATABASE_NAME='sweat_db_local'

#Save the file and back in your repo directory, source env variables with:
source .env.local 
```

### 6. Install Ash
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

### 7. Set up the Database Schema
```sh
ash migrate
```

### 8. Now Run it
```
npm start
```
Should now see this message: Listening to localhost:3000! :)

[The next step is to install the front end](https://github.com/RyanRomano/go-sweat-view)

# Rails-Svelte-Starter

## Introduction

This is an SPA starter using Vite Ruby(include Ruby on Rails 7) with Svelte.

## Technical information

### Backend

#### Ruby

**Ruby 3.0.0** is used on this repo

#### Rails

**Rails 7.0.0** is used on this repo

### Frontend

#### Javascript Framework

**Svelte 4.2.0** is used on this repo

#### CSS Framework

TBA

### Clone the repo to your local machine

You can clone this repo by Github using command line prompt:

```bash
git clone https://github.com/southparkstan123/rails-svelte-starter.git
```

After cloning the repo, install the dependencies for frontend and backend by following command:

```bash
yarn install && bundle install
```

### Environment variables

You can add the .env files to store the configuration value for different environments , the example file is in ```.env.template```, just copy this file for specific environment. 

For example, in development, create ```.env.development.local```, then input the key and value on it.

In addition, you can add the test configurations for your local machine by copy ```.env.template```, then create and modify as ```.env.test.local```

### Database (Optional)

**Important**
You have to ensure that MySQL and Redis driver is installed in your local machine.

If you not require the username and password for your database, just comment out the username and password field on ```config/database.yml```

You can create the database and migration by following command:
```bash
rails db:create && rails db:migrate
```

If you want to seeding of a database with data by following command:
```bash
rails db:seed
```

### Run the test cases

#### Backend

TBC

#### Frontend

TBC

### Fix Lint and Type errors

TBC

## Start up the server

Run ```rails s -b 0.0.0.0``` and access ```http://<YOUR_HOST_NAME_IN_ENV_FILE>:3000``` on Web browser.

**Remark: Edit your hosts file for your host name**

**If you want to enable HMR, run ```foreman s -f Procfile.dev```**

Happy Coding!!!!!

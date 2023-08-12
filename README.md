<!-- @format -->

# Single Resource Project Back-End

This is a project that utilizes Node.js, Express, PostgreSQL, and other dependencies to create a web application.

## Installation

To install the project dependencies, execute the following command:

```shell
npm install
```

## Configuration

To configure the project, you need to create a file named `.env` at the root of your project and add the following environment variables:

```dotenv
PORT= The port where your application will run (for example, 3000)
PG_HOST= The host where your PostgreSQL database is running (e.g., localhost)
PG_PORT= The port on which your PostgreSQL database is listening (default is 5432)
PG_DATABASE= The name of your PostgreSQL database (e.g., singleresourcedb)
PG_USER= The username for connecting to your PostgreSQL database (e.g., postgres)
PG_PASSWORD= The password for the specified database user (leave empty if not applicable)
```

## Usage

To populate the database with some test data, execute the following command:

```shell
npm run db:init
```

This will run the `db/schema.sql` script that will create some tables in your database.

```shell
npm run db:seed
```

This will run the `db/seed.sql` script that will populate your database with some records.

To start the application, run the following command:

```shell
npm start
```

This will start the server on the specified port and connect to the PostgreSQL database.

## Routes

Below is a list of the routes in the application:

For now, there is only one route, which is `/games`.

## Author

Blanca Altamirano
Alejandra Ramirez

## Contributors

Please feel free to contribute by submitting a pull request or raising an issue.

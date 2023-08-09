DROP DATABASE IF EXISTS singleresourcedb;

CREATE DATABASE singleresourcedb;

\c singleresourcedb

CREATE TABLE platform (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE
    game (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        picture VARCHAR(255) DEFAULT 'https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg',
        is_favorite BOOLEAN DEFAULT (RANDOM() < 0.5),
        rating VARCHAR(20) CHECK (
            rating IN ('EC', 'E', 'E10+', 'T', 'M', 'AO')
        ) DEFAULT 'E',
        genre VARCHAR(100) CHECK (
            genre IN (
                'Action',
                'Adventure',
                'RPG',
                'Sports',
                'Puzzle',
                'Simulation',
                'Strategy',
                'Survival horror',
                'Indie',
                'Sandbox',
                'Other'
            )
        ) DEFAULT 'Other',
        creation_date DATE CHECK (creation_date <= CURRENT_DATE)
    );

CREATE TABLE
    game_platform (
        game_id INT REFERENCES game(id),
        platform_id INT REFERENCES platform(id),
        PRIMARY KEY (game_id, platform_id)
    );
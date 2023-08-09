\c singleresourcedb

INSERT INTO platform (name) VALUES 
('PS5'), ('Xbox'), ('PC'),
('Nintendo Switch'), ('Amazon Luna'),
('PS4'), ('iOS'), ('Android'),
('PlayStation');

INSERT INTO
    game (
        picture,
        title,
        rating,
        genre,
        creation_date
    )
VALUES (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/Phasmophobia.jpg?alt=media&token=bca373d3-634e-41f7-a228-245f0d7a1a08',
        'Phasmophobia',
        'M',
        'Adventure',
        '2016-09-18'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/Pokemon_Scarlet_and_Violet.png?alt=media&token=25fb74d3-1b01-42c7-b310-61efe254ac27',
        'Pokemon: Scarlet & Violet',
        'E',
        'RPG',
        '2022-11-18'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/Animal_Crossing.jpeg.jpg?alt=media&token=9c295672-bcbc-4db7-a268-3c4c632b6f7a',
        'Animal Crossing: New Horizons',
        'E',
        'Adventure',
        '2020-03-20'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/RE2.jpeg.jpg?alt=media&token=ecaf63f0-89dd-4c28-abb9-6c69453e6059',
        'Resident Evil 2',
        'M',
        'Survival horror',
        '2019-01-25'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/Dead_Space.jpeg.jpg?alt=media&token=7cc285d2-9025-4e8c-8b5f-15a274e38c9b',
        'Dead Space',
        'M',
        'Adventure',
        '2023-01-27'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/Don_t_Starve.jpeg.jpg?alt=media&token=e1c041b2-6b6b-47da-ab9c-d4099105dc18',
        'Don’t Starve Together',
        'T',
        'Indie',
        '2016-04-21'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/Mine_Craft.jpeg.jpg?alt=media&token=9096fde1-3466-420b-b881-70d1802c4adb',
        'Minecraft',
        'E10+',
        'Sandbox',
        '2011-11-18'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/The_Evil_Within.jpeg.jpg?alt=media&token=bfc2ba2c-68a6-41c8-bc59-0760ec74ff6b',
        'The Evil Within',
        'M',
        'Survival horror',
        '2014-10-14'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/Stardew_Valley.jpeg.jpg?alt=media&token=43207024-f001-4a29-a4ce-c97403347dba',
        'Stardew Valley',
        'E10+',
        'Adventure',
        '2016-02-26'
    ), (
        'https://firebasestorage.googleapis.com/v0/b/booksapp-6c6a2.appspot.com/o/outlast.jpg?alt=media&token=9312487e-4d32-4ca4-9743-3775a215cf8c',
        'Outlast',
        'M',
        'Survival horror',
        '2013-09-04'
    );

INSERT INTO
    game (
        title,
        rating,
        genre,
        creation_date
    )
VALUES (
        'Testing',
        'M',
        'Adventure',
        '2010-09-18'
    );

INSERT INTO
    game_platform (game_id, platform_id)
VALUES (1, 1), (1, 2), (1, 3), (2, 4), (3, 4), (4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (5, 1), (5, 2), (5, 3), (6, 6), (6, 2), (6, 3), (7, 2), (7, 5), (7, 6), (7, 7), (7, 4), (7, 8), (7, 3), (8, 2), (8, 6), (8, 3), (9, 4), (9, 3), (9, 6), (9, 2), (9, 7), (10, 3), (10, 6), (10, 2), (10, 4), (11, 4);
USE potLucky_db;


COMMENT 'Seeds the categories table and forgets it, it should not be edited except for at a system wide level';
INSERT INTO Categories (categoryString)
VALUES ("Appetizers" );

INSERT INTO Categories (categoryString)
VALUES ("Entrees" );

INSERT INTO Categories (categoryString)
VALUES ("Desserts" );

INSERT INTO Categories (categoryString)
VALUES ("Drinks" );

INSERT INTO Categories (categoryString)
VALUES ("Other" );


COMMENT 'Initializes the Usertypes table';
INSERT INTO Categories (categoryString)
VALUES ("User" );

INSERT INTO Categories (categoryString)
VALUES ("Admin" );

INSERT INTO Categories (categoryString)
VALUES ("SuperAdmin" );

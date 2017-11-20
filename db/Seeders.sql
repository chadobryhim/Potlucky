USE potLucky_db;


/*!'Seeds the categories table and forgets it, it should not be edited except for at a system wide level' */
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


COMMENT 'Initializes the Usertypes table table is fixed and can only be eddited ';
INSERT INTO UserType (typeName)
VALUES ("User" );

INSERT INTO UserType (typeName)
VALUES ("Admin" );

INSERT INTO UserType (typeName)
VALUES ("SuperAdmin" );

SELECT * FROM Catergories;
SELECT * FROM UserTYPE;

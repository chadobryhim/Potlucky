-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-11-17 23:39:30.598
CREATE DATABASE potLucky_db;

USE potLucky_db;
-- tables
-- Table: Categories
CREATE TABLE Categories (
    category int NOT NULL AUTO_INCREMENT,
    categoryString varchar(30) NULL,
    CONSTRAINT Categories_pk PRIMARY KEY (category)
) COMMENT '1:Appetizers
2:Entrees
3:Desserts
4:Drinks
5:Other';

-- Table: Items
CREATE TABLE Items (
    itemID int NOT NULL AUTO_INCREMENT,
    category int NOT NULL,
    assigned varchar(40) NULL,
    item_Name varchar(20) NOT NULL,
    notes varchar(140) NULL,
    potluck int NOT NULL,
    CONSTRAINT Items_pk PRIMARY KEY (itemID)
);

-- Table: Potluck
CREATE TABLE Potluck (
    potluck_ID int NOT NULL AUTO_INCREMENT,
    date date NOT NULL,
    startTime time NULL,
    location varchar(30) NULL,
    eventURL varchar(50) NULL,
    phone int NOT NULL,
    endTime time NOT NULL,
    details varchar(140) NOT NULL,
    email varchar(40) NOT NULL,
    CONSTRAINT Potluck_pk PRIMARY KEY (potluck_ID)
);

-- Table: PotluckUsers
CREATE TABLE PotluckUsers (
    users int NOT NULL,
    potLuck int NOT NULL,
    userType int NOT NULL,
    potLuck_User_ID int NOT NULL AUTO_INCREMENT,
    UNIQUE INDEX PotluckUsers_ak_1 (users),
    UNIQUE INDEX PotLuck_ak_2 (potLuck),
    CONSTRAINT PotluckUsers_pk PRIMARY KEY (potLuck_User_ID)
);

-- Table: UserType
CREATE TABLE UserType (
    type int NOT NULL AUTO_INCREMENT,
    typeName varchar(10) NULL,
    CONSTRAINT UserType_pk PRIMARY KEY (type)
) COMMENT '1: Standard User for Table
2: Event Admin
3: Super Admin(us) ';

-- Table: Users
CREATE TABLE Users (
    user_Id int NOT NULL AUTO_INCREMENT,
    userToken varchar(50) NULL,
    name varchar(30) NOT NULL,
    CONSTRAINT Users_pk PRIMARY KEY (user_Id)
);

-- foreign keys
-- Reference: Items_Categories (table: Items)
ALTER TABLE Items ADD CONSTRAINT Items_Categories FOREIGN KEY Items_Categories (category)
    REFERENCES Categories (category);

-- Reference: Potluck (table: Items)
ALTER TABLE Items ADD CONSTRAINT Potluck FOREIGN KEY Potluck (potluck)
    REFERENCES Potluck (potluck_ID);

-- Reference: PotluckUsers_Potluck (table: PotluckUsers)
ALTER TABLE PotluckUsers ADD CONSTRAINT PotluckUsers_Potluck FOREIGN KEY PotluckUsers_Potluck (potLuck)
    REFERENCES Potluck (potluck_ID);

-- Reference: PotluckUsers_UserType (table: PotluckUsers)
ALTER TABLE PotluckUsers ADD CONSTRAINT PotluckUsers_UserType FOREIGN KEY PotluckUsers_UserType (userType)
    REFERENCES UserType (type);

-- Reference: PotluckUsers_Users (table: PotluckUsers)
ALTER TABLE PotluckUsers ADD CONSTRAINT PotluckUsers_Users FOREIGN KEY PotluckUsers_Users (users)
    REFERENCES Users (user_Id);

-- End of file.

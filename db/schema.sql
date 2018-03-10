CREATE DATABASE IF NOT EXISTS beer_db;

USE beer_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS beers;
DROP TABLE IF EXISTS customer;

-- Create the beers table
CREATE TABLE beers
(
    id int NOT NULL AUTO_INCREMENT,
    beer_name VARCHAR(255) NOT NULL,
    rating VARCHAR(255) NOT NULL,
    comments VARCHAR(255) NOT NULL,
    location_data VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);
-- Create the customer table
CREATE TABLE customer
(
    id int NOT NULL AUTO_INCREMENT,
    cust_name VARCHAR(255) NOT NULL,
    rating INTEGER(11) NOT NULL,
    comments VARCHAR(255) NOT NULL,
    location_data VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

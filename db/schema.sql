### Schema

CREATE DATABASE discover_db;
USE discover_db;

CREATE TABLE activity
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(300) NOT NULL,
	activity varchar(300) NOT NULL,
	address varchar (300) NOT NULL,
	city varchar(200) NOT NULL,
	state varchar(50) NOT NULL,
	zip int (5) NOT NULL, 
	catagory varchar (400) NOT NULL
	time_created datetime NOT NULL DEFAULT NOT(),
	PRIMARY KEY (id)
);

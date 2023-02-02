DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS professor;
DROP TABLE IF EXISTS course;



CREATE TABLE user(
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL
  
);

INSERT INTO user (firstname, lastname, city,  password, email) VALUES ("Sahrane", "Guassemi", "Lyon", "password", "sahrane@cp.com"), ("Javier", "Lopez", "Paris", "password", "javier@cp.com");


CREATE TABLE professor (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,name
  password varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL
  
);

INSERT INTO professor (firstname, lastname, password, email) VALUES ("Pierre", "Paillard", "password", "pierre@pf.com"), ("Thomas", "Aldaitz", "password", "thomas@pf.com");

CREATE TABLE course (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  language varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  professor_id int(11) NOT NULL,
  FOREIGN KEY (professor_id) REFERENCES professor(id)
);

INSERT INTO course (name, language, description, professor_id) VALUES ("Web Development", "Javascript", "Learn how to build a website", 1), ("Web Development", "PHP", "Learn how to build a website", 2);


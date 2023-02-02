DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS professor;



CREATE TABLE user (
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
  lastname varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  avatar varchar(255) NULL

   
);

INSERT INTO professor (firstname, lastname, password, email) VALUES ("Pierre", "Paillard", "password", "pierre@pf.com"), ("Thomas", "Aldaitz", "password", "thomas@pf.com"), ("Albus", "Dumbledore", "password", "albus@pf.com","https://www.zupimages.net/up/23/05/w6e6.jpg"), ("Serverus", "Rogue", "password", "serverus@pf.com");

CREATE TABLE course (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  language varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  professor_id int(11) NOT NULL,
  FOREIGN KEY (professor_id) REFERENCES professor(id) ON DELETE CASCADE
);

INSERT INTO course (name, language, description, professor_id) VALUES ("Web Development", "Javascript", "Learn how to build a website", 2), ("Web Development", "PHP", "Learn how to build a website", 1), ("Web Development", "Python", "Learn how to build a website", 3), ("Web Development", "Ruby", "Learn how to build a website", 4), ("Web Development", "Java", "Learn how to build a website", 1), ("Web Development", "C#", "Learn how to build a website", 2), ("Web Development", "C++", "Learn how to build a website", 3), ("Web Development", "C", "Learn how to build a website", 4), ("Web Development", "Swift", "Learn how to build a website", 1), ("Web Development", "Kotlin", "Learn how to build a website", 2), ("Web Development", "Go", "Learn how to build a website", 3), ("Web Development", "Rust", "Learn how to build a website", 4), ("Web Development", "Scala", "Learn how to build a website", 1), ("Web Development", "Haskell", "Learn how to build a website", 2), ("Web Development", "Elixir", "Learn how to build a website", 3), ("Web Development", "Clojure", "Learn how to build a website", 4), ("Web Development", "Erlang", "Learn how to build a website", 1), ("Web Development", "Dart", "Learn how to build a website", 2), ("Web Development", "R", "Learn how to build a website", 3), ("Web Development", "Perl", "Learn how to build a website", 4), ("Web Development", "Lua", "Learn how to build a website", 1), ("Web Development", "Julia", "Learn how to build a website", 2), ("Web Development", "F#", "Learn how to build a website", 3), ("Web Development", "Objective-C", "Learn how to build a website", 4), ("Web Development", "Groovy", "Learn how to build a website", 1), ("Web Development", "Racket", "Learn how to build a website", 2), ("Web Development", "Assembly", "Learn how to build a website", 3), ("Web Development", "Visual Basic", "Learn how to build a website", 4), ("Web Development", "Matlab", "Learn how to build a website", 1), ("Web Development", "Fortran", "Learn how to build a website", 2)
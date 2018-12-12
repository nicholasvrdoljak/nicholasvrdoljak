DROP DATABASE IF EXISTS movienight;

CREATE DATABASE movienight;

USE movienight;

CREATE TABLE users (
  `id` INT AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `username` (`username`)
);

CREATE TABLE movies (
  `id` INT AUTO_INCREMENT,
  `imdbID` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `created` TIMESTAMP NOT NULL,
  `created_by` INT(11),
  PRIMARY KEY (`id`),
  INDEX `imdbID` (`imdbID`),
  INDEX `name` (`name`)
);

CREATE TABLE votes (
  `id` INT AUTO_INCREMENT,
  `users_id` INT(255) NOT NULL REFERENCES users(`id`),
  `movies_id` INT(255) NOT NULL REFERENCES movies(`id`), 
  `created` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `users_id` (`users_id`), 
  INDEX `movies_id` (`movies_id`)
);
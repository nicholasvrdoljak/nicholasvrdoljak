DROP DATABASE IF EXISTS movienight;

CREATE DATABASE movienight;

USE movienight;

CREATE TABLE events (
  `id` INT(11) AUTO_INCREMENT,
  `date` DATETIME NOT NULL, 
  `name` VARCHAR(255) NOT NULL, 
  `location` VARCHAR(255) NOT NULL,
  `created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`), 
  INDEX `date` (`date`)
);

CREATE TABLE users (
  `id` INT(11) AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `votes` INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `username` (`username`)
);

CREATE TABLE movies (
  `id` INT(11) AUTO_INCREMENT,
  `imdbID` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `year` INT(11) NOT NULL,
  `genre` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `created_by` INT(11),
  PRIMARY KEY (`id`),
  INDEX `imdbID` (`imdbID`),
  INDEX `name` (`name`)
);

CREATE TABLE events_movies (
  `id` INT(11) AUTO_INCREMENT, 
  `movies_id` INT(11) NOT NULL, 
  `events_id` INT(11) NOT NULL, 
  `votes` INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`), 
  INDEX `movies_id` (`movies_id`), 
  INDEX `events_id` (`events_id`)
);

CREATE TABLE votes (
  `id` INT(11) AUTO_INCREMENT,
  `users_id` INT(255) NOT NULL REFERENCES users(`id`),
  `movies_id` INT(255) NOT NULL REFERENCES movies(`id`), 
  `created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `users_id` (`users_id`), 
  INDEX `movies_id` (`movies_id`)
);
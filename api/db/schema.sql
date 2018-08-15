DROP DATABASE IF EXISTS power_to_play;

CREATE DATABASE power_to_play;

USE power_to_play;

CREATE TABLE games (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `platform` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255),
  PRIMARY KEY (`id`),
  INDEX `name` (`name`), 
  INDEX `platform` (`platform`)
);

CREATE TABLE times_for_games (
  `id` INT AUTO_INCREMENT,
  `power_to_play_time_minutes` INT(255),
  `votes` INT(255) DEFAULT 0, 
  `description` VARCHAR(255),
  PRIMARY KEY (`id`),
  `game` INT(255) NOT NULL REFERENCES games(`id`)
);

INSERT INTO games (`name`, `platform`, `image`)
VALUES ('gta5', 'ps4', 'https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47');

INSERT INTO times_for_games (`power_to_play_time_minutes`, `description`, `game`)
VALUES (5, 'from press start to control of character', 1);
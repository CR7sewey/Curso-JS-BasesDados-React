CREATE TABLE `base_de_dadps_curso2024`.`profiles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bio` VARCHAR(55) NULL,
  `description` VARCHAR(145) NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id_fk`
    FOREIGN KEY (`user_id`)
    REFERENCES `base_de_dadps_curso2024`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

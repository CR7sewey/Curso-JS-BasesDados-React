CREATE TABLE `base_de_dadps_curso2024`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(105) NOT NULL,
  `password_hash` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) INVISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) INVISIBLE,
  UNIQUE INDEX `password_hash_UNIQUE` (`password_hash` ASC) VISIBLE);

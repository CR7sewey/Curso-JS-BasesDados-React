use base_de_dadps_curso2024;

CREATE TABLE `base_de_dadps_curso2024`.`users_rolesusers_roles` (
  `user_id` INT  NOT NULL,
  `role_id` INT  NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `role_id_idx` (`role_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id_fk`)
    REFERENCES `base_de_dadps_curso2024`.`roles` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `user_id_fk`
    FOREIGN KEY (`user_id`)
    REFERENCES `base_de_dadps_curso2024`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
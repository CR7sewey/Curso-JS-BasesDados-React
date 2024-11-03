ALTER TABLE `base_de_dadps_curso2024`.`users` 
ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT now() AFTER `password_hash`,
ADD COLUMN `updated_at` DATETIME NOT NULL DEFAULT now() on update now() AFTER `created_at`;

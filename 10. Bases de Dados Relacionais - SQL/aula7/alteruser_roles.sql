ALTER TABLE `base_de_dadps_curso2024`.`users_roles` 
ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT now() AFTER `role_id`,
ADD COLUMN `updated_at` DATETIME NOT NULL DEFAULT now() on update now() AFTER `created_at`;

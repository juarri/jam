CREATE TABLE `sequencer` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`created_at` text DEFAULT 'current_timestamp' NOT NULL,
	`updated_at` text DEFAULT 'current_timestamp' NOT NULL,
	`name` text NOT NULL,
	`steps` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`provider` text NOT NULL,
	`provider_id` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`picture` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_provider_id_unique` ON `user` (`provider_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);
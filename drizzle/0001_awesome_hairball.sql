CREATE TABLE `dimension_scores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`evaluationId` int NOT NULL,
	`dimensionName` varchar(255) NOT NULL,
	`dimensionWeight` decimal(5,2) NOT NULL,
	`score` decimal(3,2) NOT NULL,
	`weightedScore` decimal(5,4) NOT NULL,
	`maturityDefinition` text,
	`justification` text,
	`gapsIdentified` text,
	`improvementRecommendations` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `dimension_scores_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `scoring_dimensions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`weight` decimal(5,2) NOT NULL,
	`description` text,
	`maturityDefinitions` json NOT NULL,
	`evaluationCriteria` text,
	`displayOrder` int NOT NULL,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `scoring_dimensions_id` PRIMARY KEY(`id`),
	CONSTRAINT `scoring_dimensions_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `sop_evaluations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`sopTitle` varchar(500) NOT NULL,
	`facility` varchar(255),
	`systemOrProcess` varchar(255),
	`revision` varchar(100),
	`effectiveDate` timestamp,
	`reviewerName` varchar(255),
	`reviewDate` timestamp,
	`fileUrl` text,
	`fileKey` text,
	`fileName` varchar(500),
	`fileType` varchar(50),
	`sopContent` text,
	`overallScore` decimal(3,2),
	`maturityLevel` varchar(50),
	`maturityLevelNumeric` int,
	`approvalStatus` enum('approved','approved_with_conditions','not_approved'),
	`safetyGateFlagged` int NOT NULL DEFAULT 0,
	`executiveSummary` text,
	`status` enum('pending','processing','completed','failed') NOT NULL DEFAULT 'pending',
	`errorMessage` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `sop_evaluations_id` PRIMARY KEY(`id`)
);

DO $$ BEGIN
 CREATE TYPE "category" AS ENUM('Beach', 'Farms', 'Countryside', 'National parks', 'Lakefront', 'Amazing pools', 'Golfing', 'Historical homes', 'Treehouses', 'Top of the world', 'Iconic cities');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "listing" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"categories" category[],
	"guestCount" integer DEFAULT 1,
	"bedroomCount" integer DEFAULT 1,
	"bedCount" integer DEFAULT 1,
	"bathroomCount" integer DEFAULT 1,
	"pricePerNight" numeric(100) DEFAULT '0.00'
);

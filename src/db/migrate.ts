import "dotenv/config";

import { migrate } from "drizzle-orm/postgres-js/migrator";

import { client, db } from "@/db";

const runMigration = async () => {
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });

    await client.end();
  } catch (error) {
    console.error("Drizzle runMigration error", error);
  }
};

runMigration();

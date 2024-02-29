import "dotenv/config";
import type { Config } from "drizzle-kit";

import { env } from "@/utils/env";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URI
  }
} satisfies Config;

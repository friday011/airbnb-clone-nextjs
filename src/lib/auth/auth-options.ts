import type { NextAuthConfig } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { db } from "@/db";
import { env } from "@/utils/env";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

const options = {
  adapter: DrizzleAdapter(db),
  providers: [
    GitHubProvider({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET
    })
  ]
} satisfies NextAuthConfig;

export { options };

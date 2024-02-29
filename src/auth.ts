import NextAuth from "next-auth";

import { options } from "@/lib/auth/auth-options";

export const { handlers, auth } = NextAuth(options);

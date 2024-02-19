import NextAuth from "next-auth/next";
import { authConfig } from "@/config/auth";

const handler = NextAuth(authConfig);

export {handler as GET,handler as POST}

//просто создаем хендлер с 2 методами get и post
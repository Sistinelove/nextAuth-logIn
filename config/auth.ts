import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { users } from '@/data/users';

// основной файл с настройкой, авторизации создается CredentialsProvider,credentials у которого есть email и password

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email" ,required: true},
                password: { label: "Password", type: "password" ,required: true}
            },
            async authorize(credentials) {
                // проверяем существуют ли данные у пользоватея если хотя бы одно поле пустое, то возвращаем Null
                if (!credentials?.email || !credentials.password) return null;
                //создаем переменную, и производем поиск по users, в котором совпадают email 
                const currentUser = users.find(user => user.email === credentials.email)
                // проверка совпадения пароля 
                if (currentUser && currentUser.password === credentials.password) {
                    const { password, ...userWithoutPass } = currentUser;
                    // возвращаем пользователя без пароля 
                    return userWithoutPass as User;
                }
                return null
            }
        },
        )
    ],
    pages: {
        signIn: '/LogIn'
    }
}

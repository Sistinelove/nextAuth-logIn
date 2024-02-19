"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

//компонент header в котором у нас проверяется сессия, если пользователь авторизован, у него появляется возможность перейти
//на страницу Profile и разлогиниться

const Header = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
        <header className="flex bg-gray-500 w-screen h-16 items-center justify-center gap-7">
            {session ? (
                <>
                    <Link href="/">Home page</Link>
                    <Link href="/profile">Profile</Link>
                    <Link
                        href="#"
                        onClick={() => signOut({ callbackUrl: "/LogIn" })}
                    >
                        Sign Out
                    </Link>
                </>
            ) : (
                <Link href="/LogIn">SignIn</Link>
            )}
        </header>
    );
};
export default Header;

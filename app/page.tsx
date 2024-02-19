import Header from "../components/header";
import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth";

export default async function  Home(){
    //функция для асинхронного получения данных о сессии
    const session = await getServerSession(authConfig);
    return (
        <>
            <header className="flex bg-gray-500 w-screen h-16 items-center justify-center gap-7">
                <Header />
            </header>
            <h1 className="flex items-center">Home Page</h1>
            {/* Отображаем имя пользователя, который авторизирован */}
                <h1>{session?.user?.name}</h1>
        </>
    );
};

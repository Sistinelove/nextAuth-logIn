"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";

const LogIn = () => {
    const router = useRouter();
        // создает обработчик события формы, которая вызывается при отправке
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        // Изначально был план получить данные с помощью объекта FormData, и отправлять запрос с использованием полученных данных
        // но по какой-то причине, (я не смог разобраться по какой), у меня в currentTarget прилетает null,из-за чего я решил сделать
        // решение через event.target хранящий данные email и password.
        // Так же был рабочий вариант с использованием обработчика событий onClick на button 
        //  const handleSignIn = async () => {
        //     try {
        //         await signIn("credentials", { email, password, callbackUrl: "/" });
        //     } catch (error) {
        //         console.error("Failed to sign in:", error);
        //     }
        // }; но этот вариант, я оставил, и сделал через form onSubmit
        
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        console.log(formData);

        const res = await signIn("credentials", {
            email: event.target[0].value,
            password: event.target[1].value,
            redirect: false,
        });

        if (res && !res.error) {
            router.push("/profile");
        } else {
            router.push("/")
        }
    };

    return (
        <div className="flex justify-center h-screen items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-slate-400 shadow-md w-80 h-64 rounded-lg flex flex-col items-center"
            >
                <div className="text-2xl p-3 items-center w-auto justify-center flex text-cyan-400">
                    Sign In
                </div>
                <div className="flex flex-col gap-4 mb-3">
                    <div className="flex items-center justify-center rounded-sm bg-white">
                        <PersonIcon className="" />
                        <input
                            className="p-1 m-1 rounded-sm bg-white"
                            placeholder="email"
                            type="email"
                        />
                    </div>
                    <div className="flex items-center justify-center  rounded-sm bg-white">
                        <HttpsIcon className="rounded-sm bg-white" />
                        <input
                            className="p-1 m-1 rounded-sm bg-white"
                            placeholder="password"
                            type="password"
                        />
                    </div>
                </div>
                <button
                    className="bg-cyan-400 w-20 flex text-xl items-center justify-center rounded-3xl"
                    type="submit"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default LogIn;

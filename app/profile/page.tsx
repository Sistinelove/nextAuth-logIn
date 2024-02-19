'use client'
import Header from "../../components/header";
import { useEffect, useState } from "react";
import axios from "axios";

//Страница профиля, с axios запросом, для отображения данных, в нашем случае avatar и first_name

interface UserData {
    avatar: string;
    first_name: string;
}

const Profile = () => {
    const [data, setData] = useState<UserData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://reqres.in/api/users?page=2");
                setData(res.data.data); 
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className="m-3 w-auto h-10 rounded-md gap-3 flex flex-wrap items-center text-center justify-center">
                {data.map((person, index) => (
                    <div key={index} className="flex flex-col">
                        <img className="w-40 h-40 mb-1" src={person.avatar} alt={person.first_name} />
                        <div className="items-center">{person.first_name}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Profile;

'use client'

//создаем провайдер, с помощью которого оборачиваем основной layout, для работы Nextauth. Провайдер предоставляет доступ к информации о сессии

import {SessionProvider} from 'next-auth/react'

export const Providers = (  {children}:  {children:React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
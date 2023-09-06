"use client";

import { MyUserContextProvdier } from "@/hooks/useUser";

interface UserProviderProps{
    children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    return(
        <MyUserContextProvdier>
            {children}
        </MyUserContextProvdier>
    )
}

export default UserProvider;
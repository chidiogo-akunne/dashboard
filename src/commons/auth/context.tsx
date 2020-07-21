import {createContext, useContext} from 'react';

type AuthType = 
    | null
    | {
       error: any;
       status: 'unauthenticated' | 'loading';
       isAuthenticated: false;
       login: (payload: {email: string; password: string}) => void; 
       logout: () => void;
    }
    | {
        user: {
            id: string;
            fullName: string;
            email: string;
            type: string;
        };
        status: 'authenticated';
        isAuthenticated: true;
        login: (payload: {email: string; password: string}) => void;
        logout: () => void;
    }

const AuthContext = createContext<AuthType>(null);

function useAuthContext(){
    const store = useContext(AuthContext)
    if(!store){
        throw new Error("Cannoot use 'useAuthContext' outside of AuthProvider");
    }

    return store;
}

const Provider = AuthContext.Provider;

export {useAuthContext, Provider};


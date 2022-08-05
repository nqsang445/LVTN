import { createContext, useState } from "react";

const LoginContext = createContext();
function LoginProvider({ children }) {
    const [user, setUser] = useState('sang');
    const [roleId, setRoleId] = useState('R1');
    const [isLogin, setIsLogin] = useState(false);

    return (
        <LoginContext.Provider>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginProvider, LoginContext };
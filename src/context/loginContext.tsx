import { createContext, useState } from 'react';

interface LoginContextType{
  user: string;
  hanldeSetUser: (user: string) => void;
}

interface LoginContextProps {
 children: React.ReactNode;
}

export const LoginContext =  createContext({} as LoginContextType );
export function LoginContextProvider({children}: LoginContextProps){
  const [user, setUser] = useState('');

  function hanldeSetUser(user: string){
    setUser(user);
  }
  return(
    <LoginContext.Provider value={{user, hanldeSetUser}}>
      {children}
    </LoginContext.Provider>
  );
}

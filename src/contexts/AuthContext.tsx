import { createContext, ReactNode, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify'


type AuthContextData = {
  user?: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
}

type UserProps = {
  email?: string;
  password?: string;
}

type SignInProps = {
  email?: string;
  password?: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

// const navigate = useNavigate()

export function signOut() {
  try {
    localStorage.setItem('isAuthenticated', 'false')
    // navigate('/')
  } catch {
    toast.error('Erro ao deslogar')
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<SignInProps>()
  const isAuthenticated = !!user;

  const signIn = async ({ email, password }: SignInProps) => {
    try {
      localStorage.setItem('isAuthenticated', 'true');

      // navigate('/home')
    } catch (err) {
      toast.error("Erro ao acessar!")
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

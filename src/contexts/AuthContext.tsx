import { createContext, ReactNode, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify'


type AuthContextData = {
  user?: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  // signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
  email?: string;
  password?: string;
}

type SignInProps = {
  email?: string;
  password?: string;
}

// type SignUpProps = {
//   name: string;
//   email: string;
//   password: string;
// }

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

// const navigate = useNavigate()

export function signOut(){
  try{
    localStorage.setItem('isAuthenticated', 'false')
    // navigate('/')
  }catch{
    toast.error('Erro ao deslogar')
  }
}

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<SignInProps>()
  const isAuthenticated = !!user;

  // useEffect(() => {
  //   const isLogged = localStorage.getItem('isAuthenticated');

  //   if(isLogged) {
  //       localStorage.setItem('isAuthenticated', 'true');
  //     } else {
  //       localStorage.setItem('isAuthenticated', 'false');
  //   }

  // }, [])

  const signIn = async ({ email, password }: SignInProps) => {
    try {
      localStorage.setItem('isAuthenticated', 'true');
      toast.success('Logado com sucesso!')

      // navigate('/home')
    }catch(err){
      toast.error("Erro ao acessar!")
    }
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

// import { createContext, ReactNode, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify'


// type AuthContextData = {
//   user: UserProps;
//   isAuthenticated: boolean;
//   signIn: (credentials: SignInProps) => Promise<void>;
//   signOut: () => void;
// }

// type UserProps = {
//   id: string;
//   name: string;
//   email: string;
// }

// type SignInProps = {
//   email: string;
//   password: string;
// }

// type SignUpProps = {
//   name: string;
//   email: string;
//   password: string;
// }

// type AuthProviderProps = {
//   children: ReactNode;
// }

// const navigate = useNavigate();

// export const AuthContext = createContext({} as AuthContextData)

// export function signOut() {
//   try {
//     localStorage.setItem('isAuthenticated', 'false')
//     navigate('/')
//   } catch {
//     toast.error('Erro ao deslogar')
//   }
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

//   useEffect(() => {
//     const isLogged = localStorage.getItem('isAuthenticated')

//     if(isLogged) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, [])

//   async function signIn({ email, password }: SignInProps) {
//     try {
      

//       toast.success('Logado com sucesso!')
//       navigate('/home')

//     } catch (err) {
//       toast.error("Erro ao acessar!")
//     }
//   }

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
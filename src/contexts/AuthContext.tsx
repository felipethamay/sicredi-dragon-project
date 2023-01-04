import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";

type AuthContextData = {
  user?: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
};

type UserProps = {
  email?: string;
  password?: string;
};

type SignInProps = {
  email?: string;
  password?: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    localStorage.setItem("isAuthenticated", "false");
  } catch {
    toast.error("Erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = !!localStorage.getItem("isAuthenticated");

  const signIn = async () => {
    try {
      localStorage.setItem("isAuthenticated", "true");
    } catch (err) {
      toast.error("Erro ao acessar!");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

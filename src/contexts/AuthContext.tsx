import { createContext } from "react";
import { toast } from "react-toastify";
import { AuthContextData, AuthProviderProps } from "../types/auth.types";

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

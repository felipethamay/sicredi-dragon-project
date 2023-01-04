import { ReactNode } from "react";

export interface AuthContextData {
  user?: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
}

export interface UserProps {
  email?: string;
  password?: string;
}

export interface SignInProps {
  email?: string;
  password?: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}

import { InputHTMLAttributes } from "react";
import "./sicredi-input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps) {
  return <input className="input" {...rest} />;
}

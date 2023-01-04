
import { InputHTMLAttributes } from 'react';
import './input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({...rest}: InputProps){
  return(
    <input className='input' {...rest} />
  )
}
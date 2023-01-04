import { ReactNode, ButtonHTMLAttributes } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode,
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button
      className='button'
      disabled={loading}
      {...rest}
    >
      <a className='buttonText'>
        {children}
      </a>
    </button>
  )
}
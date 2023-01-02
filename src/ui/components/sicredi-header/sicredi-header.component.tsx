import { Link } from 'react-router-dom';
import './sicredi-header.css';

export default function SicrediHeader() {
    return (
        <header>
            <Link className='logo' to='/'>Dragons - SICREDI</Link>
            <Link className='button' to='/register'>Cadastrar dragão</Link>
            <Link className='button' to='/login'>Sair</Link>
        </header>
    );
}
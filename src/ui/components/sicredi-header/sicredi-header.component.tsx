import { Link } from 'react-router-dom'
import './sicredi-header.css'
import Img from './../../../assets/images/sicredi-logo.svg';

export default function SicrediHeader() {

    return (
        <header>
            <Link className='logo' to='/'>
                <img src={Img} width={190} height={140} />
            </Link>
            <Link className='button' to='/register'>Cadastrar dragão</Link>
            <Link className='button' to='/login'>Sair</Link>
        </header>
    )
}

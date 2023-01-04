import { Link, useNavigate } from 'react-router-dom'
import './sicredi-header.css'
import Img from './../../../assets/images/sicredi-dragon.svg';
import Icon from './../../../assets/icons/exit.svg';

export default function SicrediHeader() {
    const navigate = useNavigate()
    
    const onExit = () => {
        localStorage.setItem('isAuthenticated', 'false');
        navigate('/')
    }

    return (
        <header>
            <Link className='logo' to='/home'>
                <img src={Img} width={190} height={140} />
            </Link>
            <Link className='button' to='/register'>Cadastrar dragão</Link>
            <input
                type="image"
                src={Icon}
                title="Sair"
                alt="Submit"
                className='button-exit'
                onClick={onExit}
            />

        </header>
    )
}

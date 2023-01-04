import { Link } from 'react-router-dom'
import './sicredi-header.css'
import Img from './../../../assets/images/sicredi-dragon.svg';
import Icon from './../../../assets/icons/exit.svg';

export default function SicrediHeader() {

    return (
        <header>
            <Link className='logo' to='/'>
                <img src={Img} width={190} height={140} />
            </Link>
            <Link className='button' to='/register'>Cadastrar dragão</Link>
            <input
                type="image"
                src={Icon}
                title="Gerar relatório pdf"
                alt="Submit"
                className='button-exit'
            />

        </header>
    )
}

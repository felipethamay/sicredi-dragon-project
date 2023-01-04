import { Link, useNavigate } from "react-router-dom";
import "./sicredi-header.css";
import Img from "./../../../assets/images/sicredi-dragon.svg";
import Icon from "./../../../assets/icons/exit.svg";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function SicrediHeader() {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onExit = () => {
    signOut();
    navigate("/");
  };

  return (
    <header>
      <Link className="logo" to="/home">
        <img src={Img} width={190} height={140} />
      </Link>
      <Link className="button" to="/register">
        Cadastrar dragão
      </Link>
      <input
        type="image"
        src={Icon}
        title="Sair"
        alt="Submit"
        className="button-exit"
        onClick={onExit}
      />
    </header>
  );
}

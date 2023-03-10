import { FormEvent, useContext, useState } from "react";
import { Input } from "../../components/sicredi-input/sicredi-input.component";
import { Button } from "../../components/sicredi-button/sicredi-button.component";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import logoImg from "../../../assets/images/sicredi-dragon.svg";
import "./login.css";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    try {
      if (!email || !password) {
        toast.error("Preencha os campos");
        return;
      }

      if (email === "teste@sicredi.com" && password === "123") {
        const data = {
          email: email,
          password: password,
        };

        signIn(data);
        navigate("/home");
        return;
      } else {
        toast.error("Usuário ou senha incorreto");
      }
    } catch (error) {
      toast.error("Usuário ou senha incorreto");
      setLoading(false);
    }
  };

  return (
    <div className="container-center">
      <img src={logoImg} alt="logo Sicredi" width={380} height={120} />

      <div className="login">
        <form onSubmit={handleLogin}>
          <Input
            placeholder="Digite seu email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" loading={loading}>
            Acessar
          </Button>
        </form>
      </div>
    </div>
  );
}

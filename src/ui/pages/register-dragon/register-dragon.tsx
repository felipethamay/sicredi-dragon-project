import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DragonService } from "../../../services/dragon/dragon.service";
import { Button } from "../../components/sicredi-button/sicredi-button.component";
import SicrediHeader from "../../components/sicredi-header/sicredi-header.component";
import { Input } from "../../components/sicredi-input/sicredi-input.component";
import "./register-dragon.css";

const dragonService = new DragonService();

export default function RegisterDragon() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const handleRegister = async () => {
    try {
      setLoading(true);

      const data = {
        name,
        type,
        createdAt,
      };

      if (!name || !type) {
        toast.error("Preencha todos os campos!");
        return;
      }

      await dragonService.postDragon(data);

      toast.success("Dragão cadastrado com sucesso");
      setLoading(false);
      navigate("/home");
    } catch (err) {
      toast.error("Ops erro ao cadastrar!");
      setLoading(false);
    }
  };

  const onBack = () => {
    navigate("/home");
  };

  if (!isAuthenticated) {
    navigate("/");
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <>
      <SicrediHeader />
      <h2>Cadastrar dragão</h2>
      <div className="container">
        <div className="form">
          <label>
            <Input
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <Input
              type="text"
              placeholder="Tipo"
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label>
            <Input type="date" onChange={(e) => setCreatedAt(e.target.value)} />
          </label>
          <Button className="button-add" onClick={handleRegister}>
            Salvar
          </Button>
          <Button className="button-back" onClick={onBack}>
            Voltar
          </Button>
        </div>
      </div>
    </>
  );
}

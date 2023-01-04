import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DragonService } from "../../../services/dragon/dragon.service";
import { IDragon } from "../../../types/dragon.types";
import { Button } from "../../components/sicredi-button/sicredi-button";
import SicrediHeader from "../../components/sicredi-header/sicredi-header.component";
import { Input } from "../../components/sicredi-input/sicredi-input";
import "./edit.dragon.css";

const dragonService = new DragonService();

export default function EditDragon() {
  const [loading, setLoading] = useState(false);
  const [dragons, setDragons] = useState<IDragon[]>([]);

  const { id } = useParams();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const navigate = useNavigate();

  const fetchDragonsById = async (event: FormEvent) => {
    try {
      setLoading(true);

      const response = await dragonService.getDragonById(id!);

      setDragons(response.data);

      setLoading(false);
    } catch (error) {
      toast.error("Erro ao buscar dragões!");
    }
  };

  // useEffect(() => {
  //   fetchDragonsById();
  // }, []);

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("id", id!);
      data.append("name", name);
      data.append("title", title);
      data.append("type", type);
      data.append("createdAt", createdAt);

      await dragonService.postDragon(data);

      toast.success("Dragão editado com sucesso");
      setLoading(false);
    } catch (err) {
      toast.error("Ops erro ao editar!");
      setLoading(false);
    }

    setName("");
    setTitle("");
    setType("");
    setCreatedAt("");

    navigate("/home");
  };

  const onBack = () => {
    navigate("/home");
  };

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
      <h2>Editar dragão</h2>
      <div className="container">
        <div className="form">
          <form onSubmit={handleRegister}>
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
                placeholder="Titulo"
                onChange={(e) => setTitle(e.target.value)}
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
              <Input
                type="date"
                onChange={(e) => setCreatedAt(e.target.value)}
              />
            </label>
            <Button className="buttonAdd" type="submit">
              Salvar
            </Button>
            <Button className="button-back" onClick={onBack}>
              Voltar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

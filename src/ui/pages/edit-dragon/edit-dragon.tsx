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
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [dragons, setDragons] = useState<IDragon>();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const fetchDragonDetails = async () => {
    try {
      setLoading(true);

      const response = await dragonService.getDragonById(id!);

      setDragons(response.data);

      setLoading(false);
    } catch (error) {
      toast.error("Dragão não encontrado");
    }
  };

  useEffect(() => {
    fetchDragonDetails();
  }, []);

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);

      const data = {
        name: name,
        type: type,
        createdAt: createdAt,
      };

      await dragonService.putDragon(id!, data);

      toast.success("Dragão editado com sucesso");
      setLoading(false);
      navigate("/home");
    } catch (err) {
      toast.error("Ops erro ao editar!");
      setLoading(false);
    }
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
          <label>
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              defaultValue={dragons?.name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <Input
              type="text"
              name="type"
              placeholder="Tipo"
              defaultValue={dragons?.type}
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label>
            <Input
              type="date"
              name="createdAt"
              defaultValue={dragons?.createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
            />
          </label>
          <Button className="buttonAdd" onClick={handleRegister}>
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

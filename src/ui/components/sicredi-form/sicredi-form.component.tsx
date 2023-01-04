import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { DragonService } from '../../../services/dragon/dragon.service';
import { IDragon } from '../../../types/dragon.types';
import { Button } from '../button/button';
import { Input } from '../input/input';
import './sicredi-form.css'

const dragonService = new DragonService();

export default function SicrediForm({
  id,
  name,
  title,
  type,
  createdAt,
}: IDragon) {

  const [loading, setLoading] = useState(false);
  const [dragons, setDragons] = useState<IDragon[]>([]);
  const [ids, setId] = useState('');
  const [names, setName] = useState('');
  const [titles, setTitle] = useState('');
  const [types, setType] = useState('');
  const [historiess, setHistories] = useState('');
  const [createdAts, setCreatedAt] = useState('');

  const fetchDragons = async () => {
    try {
      setLoading(true)

      const response = await dragonService.getDragon();

      setDragons(response.data)

      setLoading(false)
    } catch (error) {
      toast.error("Erro ao buscar dragões!")
    }
  }

  const incrementId = async () => {
    setId(dragons.slice(-1)[0].id)
  }

  useEffect(() => {
    fetchDragons();
  }, [])

  const handleEdit = async () => {
    try {
      setLoading(true);

      await dragonService.putDragon(id)
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao editar dragão");
      setLoading(false);
    }
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault();
    incrementId();
    const ids = parseInt(id) + 1;

    try {
      setLoading(true)

      const data = new FormData();

      if (name === '' || title === '' || type === '' || createdAt === '') {
        toast.error("Preencha todos os campos!");
        return;
      }

      data.append('id', ids.toString())
      data.append('name', name);
      data.append('title', title);
      data.append('type', type);
      data.append('createdAt', createdAt);

      // await dragonService.postDragon(data);

      toast.success('Dragão cadastrado com sucesso')
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Ops erro ao cadastrar!")
      setLoading(false);
    }

    setName('');
    setTitle('');
    setType('')
    setHistories('');
    setCreatedAt('');
  }

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='form'>
        <form onSubmit={handleRegister}>
          <label>Nome:
            <Input
              type='text'
              placeholder="Nome do dragão"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>Titulo:
            <Input
              type='text'
              placeholder="Titulo do dragão"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>Tipo:
            <Input
              type='text'
              placeholder="Tipo do dragão"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label>Data de nascimento:
            <Input
              type='date'
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
            />
          </label>
          <Button className='buttonAdd' type="submit">
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  )
}
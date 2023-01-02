import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { DragonService } from '../../../services/dragon/dragon.service';
import { IDragon } from '../../../types/dragon.types';
import './register-dragon.css'

const dragonService = new DragonService();

export default function RegisterDragon() {

  const [loading, setLoading] = useState(false);
  const [dragons, setDragons] = useState<IDragon[]>([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const incrementId = async () => {
    try {
      const response = await dragonService.getDragon();

      setDragons(response.data)
      setId(dragons.slice(-1)[0].id)
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(() => {
    incrementId();
  }, [])

  async function handleRegister(event: FormEvent) {
    event.preventDefault();
    incrementId();
    const ids = parseInt(id) + 1;

    try {
      setLoading(true)

      const data = new FormData();

      if (name === '' || title === '' || type === '' || histories === '' || createdAt === '') {
        toast.error("Preencha todos os campos!");
        return;
      }

      data.append('id', ids.toString())
      data.append('name', name);
      data.append('title', title);
      data.append('type', type);
      data.append('histories', histories);
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
        <h1>Novo Dragão</h1>
        <form onSubmit={handleRegister}>
          <label>Nome:
            <input
              type='text'
              placeholder="Nome do dragão"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>Titulo:
            <input
              type='text'
              placeholder="Titulo do dragão"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>Tipo:
            <input
              type='text'
              placeholder="Tipo do dragão"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label>História:
            <input
              type='text'
              placeholder="Breve história do dragão"
              value={histories}
              onChange={(e) => setHistories(e.target.value)}
            />
          </label>
          <label>Data de nascimento:
            <input
              type='date'
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
            />
          </label>
          <button className='buttonAdd' type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
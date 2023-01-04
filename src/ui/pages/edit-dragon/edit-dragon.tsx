import { useState } from 'react';
import { DragonService } from '../../../services/dragon/dragon.service';
import { IDragon } from '../../../types/dragon.types';
import SicrediForm from '../../components/sicredi-form/sicredi-form.component';
import { toast } from 'react-toastify';
import './edit.dragon.css'
import SicrediHeader from '../../components/sicredi-header/sicredi-header.component';

const dragonService = new DragonService();

export default function EditDragon() {
  const [loading, setLoading] = useState(false);
  const [dragons, setDragons] = useState<IDragon[]>([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [createdAt, setCreatedAt] = useState('');

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

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <>
      <SicrediHeader />
      <SicrediForm
        createdAt={createdAt}
        name={name}
        type={type}
        id={id}
        title={title} />
    </>
  );
}
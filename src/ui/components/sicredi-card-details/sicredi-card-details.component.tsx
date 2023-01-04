import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { DragonService } from '../../../services/dragon/dragon.service';
import { IDragon } from '../../../types/dragon.types';
import './sicredi-card-details.css'

const dragonService = new DragonService();

export default function SicrediDragonDetails() {

  const [dragons, setDragons] = useState<IDragon>();
  const [loading, setLoading] = useState(false)

  const { id } = useParams();

  const fetchDragonDetails = async () => {
    try {
      setLoading(true)

      const response = await dragonService.getDragonById(id!);

      setDragons(response.data)

      setLoading(false)
    } catch (error) {
      console.log('Dragão não encontrado');
    }
  }

  const deleteDragon = async () => {
    try {
      setLoading(true)

      await dragonService.deleteDragon(id!);

      toast.success('Dragão deletado com sucesso!')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error("Erro ao deletar dragão!")
    }
  }

  useEffect(() => {
    fetchDragonDetails();
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='list-dragons'>
        <div className='content'>
          <article key={dragons?.id}>
            <strong>Nome: {dragons?.name}</strong>
            <strong>Tipo: {dragons?.type}</strong>
            <strong>Data de Criação: {moment(dragons?.createdAt).format('DD/MM/YYYY')}</strong>
            <Link className='button-back' to='/home'>Voltar</Link>
            <Link className='button-detele' to='/home' onClick={deleteDragon}>Deletar</Link>
          </article>
        </div>
      </div>
    </div>
  );
}
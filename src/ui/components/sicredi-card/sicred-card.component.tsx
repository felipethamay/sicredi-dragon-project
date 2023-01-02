import { useEffect, useState } from 'react';
import { DragonService } from '../../../services/dragon/dragon.service';
import { Link } from 'react-router-dom'
import './sicred-card.css';
import { IDragon } from '../../../types/dragon.types';

const dragonService = new DragonService();

export function SicrediCard() {
  const [dragons, setDragons] = useState<IDragon[]>([]);
  const [loading, setLoading] = useState(false)

  const fetchDragons = async () => {
    try {
      setLoading(true)
      
      const response = await dragonService.getDragon();

      setDragons(response.data)

      setLoading(false)
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(() => {
    fetchDragons();
  }, []);

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
        {dragons.map((dragon) => {
          return (
            <div className='content'>
              <article key={dragon.id}>
                <strong>{dragon.name}</strong>
                <strong>{dragon.type}</strong>
                <Link to={`${dragon.id}`}>Detalhes</Link>
                <Link to={`edit/${dragon.id}`}>Editar</Link>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  );
}


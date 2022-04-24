import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';


export const Hero = () => {

  const { heroId } = useParams();
  const navigate = useNavigate()
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const handleReturn = () => {
    navigate(-1)
  }
  const {
    id,
    alter_ego,
    characters,
    first_appearance,
    publisher,
    superhero
  } = hero;

  if (!hero) return <Navigate to='/' />;

  return (
    <div className='grid md:grid-cols-2 gap-8 p-4'>
      <div>
        <img src={`/assets/${id}.jpg`} alt={superhero} />
      </div>
      <div className='flex justify-center items-center flex-col gap-6 text-center'>
        <h4 className="text-xl sm:text-4xl font-bold capitalize">{superhero}</h4>
        <h6 className="text-xl font-bold capitalize text-gray-400">information</h6>
        <ul className="text-lg sm:text-lg lg:text-2xl">
          <li className="flex gap-4 grow"><b>AlterEgo</b>{alter_ego}</li>
          <li className="flex gap-4 grow"><b>Publisher</b>{publisher}</li>
          <li className="flex gap-4 grow"><b>Characters</b>{characters}</li>
          <li className="flex gap-4 grow"><b>FirstAppearance</b>{first_appearance}</li>
        </ul>

        <button className="bg-red-700 text-white px-6 py-2 rounded-2xl hover:bg-red-500"
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}

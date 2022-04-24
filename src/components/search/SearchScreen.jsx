import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';

import { motion } from 'framer-motion';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.1
    }
  }
}


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search)
  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);
  const [formValues, handleInputChange] = useForm({
    searchText: q
  });
  const { searchText } = formValues;


  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }


  return (
    <div className="mx-auto my-0 w-10/12">
      <form onSubmit={handleSearch} className="p-4 flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="py-4 font-bold">Search Form</label>
          <input
            className="border-solid border-gray-200 border-2 p-1 rounded-lg focus:border-red-500 w-60"
            type="text"
            placeholder="Search hero"
            autoComplete="off"
            name="searchText"
            value={searchText}
            onChange={handleInputChange}
          />
        </div>
        <motion.button
          className="bg-red-600 max-w-fit px-6 py-2 text-white rounded-lg"
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Search
        </motion.button>
      </form>
      <motion.div layout variants={container} className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-1 md:gap-x-4 text-center">
        {
          (q === '')
            ? <div className="alert bg-green-300 text-green-900">Buscar un heroe</div>
            : (heroesFiltered.length === 0)
            && <div className="alert bg-red-300 text-red-900">No hay resultados para: {q}</div>
        }
        {
          heroesFiltered.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </motion.div>
    </div >
  )
}

import React, { useMemo } from 'react'
import { getHeroesByPublishers } from '../../selectors/getHeroesByPublishers'
import { HeroCard } from './HeroCard'
import { motion } from 'framer-motion'

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher])
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                ease: [0.17, 0.67, 0.83, 0.67],
                staggerChildren: 0.1
            }
        }
    }

    return (
        <>
            <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.50 }}
                className="px-2 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
                {
                    heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))
                }
            </motion.ul>
        </>
    )
}

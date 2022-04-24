import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imgPath = `/assets/${id}.jpg`
    // framer animation
    const item = {
        hidden: {
            opacity: 0,
            y: 180
        },
        show: {
            opacity: 1,
            y: 0
        }
    }
    // img.addEventListener("mousedown", toggleBtnView)
    return (
        <motion.div
            variants={item} className="overflow-hidden relative rounded-md">
            <img
                className="card-img"
                src={imgPath}
                alt={superhero}
            />

            <Link to={`/hero/${id}`} className="btn-view">
                <span className="text-white">see more</span>
            </Link>
        </motion.div>
    )
}

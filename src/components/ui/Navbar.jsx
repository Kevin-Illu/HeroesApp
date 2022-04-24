import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { AutContext } from '../../auth/autContext';
import {types} from '../../types/types'

export const Navbar = () => {

    const navigate = useNavigate()
    const { user, dispatch } = useContext(AutContext)

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
        navigate('/login', {
            replace: true
        })
    }

    const toggleNavbar = () => {
        const nav = document.querySelector(".nav")
        nav.classList.toggle('nav-toggle')
        nav.classList.toggle('hidden')
    }

    const removeNavbar = () => {
        const nav = document.querySelector(".nav")

        if (nav.classList.contains('nav-toggle')) {
            nav.classList.remove('nav-toggle')
            nav.classList.add('hidden')
        }
    }

    return (
        <motion.div
            initial={{ y: -180 }}
            animate={{ y: 0 }}
            transition={{ duration: .4 }}
            className="border-y-2 border-b-2"
        >
            <nav className="justify-end md:mx-auto flex container mx-auto px-4 md:container p-4 items-center md:justify-between">
                <motion.div
                    className="nav hidden md:flex md:flex-row gap-x-4 text-yellow text-zinc-400">
                    <Link
                        onClick={removeNavbar}
                        to="/"
                    >
                        Asociaciones
                    </Link>
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' text-black' : '')}
                        onClick={removeNavbar}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' text-black' : '')}
                        onClick={removeNavbar}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' text-black' : '')}
                        onClick={removeNavbar}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </motion.div>
                <div className="flex justify-between w-full md:w-auto">
                    <ul className="flex flex-row gap-x-6 items-center justify-center">
                        <span className=" flex item-center justify-center px-4 py-1 bg-red-700 rounded-full text-white">
                            {user.name}
                        </span>
                        <button
                            className="nav-item nav-link"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </ul>
                    <motion.button
                        className="btn-nav md:hidden z-50"
                        onClick={toggleNavbar}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </motion.button>
                </div>
            </nav>
        </motion.div>
    )
}
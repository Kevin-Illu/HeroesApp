import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { AutContext } from '../../auth/autContext';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const { dispatch } = useContext(AutContext)
  const [inputValue, handleInputChange] = useForm({ name: '' })
  const [isComplete, setBorderWhenComplete] = useState(true)
  const { name } = inputValue;
  const navigate = useNavigate();

  useEffect(() => {
    const input_name = document.getElementById('input_name');
    if (!isComplete) {

      input_name.classList.remove('border-green-600')
      input_name.classList.add('border-red-600')
    } else {
      input_name.classList.remove('border-red-600')
      input_name.classList.add('border-green-600')
    }
  }, [isComplete])


  const handleLogin = (e) => {
    e.preventDefault();
    if (name === '') {
      setBorderWhenComplete(false);
      return;
    };
    setBorderWhenComplete(true);
    dispatch({
      type: types.login,
      payload: {
        name
      }
    })
    const lasPath = localStorage.getItem('lasPath') || '/marvel'

    navigate(lasPath, {
      replace: true,
    });
  }



  return (
    <div className="container md:mx-auto text-xl mx-auto text-center flex flex-col justify-center items-center gap-8 h-screen p-4">
      <h1 className="text-3xl font-bold pb-4 md:p-0">LOGIN</h1>
      <p>Hola bienvenido, logueate para poder ver a tus <br></br>supeheroes favoritos</p>
      <div className="card">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="flex flex-col text-start pb-6">
            <label className="text-left text-gray-700 font-bold">nombre</label>
            <input
              id="input_name"
              name="name"
              value={name}
              onChange={handleInputChange}
              autoComplete="off"
              type="text"
              placeholder="tu nombre"
              className="bg-gray-200 rounded-lg py-2 px-1 border-2 border-solid">
            </input>
          </div>
          <button
            type="submit"
            className="bg-red-700 text-white px-4 py-1 rounded-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div >
  )
}

import React, { useState } from 'react';
import {db} from "../firebase/firebase-config"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Lobster_Two } from 'next/font/google'
import logoBlack from "../../public/logoProvaBlack.png"
import Image from 'next/image';
import { validateForm } from '@/utils/validateFomr';

const fontNav = Lobster_Two({ weight: "400", subsets: ["latin"]  })

const YourFormComponent: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [load, setload] = useState(false)
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Limpiar el mensaje de error del campo modificado
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setload(true)
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.values(validationErrors).some(error => error !== '')) {
      setErrors(validationErrors);
      setload(false)
      return;
    }
    // Enviar datos a Firebase
    db.collection('usuarios').add(formData)
      .then(() => {
        setload(false)
        console.log('Datos enviados correctamente a Firebase');
        // Realizar cualquier otra acción después de enviar los datos
      })
      .catch((error:any) => {
        setload(false)
        console.error('Error al enviar los datos a Firebase:', error);
        // Manejar el error de alguna manera
      });

    // Restablecer los valores del formulario después de enviar los datos
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className='w-[470px] flex flex-col gap-3 px-[40px]' onSubmit={handleSubmit}>
      {/* <h2 className={`${fontNav.className} border-b-[1px] border-black text-[40px] font-bold px-[10px] mt-[50px] mb-[30px] mx-auto`}>Registro</h2> */}
      <Image className='mx-auto mt-[50px] mb-[20px] w-[180px]' src={logoBlack} alt='logo'/>
      <label className='text-[16px] font-medium flex flex-col gap-3'>
        Nombre:
        <input
          placeholder='Ingrese su nombre'
          className='focus:outline-none border-b-[1px] font-normal text-[15px] p-[4px] border-black'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </label>

      <label className='text-[16px] font-medium flex flex-col gap-3'>
        Email:
        <input
          placeholder='Ingrese su email'
          className='focus:outline-none border-b-[1px] font-normal text-[15px] p-[4px] border-black'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </label>

      <label className='text-[16px] font-medium flex flex-col gap-3'>
        Mensaje:
        <textarea
          placeholder='Dejanos un mensaje'
          className='text-[15px] focus:outline-none font-normal border-b-[1px] border-black max-h-[100px]'
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
      </label>
      <button className='hover:scale-105 bg-black text-white font-medium rounded-[10px] mt-[30px] mx-auto w-auto px-[40px] py-[10px]' type="submit">{load ? <FontAwesomeIcon icon={faSpinner} spin />  : "Enviar" }</button>
    </form>
  );
};

export default YourFormComponent;


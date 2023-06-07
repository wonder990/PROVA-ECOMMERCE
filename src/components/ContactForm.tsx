import React, { useState } from 'react';
import {db} from "../firebase/firebase-config"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Lobster , Anek_Tamil, Noto_Serif, Lobster_Two } from 'next/font/google'

const fontNav = Lobster_Two({ weight: "400", subsets: ["latin"]  })

const YourFormComponent: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [load, setload] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setload(true)
    event.preventDefault();

    // Enviar datos a Firebase
    db.collection('usuarios').add(formData)
      .then(() => {
        setload(false)
        console.log('Datos enviados correctamente a Firebase');
        // Realizar cualquier otra acción después de enviar los datos
      })
      .catch((error:any) => {
        console.error('Error al enviar los datos a Firebase:', error);
        // Manejar el error de alguna manera
      });

    // Restablecer los valores del formulario después de enviar los datos
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className='w-1/2 flex flex-col gap-4 px-[40px]' onSubmit={handleSubmit}>
      <h2 className={`${fontNav.className} border-b-[1px] border-black text-[40px] font-bold px-[10px] mt-[50px] mb-[30px] mx-auto`}>Registro</h2>
      <label className='text-[17px] font-medium flex flex-col gap-4'>
        Name:
        <input className='rounded-[10px] border-[1px] p-[4px] border-black' type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label className='text-[17px] font-medium flex flex-col gap-4'>
        Email:
        <input className='rounded-[10px] border-[1px] p-[4px] border-black' type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label className='text-[17px] font-medium flex flex-col gap-4'>
        Message:
        <textarea className='rounded-[10px] border-[1px] border-black max-h-[100px]' name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button className='' type="submit">{load ? <FontAwesomeIcon icon={faSpinner} spin />  : "Enviar" }</button>
    </form>
  );
};

export default YourFormComponent;


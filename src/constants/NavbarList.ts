import { faHome, faUtensils, faUser  } from '@fortawesome/free-solid-svg-icons';

export  let NavBarList = [
    {
      label:"Inicio",
      icon: faHome,
      route:"/"
    },
    {
      label:"Productos",
      icon:faUtensils,
      route:"./client/menu"
    },
    {
      label:"Registrarse",
      icon:faUser,
      route:"./client/registro"
    },
  ]
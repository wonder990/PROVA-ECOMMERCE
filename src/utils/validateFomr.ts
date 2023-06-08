export const validateForm = (formData: any) => {
    const errors = { name: '', email: '', message: '' };
  
    if (formData.name.trim() === '') {
      errors.name = 'Ingrese su nombre';
    }
  
    if (formData.email.trim() === '') {
      errors.email = 'Ingrese su email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Ingrese un email válido';
    }
  
    if (formData.message.trim() === '') {
      errors.message = 'Dejanos un mensaje';
    }
  
    return errors;
};
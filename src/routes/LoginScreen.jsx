import React, { useState } from 'react';
import InputEmail from '../components/InputEmail'; // Asegúrate de importar el componente InputEmail personalizado
import InputPassword from '../components/InputPassword'; // Asegúrate de importar el componente InputPassword personalizado
import CustomButton from '../components/Button'; // Asegúrate de importar el componente Button personalizado

export const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor para la autenticación o realizar cualquier otra acción necesaria.
    console.log(formData);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <InputEmail
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
            label="Email"
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <InputPassword
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            label="Contraseña"
          />
        </div>
        <CustomButton type="submit" color="primary">
          Iniciar Sesión
        </CustomButton>
      </form>
    </div>
  );
};

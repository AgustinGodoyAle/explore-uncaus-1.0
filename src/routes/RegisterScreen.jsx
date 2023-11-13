import React, { useState } from 'react';
import InputEmail from '../components/InputEmail';
import CustomButton from '../components/Button';
export const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    email: '',
    password: '',
    tipoUsuario: 'alumno',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor o realizar cualquier otra acción necesaria.
    console.log(formData);
  };

  return (
    <div>
      <h2>Registro de Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <InputEmail
            value={formData.nombre}
            onChange={(value) => handleChange('nombre', value)}
            label="Nombre"
          />
        </div>

        {/* Repite el mismo patrón para los demás campos */}
        <div>
          <label>Apellido:</label>
          <InputEmail
            value={formData.apellido}
            onChange={(value) => handleChange('apellido', value)}
            label="Apellido"
          />
        </div>
        <div>
          <label>DNI:</label>
          <InputEmail
            value={formData.dni}
            onChange={(value) => handleChange('dni', value)}
            label="DNI"
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <InputEmail
            value={formData.telefono}
            onChange={(value) => handleChange('telefono', value)}
            label="Teléfono"
          />
        </div>
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
          <InputEmail
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            label="Contraseña"
          />
        </div>
        <div>
          <label>Tipo de Usuario:</label>
          {/* Puedes utilizar un elemento select o radio buttons para el tipo de usuario */}
        </div>
        <CustomButton type="submit" color="primary">
          Registrarse
        </CustomButton>
      </form>
    </div>
  );
};
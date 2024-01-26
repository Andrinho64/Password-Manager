// Form.tsx
import React, { useState } from 'react';

interface FormProps {
  onCancelar: () => void;
}

function Form({ onCancelar }: FormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    login: '',
    senha: '',
    url: '',
  });

  const [formErrors, setFormErrors] = useState({
    nome: false,
    login: false,
    senha: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (fieldName: string, value: string) => {
    let error = false;
    let hasNumber; let hasLetter; let
      hasSpecialChar;

    switch (fieldName) {
      case 'nome':
      case 'login':
        error = value.trim() === '';
        break;
      case 'senha':

        hasNumber = /\d/.test(value);
        hasLetter = /[a-zA-Z]/.test(value);
        hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        error = value.length < 8 || value.length > 16
        || !(hasNumber && hasLetter && hasSpecialChar);
        break;
      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [fieldName]: error,
    });
  };

  const isFormValid = () => {
    return Object.values(formErrors).every((error) => !error)
      && Object.values(formData).every((value) => value.trim() !== '');
  };

  return (
    <div className="label">
      <label htmlFor="nomeServico">Nome do serviço:</label>
      <input
        type="text"
        name="nome"
        id="nomeServico"
        value={ formData.nome }
        required
        onChange={ handleChange }
      />
      <label htmlFor="login">Login:</label>
      <input
        type="text"
        name="login"
        id="login"
        value={ formData.login }
        required
        onChange={ handleChange }
      />
      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        name="senha"
        id="password"
        min={ 8 }
        max={ 16 }
        required
        value={ formData.senha }
        onChange={ handleChange }
      />
      <label htmlFor="url">URL:</label>
      <input
        type="text"
        name="url"
        id="url"
        value={ formData.url }
        onChange={ handleChange }
      />
      <button disabled={ !isFormValid() }>Cadastrar</button>
      <button onClick={ onCancelar }>Cancelar</button>
    </div>
  );
}

export default Form;

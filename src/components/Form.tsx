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

  const [passwordChecks, setPasswordChecks] = useState({
    hasMinLength: false,
    hasMaxLength: false,
    hasLettersAndNumbers: false,
    hasSpecialChar: false,
  });

  const MIN_PASSWORD_LENGTH = 8;
  const MAX_PASSWORD_LENGTH = 16;

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
    let hasMinLength = false;
    let hasMaxLength = false;
    let hasLettersAndNumbers = false;
    let hasSpecialChar = false;

    switch (fieldName) {
      case 'nome':
      case 'login':
        error = value.trim() === '';
        break;
      case 'senha':
        hasMinLength = value.length >= MIN_PASSWORD_LENGTH;
        hasMaxLength = value.length <= MAX_PASSWORD_LENGTH;
        hasLettersAndNumbers = /[a-zA-Z]/.test(value) && /\d/.test(value);
        hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        error = value.trim() === '' || !hasMinLength
        || !hasMaxLength || !hasLettersAndNumbers || !hasSpecialChar;
        break;
      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [fieldName]: error,
    });

    setPasswordChecks({
      hasMinLength,
      hasMaxLength,
      hasLettersAndNumbers,
      hasSpecialChar,
    });
  };

  const renderPasswordCheck = (condition: boolean, message: string) => (
    <p
      className={ condition ? 'valid-password-check'
        : 'invalid-password-check' }
    >
      {message}
    </p>
  );

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
        min={ MIN_PASSWORD_LENGTH }
        max={ MAX_PASSWORD_LENGTH }
        required
        value={ formData.senha }
        onChange={ handleChange }
      />

      {/* Mensagens de verificação de senha */}
      {renderPasswordCheck(
        passwordChecks.hasMinLength,
        `Possuir ${MIN_PASSWORD_LENGTH} ou mais caracteres`,
      )}
      {renderPasswordCheck(
        passwordChecks.hasMaxLength,
        `Possuir até ${MAX_PASSWORD_LENGTH} caracteres`,
      )}
      {renderPasswordCheck(
        passwordChecks.hasLettersAndNumbers,
        'Possuir letras e números',
      )}
      {renderPasswordCheck(
        passwordChecks.hasSpecialChar,
        'Possuir algum caractere especial',
      )}

      <label htmlFor="url">URL:</label>
      <input
        type="text"
        name="url"
        id="url"
        value={ formData.url }
        onChange={ handleChange }
      />
      <button
        disabled={ Object.values(formErrors).some((error) => error)
        || !Object.values(formData).every((value) => value.trim() !== '') }
      >
        Cadastrar
      </button>
      <button onClick={ onCancelar }>Cancelar</button>
    </div>
  );
}

export default Form;

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

  const MIN_PASSWORD_LENGTH = 8;
  const MAX_PASSWORD_LENGTH = 16;
  const REGEX_WORDS = /[a-zA-Z]/;
  const REGEX_NUMBERS = /\d/;
  const REGEX_SPECIAL_CHAR = /[!@#$%^&*(),.?":{}|<>]/;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateField = (dados: any) => {
    const { nome, login, senha } = dados;
    const isValidName = nome !== ''; // Se o nome estiver vazio, retorne True
    const isValidLogin = login !== '';
    const isLess8Password = MIN_PASSWORD_LENGTH <= senha.length;
    const isMore16Password = MAX_PASSWORD_LENGTH >= senha.length;
    const isPasswordIsValid = REGEX_WORDS.test(senha) && REGEX_NUMBERS.test(senha)
    && REGEX_SPECIAL_CHAR.test(senha);

    const isDisable = !(isValidName && isValidLogin && isLess8Password
      && isPasswordIsValid && isMore16Password);

    return isDisable;
  };

  const validateSingleField = (data: any) => {
    const isLessTeste = MIN_PASSWORD_LENGTH <= data.senha.length;
    return !isLessTeste;
  };

  const validateMaxSixteenField = (data: any) => {
    const isMaxTeste = MAX_PASSWORD_LENGTH >= data.senha.length;
    return !isMaxTeste;
  };

  const validateWordField = ({ senha }: any) => {
    const isWordTeste = REGEX_WORDS.test(senha);
    const isNumberTeste = REGEX_NUMBERS.test(senha);
    return !(isWordTeste && isNumberTeste);
  };

  const validateSpecialField = ({ senha }: any) => {
    const isSpecialTeste = REGEX_SPECIAL_CHAR.test(senha);
    return !isSpecialTeste;
  };

  const validPassword = 'valid-password-check';
  const invalidPassword = 'invalid-password-check';

  return (
    <div className="label">
      <ul>
        <li
          className={ !validateSingleField(formData) ? validPassword
            : invalidPassword }
        >
          Possuir 8 ou mais caracteres
        </li>
        <li
          className={ !validateMaxSixteenField(formData) ? validPassword
            : invalidPassword }
        >
          Possuir até 16 caracteres
        </li>
        <li
          className={ !validateWordField(formData) ? validPassword
            : invalidPassword }
        >
          Possuir letras e números
        </li>
        <li
          className={ !validateSpecialField(formData) ? validPassword
            : invalidPassword }
        >
          Possuir algum caractere especial
        </li>
      </ul>
      ;
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

      <label htmlFor="url">URL:</label>
      <input
        type="text"
        name="url"
        id="url"
        value={ formData.url }
        onChange={ handleChange }
      />
      <button
        disabled={ validateField(formData) }
      >
        Cadastrar
      </button>
      <button onClick={ onCancelar }>Cancelar</button>
    </div>
  );
}

export default Form;

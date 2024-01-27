import React, { useState } from 'react';

export interface FormData {
  nome: string;
  login: string;
  senha: string;
  url: string;
}

interface FormProps {
  onCancelar: () => void;
  setList: React.Dispatch<React.SetStateAction<FormData[]>>;
  list: FormData[];
}

function Form({ onCancelar, setList, list }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    login: '',
    senha: '',
    url: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const register = () => {
    setList([...list, formData]);
    setFormData({
      nome: '',
      login: '',
      senha: '',
      url: '',
    });
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
      <button onClick={ register }>Cadastrar</button>
      <button onClick={ onCancelar }>Cancelar</button>

      {list.map((listOb: FormData, i: number) => {
        return (
          <div key={ i }>
            <a href={ listOb.url }>{listOb.nome}</a>
            <p>{listOb.login}</p>
            <p>{listOb.senha}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Form;

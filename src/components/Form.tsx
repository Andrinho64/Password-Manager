// Form.tsx
import React from 'react';

interface FormProps {
  onCancel: () => void;
}

function Form({ onCancel }: FormProps) {
  return (
    <div>
      <label htmlFor="nomeServico">Nome do serviço:</label>
      <input type="text" id="nomeServico" />
      <label htmlFor="login">Login:</label>
      <input type="text" id="login" />
      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" />
      <label htmlFor="url">URL:</label>
      <input type="text" id="url" />
      <button>Cadastrar</button>
      <button onClick={ onCancel }>Cancelar</button>
    </div>
  );
}

export default Form;

// Form.tsx
import React from 'react';

function Form() {
  return (
    <div>
      <div>
        <label htmlFor="serviceName">Nome do serviço:</label>
        <input type="text" id="serviceName" />
      </div>

      <div>
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" />
      </div>

      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" />
      </div>

      <div>
        <label htmlFor="url">URL:</label>
        <input type="text" id="url" />
      </div>

      <button>Cadastrar</button>
      <button>Cancelar</button>
    </div>
  );
}

export default Form;

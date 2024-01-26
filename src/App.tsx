import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const exibirFormulario = () => {
    setMostrarFormulario(true);
  };

  const ocultarFormulario = () => {
    setMostrarFormulario(false);
  };
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {mostrarFormulario ? (
        <Form onCancelar={ ocultarFormulario } />
      ) : (
        <button onClick={ exibirFormulario }>Cadastrar nova senha</button>
      )}
    </div>
  );
}

export default App;

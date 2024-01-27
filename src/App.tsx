import React, { useState } from 'react';
import './App.css';
import Form, { FormData } from './components/Form';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [serviceList, setServiceList] = useState<FormData[]>([]);

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
        <Form
          onCancelar={ ocultarFormulario }
          setList={ setServiceList }
          list={ serviceList }
        />
      ) : (
        <button onClick={ exibirFormulario }>Cadastrar nova senha</button>
      )}
      {!serviceList[0] && <p>nenhuma senha cadastrada</p>}
    </div>
  );
}

export default App;

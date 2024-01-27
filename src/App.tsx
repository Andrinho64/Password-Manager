import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [serviceList, setServiceList] = useState([]);

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

      { serviceList.map((listOb: any, i: number) => {
        return (
          <div key={ i }>
            <a href={ listOb.url }>{ listOb.nome }</a>
            <p key={ 2 + i }>{ listOb.login }</p>
            <p key={ 3 + i }>{ listOb.senha }</p>
          </div>
        );
      }) }
    </div>
  );
}

export default App;

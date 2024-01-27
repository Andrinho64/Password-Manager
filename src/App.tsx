import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [esconderSenhas, setEsconderSenhas] = useState(false);
  const [mesclarSenha, setMesclarSenha] = useState(false);
  const [, updateState] = useState({});
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const exibirFormulario = () => {
    setMostrarFormulario(true);
  };

  const ocultarFormulario = () => {
    setMostrarFormulario(false);
  };

  const removeService = (position: number) => {
    serviceList.splice(position, 1);
    forceUpdate();
  };

  const handleEsconderSenhas = (e: any) => {
    if (e.target.id === 'mesclarPassword') {
      setMesclarSenha(!mesclarSenha);
    } else {
      setEsconderSenhas(e.target.checked);
    }
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {mostrarFormulario ? (
        <Form
          onCancelar={ ocultarFormulario }
          setList={ setServiceList }
          list={ serviceList }
          propsMesclar={ mesclarSenha }
        />
      ) : (
        <button onClick={ exibirFormulario }>Cadastrar nova senha</button>
      )}
      {!serviceList[0] && <p>nenhuma senha cadastrada</p>}
      <input type="checkbox" id="hidePassword" onClick={ handleEsconderSenhas } />
      <label htmlFor="hidePassword">Esconder senhas</label>
      <label htmlFor="mesclarPassword">
        <button
          data-testid="show-hide-form-password"
          id="mesclarPassword"
          onClick={ handleEsconderSenhas }
        >
          Mesclar senha
        </button>
      </label>

      { serviceList.map((listOb: any, i: number) => {
        return (
          <div key={ i }>
            <a href={ listOb.url }>{ listOb.nome }</a>
            <p key={ 2 + i }>{ listOb.login }</p>
            <p key={ 3 + i }>{ esconderSenhas ? '******' : listOb.senha }</p>
            <button
              data-testid="remove-btn"
              onClick={ () => removeService(i) }
            >
              Remover
            </button>
          </div>
        );
      }) }
    </div>
  );
}

export default App;

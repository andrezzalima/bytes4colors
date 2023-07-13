import './App.css';
import { useState } from 'react';
import { gerarCorAleatoria, gerarPaleta } from './auxiliary/helperMethods';

function App() {
  const [state, setState] = useState(gerarPaleta())
  const [blocked, setBlock] = useState([false, false, false, false, false])

  function atualizaPaleta() {
    console.log(gerarPaleta());
    setState(pstate => pstate.map((c, i) => blocked[i] === false ? gerarCorAleatoria() : c))
  }

  function blockColor(indice) {
    setBlock(pblock => pblock.map((blocked, i) => indice === i ? !blocked : blocked))
  }


  return (
    <div className="App">
     
        <h1>Bytes 4 Coolors</h1>
  
      <div className='coolors'>
        {
          state.map((el, indice) => (
            <div className='column'>
              <div className='card' style={{ backgroundColor: el }} onClick={() => blockColor(indice)}>
                <img src={blocked[indice] ? '../img/fechado.png' : '../img/aberto.png'}></img>
              </div>
              <button className='ref' onClick={() => navigator.clipboard.writeText(el)}>{el}</button>
              <div className='ball' style={{ backgroundColor: el }}></div>
            </div>
          ))
        }        
      </div>
          <button className='generate' onClick={atualizaPaleta}><p>Generate</p></button>
    </div>
  );
}



export default App;

import React from 'react';
import './App.scss';
import Logline from '../../components/Logline';
import requireAuthentication from '../../HOCs/require-authentication';
import api from '../../utils/apis';
function App () {
  api();
  return <div className="App">
            <header className="App-header center">
              Storyline
            </header>
            <div className="App-container">
                <Logline/>
            </div>
        </div>
}

export default requireAuthentication(App);

import React from 'react';

import {UserProvider} from '../src/UserContext/UserContext';
import ContenidoGeneral from "./Folder_Contenido_General/ContenidoGeneral";


function App() {
  

  return (
    <div className="App">
    <UserProvider>
          <div>       
            <ContenidoGeneral />
          </div>      

    </UserProvider>
    </div>
  );
}

export default App;

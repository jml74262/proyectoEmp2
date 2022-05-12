import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ZapatoList from './components/zapatosList'
import CreateZapatoForm from './components/createZapatos'
import * as ReactBootStrap from "react-bootstrap"


function App() {
  return (
    <><ReactBootStrap.Container>
      <ReactBootStrap.Navbar className="navbar navbar-dark bg-dark edit" >
        
      </ReactBootStrap.Navbar>
    </ReactBootStrap.Container><div className="App">
        <section className="Mzapato">
          <ZapatoList />
        </section>
        <section className="Czapato">
          <CreateZapatoForm />
        </section>

      </div></>
  );
}

export default App;

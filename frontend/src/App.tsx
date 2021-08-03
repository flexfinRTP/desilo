import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
import { Symfoni } from "./hardhat/SymfoniContext";
import { Greeter } from './components/Greeter';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <header>
        <Symfoni autoInit={true} >
          <Router>
            <Header />
            <br />
            <p>
              Welcome to the future of research!
            </p>
            <br />
            <a
              className="App-link"
              href="https://github.com/jinhongkuan/desilo/blob/main/litepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check our Litepaper!
            </a>
            <br /><br /><br /><br /><br />
            <Greeter></Greeter>
          </Router>
        </Symfoni>
      </header>
    </div>
  );
}

export default App;

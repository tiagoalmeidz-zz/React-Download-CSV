import React from "react";
import DownloadLink from "react-download-link";
import logo from "./logo.svg";
import "./App.css";

const handleColumns = () => "Tiago,Fernando,de,Almeida";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DownloadLink
          label="Download"
          filename="arquivoTemplate.csv"
          exportFile={handleColumns}
          tagName="button" //tagName é opcional, caso não passar o visual do componente irá ser um "link" para download
        />
      </header>
    </div>
  );
}

export default App;

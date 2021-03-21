import React, { Fragment,useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import "./index.css";
function App() {
  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container ">
          <div className="row">
            <div className="col m6 s12">
              <Form />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

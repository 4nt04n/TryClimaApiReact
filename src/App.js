import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import "./index.css";
function App() {

  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });

  const [resultado,setResultado] = useState({})

  const [consultar, setConsultar] = useState(false);

  const { ciudad, pais } = search;

  useEffect(() => {

    const consultarAPI = async () => {
      if (consultar) {
        const appid = '3eeb458ec5fd9db0ef3efbdf0c43ff58';

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);
      }
    }
    consultarAPI();
  }, [consultar])

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container ">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

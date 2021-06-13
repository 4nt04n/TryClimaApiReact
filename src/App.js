import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Clima from "./Components/Clima"
import Error from "./Components/Error"
import "./index.css";
function App() {

  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });

  const [resultado,setResultado] = useState({})
  const [consultar, setConsultar] = useState(false);
  const [error,setError] = useState(false);

  const { ciudad, pais } = search;

  useEffect(() => {

    const consultarAPI = async () => {
      if (consultar) {
        const appid = '3eeb458ec5fd9db0ef3efbdf0c43ff58';

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);
        setConsultar(false);

        if(resultado.cod=== "404"){
          setError(true)
        } else{
          setError(false)
        }
      }
    }
    consultarAPI();
    //eslint-disable-next-line
  }, [consultar])

let componente;
if(error){
componente=<Error mensaje="No hay resultados" />
}else{
componente= <Clima resultado={resultado}/>
}

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
            <div className="col m6 s12">
             {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

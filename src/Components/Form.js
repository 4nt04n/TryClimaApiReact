import React, { useState } from "react";
import Error from "./Error"
import PropTypes from "prop-types";

const Form = ({search,setSearch,setConsultar}) => {

  //State Error
  const [error,setError]=useState(false);

//destructuring search
const {ciudad,pais}=search;

//save function
const handleChange = e =>{
  //actulizar el state 
  setSearch({
    ...search,[e.target.name]:e.target.value 
  });
}
const handleSubmit = e =>{
  e.preventDefault();
  if (ciudad.trim() ==='' || pais.trim()==='')
  {
    setError(true)
    return;
  }
  setError(false);
  setConsultar(true);

}
  return (
    <form
      onSubmit={handleSubmit}
    >
     {error?<Error mensaje="Ambos campos son obligatorios"/>:null}
      <div className="input-field col s12">
        <input type="text" 
        name="ciudad" 
        id="ciudad" 
        value={ciudad}
        onChange = {handleChange}
        />
        <label htmlFor="ciudad"> Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" onChange = {handleChange}>
          <option value="">-- Seleccione un pais --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Pais: </label>
      </div>

      <div className="input-field col s12">
          <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
         >  Buscar Clima   
          </button>
      </div>
    </form>
  );
};
Form.propTypes={
  search:PropTypes.object.isRequired,
  setSearch:PropTypes.func.isRequired,
  setConsultar:PropTypes.func.isRequired
}
export default Form;

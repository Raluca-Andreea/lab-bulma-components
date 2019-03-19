import React from 'react';

function FormField(props) {

  return (

    <div className="form">

      <div className="field">
            <label className="label">{props.label}</label>
          <div className="control">
            <input className="input" type={props.pepe} placeholder={props.placeholder}/>
          </div>
      </div>
  
    </div>
    
  )

}

export default FormField
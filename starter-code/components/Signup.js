import React from "react"

import Nav from '../components/Nav'
import FormField from '../components/FormField'
import CoolButton from '../components/CoolButton'

function Signup() {

  return (

    <div>

      <Nav />

      <FormField label="Name" pepe="text" placeholder="Alex Smith" />
      <FormField label="Email" pepe="email" placeholder="alexsmith@gmail.com" /> 
      <FormField label="Password" pepe="password" placeholder="password" /> 

      <CoolButton popino="button is-small is-success" text="Signup"/>   

    </div>
   

    
  )

}

export default Signup
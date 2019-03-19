import React, { Component } from "react"

import Nav from '../components/Nav'
import FormField from '../components/FormField'
import CoolButton from '../components/CoolButton'
import Signup from '../components/Signup'
import Message from '../components/Message'

class App extends Component {

  render() {

    return (

      <main className="App">

        <Nav />

        <FormField label="Name" pepe="text" placeholder="Alex Smith" />
        <FormField label="Email" pepe="email" placeholder="alexsmith@gmail.com" />  
        <CoolButton isSmall isDanger className="is-rounded my-class"/>
        <CoolButton isSmall isSuccess/>   

        <Signup /> 

        <Message class="message is-link" title="Hello" /> 

        

      </main>
    )

  }

}

export default App
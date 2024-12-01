import React from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/Contact/Contact'
import Contactform from './components/ContactForm/Contactform'
function App() {
  return (
    <div>
      <Navigation/>
      <Contact/>
      <Contactform/>
    </div>
  ) 
}

export default App
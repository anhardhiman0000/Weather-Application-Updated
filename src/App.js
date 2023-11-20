import React from 'react';

import Weather from "./Components/Weather";
import './App.css'
import './text.css'

function App() {
  return (
    <>
      <div className='App'>
        <h1 className='animate-charcter'>Weather Application</h1> 
        <br/>
        <h4 className='animate-charcter'>Created by: Anhar Dhiman</h4>
      </div>
      <Weather />
    </>
  );
}

export default App;

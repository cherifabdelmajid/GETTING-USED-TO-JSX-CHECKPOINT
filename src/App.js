import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let firstname = "abdlmajid";
  let lastname = "Cherif";
  return (
    <div className="App">
    <p> {firstname+ "    " + lastname}</p> 
    <div style={{border:'solid 1px black'}}/>
      <div style={{maxwidth:'100vw'}}/>
    <h1 class="title red">ABDELMAJID CHERIFX</h1>
    <img src="/image.jpg"/> <hr />
    <img src="/image.jpg"/>
    </div>
    
  
    
    
    
  );
}

export default App;

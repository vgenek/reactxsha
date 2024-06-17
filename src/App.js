import React, { Component } from 'react';
import './App.css'
import sha256 from 'crypto-js/sha256';

class app extends Component {

  generateHash = () => {
    var input = document.getElementById("login").value;
    var input2 = document.getElementById("password").value;
    var hash = sha256(input);
    var hash2 = sha256(input2);
    document.getElementById("reasult").innerHTML = "Zaszyfrowany login: " + hash + "<br> Zaszyfrowane hasło" +hash2;
  }

  state = { 
    login: '',
    password: '',
   }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>SHA256 Hash Generator</h1>
                    <input type="text" id="login" placeholder="Podaj login"></input><br/>
                    <input type="text" id="password" placeholder="Podaj hasło"></input><br/>
                    <button onClick={this.generateHash}>Zaloguj</button><br/>
                    <p id='reasult'>Zaszyfrowany tekst: </p>
                </div>
            </div>
        );
    }
}
export default app;
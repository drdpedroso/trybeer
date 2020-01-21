import React, { Component } from 'react';
import './Configurations.css';

class Configurations extends Component {
  render() {
    return (
      <div className="container">
        <h2>Configurações</h2>
        <label>
          Categoria
          <select name="Categoria">
            <option value="Categoria1">Games</option>
            <option value="Categoria2" selected>
              Filmes
            </option>
            <option value="Categoria3">Séries</option>
          </select>
        </label>
        <label>
          Dificuldade
          <select name="Dificuldade">
            <option value="Dificuldade1">Moleza!</option>
            <option value="Dificuldade2" selected>
              Eita porra!
            </option>
            <option value="Dificuldade3">PQP!</option>
          </select>
        </label>
        <label>
          Tipo
          <select name="Tipo">
            <option value="Tipo1">Valor 1</option>
            <option value="Tipo2" selected>
              Valor 2
            </option>
            <option value="Tipo3">Valor 3</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Configurations;

import React, { Component } from 'react';
import '../css/Configurations.css';

class Configurations extends Component {
  creatSelect(nameLabel, subs1, subs2, subs3) {
    return (
      <label>
        {nameLabel}
        <select name={nameLabel}>
          <option value={`${nameLabel}-1`}>{subs1}</option>
          <option value={`${nameLabel}-1`} selected>
            {subs2}
          </option>
          <option value={`${nameLabel}-1`}>{subs3}</option>
        </select>
      </label>
    );
  }
  render() {
    return (
      <div className="container">
        {/* {this.creatSelect('Tipo', 'valor-1', 'valor-2', 'valor-3')} */}
        <h2>Configurações</h2>
        {this.creatSelect('Categoria', 'Games', 'Filmes', 'Séries')}
        {this.creatSelect('Dificuldade', 'Moleza', 'EitaPorra', 'Fudeu')}
        {this.creatSelect('Tipo', 'valor-1', 'valor-2', 'valor-3')}
      </div>
    );
  }
}

export default Configurations;

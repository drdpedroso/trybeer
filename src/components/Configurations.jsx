import React, { Component } from 'react';
import '../css/Configurations.css';

class Configurations extends Component {
  static creatSelect(nameLabel, subs1, subs2, subs3, id) {
    return (
      <label htmlFor={id}>
        {nameLabel}
        <select name={nameLabel} id={id}>
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
        {Configurations.creatSelect('Categoria', 'Games', 'Filmes', 'Séries', 'select-1')}
        {Configurations.creatSelect('Dificuldade', 'Moleza', 'EitaPorra', 'Fudeu', 'select-2')}
        {Configurations.creatSelect('Tipo', 'valor-1', 'valor-2', 'valor-3', 'select-3')}
      </div>
    );
  }
}

export default Configurations;

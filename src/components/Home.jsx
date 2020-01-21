import React from 'react';
import { Redirect, Link } from 'react-router-dom';
// import configurationIcon from '../images/126472.png';
import '../css/home.css';
import getTokenTriviaAPI from '../service/APIService';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      gravatarEmail: '',
      name: '',
    };
  }

  sendPlayerToLocalStorage(name, gravatarEmail) {
    const player = {
      name,
      assertions: '',
      score: '',
      gravatarEmail,
    };
    localStorage.setItem('player', JSON.stringify(player));
  }
  startGame() {
    const { gravatarEmail, name } = this.state;
    if (gravatarEmail !== '' && name !== '') {
      getTokenTriviaAPI();
      this.sendPlayerToLocalStorage(name, gravatarEmail);
      return this.setState({
        shouldRedirect: true,
      });
    }
    return alert('tá faltando informação aí amigão!');
  }

  changeHandler(event, id) {
    this.setState({
      [id]: event.target.value,
    });
  }

  generateInputs() {
    return (
      <div>
        <p className="inputs-text">Email do Gravatar:</p>
        <input
          className="inputs-class"
          type="text"
          data-testid="input-gravatar-email"
          onBlur={(e) => this.changeHandler(e, 'gravatarEmail')}
        />
        <p className="inputs-text">Nome do jogador:</p>
        <input
          className="inputs-class"
          type="text"
          data-testid="input-player-name"
          onBlur={(e) => this.changeHandler(e, 'name')}
        />
        <button
          type="button"
          className="button-play"
          onClick={() => this.startGame()}
          data-testid="btn-play"
        >
          JOGAR!
        </button>
      </div>
    );
  }
  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/game" />;
    }
    return (
      <main>
        <Link to="/configurations">
          <button
            type="button"
            className="button-config"
            data-testid="config-button"
          >
            Configurações
          </button>
        </Link>
        <div>{this.generateInputs()}</div>
      </main>
    );
  }
}

export default Home;

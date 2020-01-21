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
    };
  }

  startGame() {
    getTokenTriviaAPI();
    this.setState({
      shouldRedirect: true,
    });
  }
  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/game" />;
    }
    return (
      <div>
        <Link to="/configurations">
          <button
            type="button"
            data-testid="config-button"
            // style= {{background: URL(configurationIcon)}}
          >
            Configurações
          </button>
        </Link>
        <p className="inputs-text">Email do Gravatar:</p>
        <input type="text" data-testid="input-gravatar-email" />
        <p className="inputs-text">Nome do jogador:</p>
        <input type="text" data-testid="input-player-name" />
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
}

export default Home;

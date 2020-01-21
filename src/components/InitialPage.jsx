import React from 'react';
import '../css/initialPage.css';

class InitialPage extends React.Component {
  render() {
    return (
      <div>
        <p class="inputs-text">Email do Gravatar:</p>
        <input type="text" data-testid="input-gravatar-email" />
        <p class="inputs-text">Nome do jogador:</p>
        <input type="text" data-testid="input-player-name" />
        <button type="button" data-testid="btn-play">
          JOGAR!
        </button>
      </div>
    );
  }
}

export default InitialPage;

import React, { useState } from 'react';
import './StartGame.css'; 

const StartGame = ({ onStart }) => {
  const [pseudo, setPseudo] = useState('');

  return (
    <div className="start-game-container">
      <input
        type="text"
        placeholder="Entrez votre pseudo..."
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
        className="start-game-input"
      />
      <button
        onClick={() => onStart(pseudo)}
        className="start-game-button"
      >
        Commencer le Jeu
      </button>
    </div>
  );
};

export default StartGame;

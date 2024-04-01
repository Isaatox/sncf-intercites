import React from 'react';
import './IndicateursProgression.css';

const IndicateursProgression = ({ total, reponses }) => {
    reponses = reponses || [];
  
    return (
      <div className="indicateurs-container">
        {Array.from({ length: total }, (_, index) => {
          let couleur = "blanc"; 
          const reponse = reponses[index];
          if (reponse === "correct") {
            couleur = "vert";
          } else if (reponse === "incorrect") {
            couleur = "rouge";
          }
          return (
            <div key={index} className={`indicateur ${couleur}`}></div>
          );
        })}
      </div>
    );
  };
  

export default IndicateursProgression;

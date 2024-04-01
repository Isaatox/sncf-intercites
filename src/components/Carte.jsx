import React, { useState } from 'react';
import './Carte.css';

const Carte = ({ villeActuelle, onCorrectAnswer, onWrongAnswer }) => {
    const [villes, setVilles] = useState([
        { nom: 'Paris-Austerlitz', x: 492, y: 155, essais: 0, trouve: false },
        { nom: 'Paris-Bercy Bourgogne Pays D\'auvergne', x: 505, y: 155, essais: 0, trouve: false },
        { nom: 'Juvisy', x: 497, y: 162, essais: 0, trouve: false },
        { nom: 'Moret Véneux les Sablons', x: 511, y: 168, essais: 0, trouve: false },
        { nom: 'Montereau', x: 527, y: 172, essais: 0, trouve: false },
        { nom: 'Les Aubrais', x: 460, y: 190, essais: 0, trouve: false },
        { nom: 'Nuits sous ravière', x: 590, y: 190, essais: 0, trouve: false },
        { nom: 'Dijon', x: 690, y: 215, essais: 0, trouve: false },
        { nom: 'Angers-St-Laud', x: 255, y: 220, essais: 0, trouve: false },
        { nom: 'Saumur', x: 285, y: 220, essais: 0, trouve: false },
        { nom: 'St-Pierre-des-corps', x: 340, y: 220, essais: 0, trouve: false },
        { nom: 'Nantes', x: 165, y: 230, essais: 0, trouve: false },
        { nom: 'Vierzon-Ville', x: 456, y: 229, essais: 0, trouve: false },
        { nom: 'Bourges', x: 485, y: 236, essais: 0, trouve: false },
        { nom: 'Nevers', x: 550, y: 233, essais: 0, trouve: false },
        { nom: 'Saintcaize', x: 552, y: 238, essais: 0, trouve: false },
        { nom: 'Issoudun', x: 455, y: 245, essais: 0, trouve: false },
        { nom: 'La-Roche-Sur-Yon', x: 180, y: 255, essais: 0, trouve: false },
        { nom: 'Luçon', x: 186, y: 260, essais: 0, trouve: false },
        { nom: 'Poitiers', x: 293, y: 268, essais: 0, trouve: false },
        { nom: 'Châteauroux', x: 432, y: 255, essais: 0, trouve: false },
        { nom: 'Agenton/Creuse', x: 412, y: 262, essais: 0, trouve: false },
        { nom: 'Moulins sur allier', x: 572, y: 262, essais: 0, trouve: false },
        { nom: 'Macon-ville', x: 685, y: 270, essais: 0, trouve: false },
        { nom: 'Bourg-en-Bresse', x: 725, y: 270, essais: 0, trouve: false },
        { nom: 'St Germain des fossés', x: 570, y: 275, essais: 0, trouve: false },
        { nom: 'Vichy', x: 570, y: 283, essais: 0, trouve: false },
        { nom: 'Riom Châtel-Guyon', x: 550, y: 297, essais: 0, trouve: false },
        { nom: 'Clermont-Ferrand', x: 550, y: 302, essais: 0, trouve: false },
        { nom: 'Roanne', x: 625, y: 290, essais: 0, trouve: false },
        { nom: 'Lyon-Perrache', x: 686, y: 299, essais: 0, trouve: false },
        { nom: 'Lyon-Part-Dieu', x: 698, y: 297, essais: 0, trouve: false },
        { nom: 'Ambérieu', x: 725, y: 292, essais: 0, trouve: false },
        { nom: 'La Rochelle', x: 195, y: 278, essais: 0, trouve: false },
        { nom: 'Rochefort', x: 210, y: 285, essais: 0, trouve: false },
        { nom: 'La Souterraine', x: 390, y: 275, essais: 0, trouve: false },
        { nom: 'Limoges Bénédictins', x: 392, y: 297, essais: 0, trouve: false },
        { nom: 'Saintes', x: 230, y: 300, essais: 0, trouve: false },
        { nom: 'Jonzac', x: 230, y: 315, essais: 0, trouve: false },
        { nom: 'Angoulême', x: 282, y: 309, essais: 0, trouve: false },
        { nom: 'Uzerche', x: 413, y: 318, essais: 0, trouve: false },
        { nom: 'Brive-la-Gaillarde', x: 413, y: 326, essais: 0, trouve: false },
        { nom: 'St-Denis-Prés-Martel', x: 428, y: 331, essais: 0, trouve: false },
        { nom: 'Bretenoux-Biars', x: 465, y: 331, essais: 0, trouve: false },
        { nom: 'Laroquebrou', x: 495, y: 331, essais: 0, trouve: false },
        { nom: 'Aurillac', x: 515, y: 331, essais: 0, trouve: false },
        { nom: 'Valence', x: 695, y: 323, essais: 0, trouve: false },
        { nom: 'Libourne', x: 250, y: 340, essais: 0, trouve: false },
        { nom: 'Bordeaux-St-Jean', x: 230, y: 347, essais: 0, trouve: false },
        { nom: 'Marmande', x: 300, y: 360, essais: 0, trouve: false },
        { nom: 'Agen', x: 345, y: 373, essais: 0, trouve: false },
        { nom: 'Souillac', x: 412, y: 340, essais: 0, trouve: false },
        { nom: 'Gourdon', x: 412, y: 350, essais: 0, trouve: false },
        { nom: 'Cahors', x: 414, y: 362, essais: 0, trouve: false },
        { nom: 'Caussade', x: 414, y: 370, essais: 0, trouve: false },
        { nom: 'Rocamadour-Padirac', x: 432, y: 336, essais: 0, trouve: false },
        { nom: 'Gramat', x: 432, y: 341, essais: 0, trouve: false },
        { nom: 'Assier', x: 432, y: 346, essais: 0, trouve: false },
        { nom: 'Figeac', x: 432, y: 351, essais: 0, trouve: false },
        { nom: 'Capdenac', x: 445, y: 355, essais: 0, trouve: false },
        { nom: 'Viviez-Decazeville', x: 457, y: 359, essais: 0, trouve: false },
        { nom: 'Aubin', x: 472, y: 360, essais: 0, trouve: false },
        { nom: 'Cransac', x: 493, y: 359, essais: 0, trouve: false },
        { nom: 'St-Christophe', x: 497, y: 365, essais: 0, trouve: false },
        { nom: 'Rodez', x: 495, y: 370, essais: 0, trouve: false },
        { nom: 'Carmaux', x: 475, y: 378, essais: 0, trouve: false },
        { nom: 'Albi-Ville', x: 472, y: 385, essais: 0, trouve: false },
        { nom: 'Montauban-Ville-bourbon', x: 385, y: 390, essais: 0, trouve: false },
        { nom: 'Livron', x: 697, y: 350, essais: 0, trouve: false },
        { nom: 'Crest', x: 725, y: 350, essais: 0, trouve: false },
        { nom: 'Die', x: 745, y: 352, essais: 0, trouve: false },
        { nom: 'Luc-en Diois', x: 768, y: 357, essais: 0, trouve: false },
        { nom: 'Veynes-Dévoluy', x: 784, y: 357, essais: 0, trouve: false },
        { nom: 'Gap', x: 799, y: 357, essais: 0, trouve: false },
        { nom: 'Chorges', x: 815, y: 357, essais: 0, trouve: false },
        { nom: 'Embrun', x: 835, y: 355, essais: 0, trouve: false },
        { nom: 'Montdauphin-Guillestre', x: 850, y: 350, essais: 0, trouve: false },
        { nom: 'L\'Argentière-les-Ecrins', x: 850, y: 345, essais: 0, trouve: false },
        { nom: 'Briançon', x: 850, y: 340, essais: 0, trouve: false },
        { nom: 'Toulouse-Matabiau', x: 385, y: 402, essais: 0, trouve: false },
        { nom: 'Hendaye', x: 114, y: 407, essais: 0, trouve: false },
        { nom: 'St-Jean-de-Luz', x: 123, y: 404, essais: 0, trouve: false },
        { nom: 'Biarritz', x: 131, y: 401, essais: 0, trouve: false },
        { nom: 'Bayonne', x: 139, y: 398, essais: 0, trouve: false },
        { nom: 'Dax', x: 146, y: 394, essais: 0, trouve: false },
        { nom: 'Orthez', x: 180, y: 405, essais: 0, trouve: false },
        { nom: 'Pau', x: 211, y: 418, essais: 0, trouve: false },
        { nom: 'Lourdes', x: 245, y: 423, essais: 0, trouve: false },
        { nom: 'Tarbes', x: 267, y: 423.5, essais: 0, trouve: false },
        { nom: 'Lannemezan', x: 290, y: 423.5, essais: 0, trouve: false },
        { nom: 'Montréjeau-Gourdan-Polignan', x: 310, y: 423.5, essais: 0, trouve: false },
        { nom: 'St-Gaudens', x: 335, y: 423.5, essais: 0, trouve: false },
        { nom: 'Auterive', x: 387, y: 415, essais: 0, trouve: false },
        { nom: 'Saverdun', x: 387, y: 420, essais: 0, trouve: false },
        { nom: 'Pamiers', x: 387, y: 425, essais: 0, trouve: false },
        { nom: 'Foix', x: 387, y: 430, essais: 0, trouve: false },
        { nom: 'Tarascon-sur-Ariège', x: 395, y: 434, essais: 0, trouve: false },
        { nom: 'Les-Cabannes', x: 405, y: 438, essais: 0, trouve: false },
        { nom: 'Luzenac-Garanou', x: 412, y: 441, essais: 0, trouve: false },
        { nom: 'Ax-les-Thermes', x: 420, y: 445, essais: 0, trouve: false },
        { nom: 'Mérens-les-Vals', x: 430, y: 449, essais: 0, trouve: false },
        { nom: 'Andorre-L\'Hospitalet', x: 440, y: 452, essais: 0, trouve: false },
        { nom: 'Porté-Puymorens', x: 448, y: 455, essais: 0, trouve: false },
        { nom: 'Latour-de-Carol-Enveitg', x: 459, y: 458, essais: 0, trouve: false },
        { nom: 'Castelnaudray', x: 435, y: 420, essais: 0, trouve: false },
        { nom: 'Carcassonne', x: 490, y: 420, essais: 0, trouve: false },
        { nom: 'Lézignan Corbières', x: 522, y: 421, essais: 0, trouve: false },
        { nom: 'Narbonne', x: 555, y: 422, essais: 0, trouve: false },
        { nom: 'Port-la Nouvelle', x: 550, y: 426, essais: 0, trouve: false },
        { nom: 'Leucate-la-Franqui', x: 550, y: 430, essais: 0, trouve: false },
        { nom: 'Rivesaltes', x: 550, y: 434, essais: 0, trouve: false },
        { nom: 'Perpignan', x: 550, y: 438, essais: 0, trouve: false },
        { nom: 'Elne', x: 555, y: 441, essais: 0, trouve: false },
        { nom: 'Argelès-sur-mer', x: 565, y: 445, essais: 0, trouve: false },
        { nom: 'Collioure', x: 565, y: 449, essais: 0, trouve: false },
        { nom: 'Port-Vendres', x: 565, y: 453, essais: 0, trouve: false },
        { nom: 'Banyuls-sur-Mer', x: 565, y: 457, essais: 0, trouve: false },
        { nom: 'Cerbère', x: 565, y: 461, essais: 0, trouve: false },
        { nom: 'Béziers', x: 566, y: 416, essais: 0, trouve: false },
        { nom: 'Sète', x: 612, y: 412, essais: 0, trouve: false },
        { nom: 'Montpellier St-Roch', x: 640, y: 401, essais: 0, trouve: false },
        { nom: 'Nîmes', x: 661, y: 394, essais: 0, trouve: false },
        { nom: 'Arles', x: 690, y: 394, essais: 0, trouve: false },
        { nom: 'Marseille-Blancardes', x: 762, y: 418, essais: 0, trouve: false },
        { nom: 'Marseille St-Charles', x: 761, y: 423, essais: 0, trouve: false },
        { nom: 'Toulon', x: 815, y: 422, essais: 0, trouve: false },
        { nom: 'Les Arcs-Draguignan', x: 845, y: 411, essais: 0, trouve: false },
        { nom: 'St Raphaël-Valescure', x: 885, y: 410, essais: 0, trouve: false },
        { nom: 'Cannes', x: 900, y: 408, essais: 0, trouve: false },
        { nom: 'Antibes', x: 910, y: 404, essais: 0, trouve: false },
        { nom: 'Nice-Ville', x: 928, y: 400, essais: 0, trouve: false },
    ]);

    const handleVilleClick = (index) => {
        let nouvelleVilles = [...villes];
        const villeCibleIndex = nouvelleVilles.findIndex(ville => ville.nom === villeActuelle); 
    
        if (nouvelleVilles[index].nom === villeActuelle) {
            nouvelleVilles[villeCibleIndex].trouve = true;
            onCorrectAnswer();
        } else {
            nouvelleVilles[villeCibleIndex].essais += 1;
            if (nouvelleVilles[villeCibleIndex].essais >= 3) {
                nouvelleVilles[villeCibleIndex].trouve = false;
                onWrongAnswer();
            }
        }
        setVilles(nouvelleVilles);
    };

    return (
        <div className="carte-container">
            <img src="/images/intercite.png" alt="Carte des villes" className="carte-image" />
            {villes.map((ville, index) => {
                const xPercentage = (ville.x / 1000) * 100;
                const yPercentage = (ville.y / 500) * 100;

                return (
                    <button
                        key={index}
                        className={`ville-point ${ville.trouve ? 'trouve' : ville.essais >= 3 ? 'non-trouve' : ''}`}
                        style={{ left: `${xPercentage}%`, top: `${yPercentage}%` }}
                        disabled={ville.essais >= 3 || ville.trouve}
                        onClick={() => handleVilleClick(index)} 
                    >
                    </button>
                );
            })}
        </div>
    );
};

export default Carte;

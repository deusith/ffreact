import Enemy from "./Enemy";
import Champion from "./Champion";

import "../styles/Battlefield.css";

function Battlefield(props){
    const {enemies, champions} = props;
    return (
        <div className="Battlefield">
            <div className="enemy-field">
                { enemies.map( (enemy, index) => <Enemy key={`enemy-${index}`} hp={enemy.hp} /> ) }
            </div>
            <div className="champion-field">
                { champions.map( (champ, index) => <Champion key={`champion-${index}`} hp={champ.hp} /> ) }
            </div>
        </div>
    );
}

export default Battlefield
// total hours = 8.5
import React from 'react';

import Battlefield from "./components/Battlefield"
import Commands from "./components/Commands"
import Enemy from './components/Enemy';

import {EnemyData, ChampionData} from "./gamedata/character-data";
import * as TurnFunctions from "./gamedata/turn-functions";

import './styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      enemies : EnemyData,
      champions : ChampionData,
      avaliableCommands : ChampionData[0].commands
    }
  }

  checkState = () => {
    console.log(this.state);
  }

  // Using this to pause the game excecution :P one by one, enemies and players
  doNothing = () => {}

  /***
  * key = command in champ/enemy
  * Initiator = which champ/enemy started the deal
  * Controller = player or enemy.
  ***/
  executeCommand = (cmdKey, cmdInitiator, cmdController) => {
    const isPlayerCommand = cmdController === 'player' ? true : false;
    const newChampions = [...this.state.champions];
    const newEnemies = [...this.state.enemies];
    const initiator = isPlayerCommand ? newChampions[cmdInitiator] : newEnemies[cmdInitiator];
    const target = !isPlayerCommand ? newChampions[cmdInitiator] : newEnemies[cmdInitiator];

    switch (initiator.commands[cmdKey].type) {
      case "damage":
        TurnFunctions.dealDamage(cmdKey, initiator, target);
    }

    const turnCallback = isPlayerCommand ? this.enemyAttack : this.doNothing;

    this.setState({
      champions: newChampions,
      enemies: newEnemies
    }, () => turnCallback() );
  }

  enemyAttack = () => {
    const commandKey = Math.floor(Math.random() * 3);
    const enemyCommand = `cmd${commandKey}`;
    this.executeCommand(enemyCommand, 0, "enemy");
  }

  render() {
    return (
      <div className="App">
        <div className="mainCanvas">

          <Battlefield enemies={this.state.enemies} champions={this.state.champions} />
          <Commands avaliableCommands={this.state.avaliableCommands} executeCommand={this.executeCommand} check={this.checkState} />

        </div>
      </div>
    )
  }
}

export default App;

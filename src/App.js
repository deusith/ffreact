import React from 'react';

import Battlefield from "./components/Battlefield"
import Commands from "./components/Commands"

import './styles/App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.haltCounter = 0;
    this.state = this.setInitialState()
  }

  setInitialState = () => {
    const enemies = this.createEnemies();
    const champions = this.createEnemies();
    const turn = Math.random() < 0.5 ? 'enemy' : 'player';

    return {
      enemies : enemies,
      champions : champions,
      turn : turn
    }
  }


  createEnemies = () => {
    const enemyCount = 1;
    const enemyArray = [];
    for(let i = 0; i < enemyCount; i++){
      const variableHP = Math.random()  * 10 * (Math.random() < 0.5 ? 1 : -1 );
      const newEnemy = {hp: Math.floor(100 + variableHP)}
      enemyArray.push(newEnemy);
    };
    return enemyArray;
  }

  playerAction = (action) => {
    switch(action){
      case 'weak':
      case 'strong':
        this.championAttack(action);
        break;
      case 'heal':
        this.championHeal();
        break;
      default:
        break;
    }
  }

  championHeal = () => {
    const heal = 3 + Math.floor( Math.random() * 7 );
    const updatedChampions = [...this.state.champions];
    updatedChampions[0].hp = updatedChampions[0].hp + heal;
    this.setState({champions: updatedChampions, turn : 'player'}, () => this.enemyAttack() );
    console.log(`player heals for ${heal}.  ${this.state.champions[0].hp} remain.`)
  }

  championAttack = (type) => {
    let multiplier = 1;
    if (type === 'strong'){
      multiplier = 3;
    }
    const damage = Math.floor( Math.random() * 5 * multiplier );
    const updatedEnemies = [...this.state.enemies];
    updatedEnemies[0].hp = updatedEnemies[0].hp - damage;
    this.setState({enemies: updatedEnemies, turn : 'enemy'}, () => this.enemyAttack() );
    console.log(`player deals ${damage} to enemy0, ${this.state.enemies[0].hp} remain. Next turn: ${this.state.turn}`);
  }

  enemyAttack = () => {
    const damage = Math.floor(Math.random() * 15 + 1);
    const updatedChampions = [...this.state.champions];
    updatedChampions[0].hp = updatedChampions[0].hp - damage;
    this.setState({champions: updatedChampions, turn : 'player'})
    console.log(`Enemy deals ${damage} to champion0, ${this.state.champions[0].hp} remain. Next turn: ${this.state.turn}`)
  }

  checkState = () => {
    console.log(this.state);
  }

  // isCombatOver = () => {
  //   this.haltCounter += 1;
  //   const isOver = this.state.champions[0].hp < 0 || this.state.enemies[0].hp < 0 || this.haltCounter > 30;
  //   if(isOver) console.log('The war is over!');
  //   return isOver;
  // }

  // createToons = () => {
  //   console.log('Create Toons...');
  //   this.setState({turn : Math.random() < 0.5 ? 'enemy' : 'player'})
  //   console.log(this.state);
  //   this.createEnemies();
  //   console.log(this.state);
  //   this.createChampions();
  //   console.log(`${this.state.turn} will begin`);
  //   console.log(this.state);
  // }

  // combatOnce = () => {
  //   const damage = Math.floor(Math.random() * 19 + 1);
  //   switch (this.state.turn) {
  //     case 'player' :
  //       const updatedEnemies = [...this.state.enemies];
  //       updatedEnemies[0].hp = updatedEnemies[0].hp - damage;
  //       this.setState({enemies: updatedEnemies, turn : 'enemy'})
  //       console.log(`player deals ${damage} to enemy0, ${this.state.enemies[0].hp} remain. Next turn: ${this.state.turn}`)
  //       break;
  //     case 'enemy' :
  //       const updatedChampions = [...this.state.champions];
  //       updatedChampions[0].hp = updatedChampions[0].hp - damage;
  //       this.setState({champions: updatedChampions, turn : 'player'})
  //       console.log(`Enemy deals ${damage} to champion0, ${this.state.champions[0].hp} remain. Next turn: ${this.state.turn}`)
  //       break;
  //   }
  // }

  render() {
    return (
      <div className="App">
        <div className="mainCanvas">

          <Battlefield enemies={this.state.enemies} champions={this.state.champions} />
          <Commands action={this.playerAction} check={this.checkState} />

        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

//FINISHED WITH HELP FROM SOLUTIONS BRANCH

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [], 
    index: 0,
    money: 100,
    eaten: []
  }
  
  componentDidMount(){
    console.log("didmount")
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => this.setState({ sushis: sushiData }))
  
  }
  gimmeFourMore = (event) => {
    let newIndex = this.state.index + 4
    
    newIndex >= this.state.index.length ? 
    newIndex = 0 :
    null


    this.setState({
      index: newIndex
    })
  }

eatASushi = (sushi) => {
  const leftoverMoney = this.state.money - sushi.price
  !this.state.eaten.includes(sushi) && leftoverMoney >= 0 ? this.setState({
    eaten: [...this.state.eaten, sushi],
    money: leftoverMoney})
    : null

  // !this.state.eaten.includes(sushi) && leftoverMoney >= 0 ?

  // if(!this.state.eaten.includes(sushi) && leftoverMoney >= 0)
  // this.setState({
  //   eaten: [...this.state.eaten, sushi],
  //   money: leftoverMoney 
    
    
  }




  // eatASushi = (gobbledSushi) => {
  //   const leftoverSushi = this.state.sushis.filter(sushi => sushi.id !== gobbledSushi.id)
    
  //   fetch(API + gobbledSushi.id, {method: "DELETE"})
  //   .then(() => this.setState({
  //     sushis: leftoverSushi
  //   }))
  // }


  render() {
    return (
      <div className="app">
        <SushiContainer  sushiEaten={this.state.eaten}  eatASushi={this.eatASushi}  gimmeFourMore={this.gimmeFourMore}  index={this.state.index}  sushiData={this.state.sushis}/>
        <Table sushiBudget={this.state.money} sushiEaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
import './App.css';
import Lottery from './Lottery';
import LotteryHooks from './LotteryHooks'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
    <Lottery />
    <Lottery title='Mini Lotto' maxNum={10} numBalls={4}/>

    {/* <LotteryHooks /> */}
    </div>
    )
  }
}

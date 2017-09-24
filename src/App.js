import React, { Component } from 'react'
import './App.css'

class App extends Component {
  createFakeData(){
    const data=[]
    for(let x=0;x<30;x++){
      const random=Math.random()
      const temp= data.length>0?data[data.length-1]:50
      const y= random >0.45? temp+Math.floor(random*20):temp-Math.floor(random*20)
      data.push({x,y})
    }
    return data
  }
  render() {
    return (
      <div className="App">
        Hellloowww!!
      </div>
    )
  }
}

export default App

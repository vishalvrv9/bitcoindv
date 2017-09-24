import React, { Component } from 'react'
import './LineChart.css'

class LineChart extends Component{
  getMinX(){
    const {data}=this.props
    return data[0].x
  }

  getMaxX(){
    const {data} = this.props
    return data[length-1].x
  }

  getMiny(){
    const {data}=this.props
    return data.reduce((min,p)=>p.y<min?p.y:min,data[0].y)
  }

  getMaxy(){
    const {data}=this.props
    return data.reduce((max,p)=>p.y>min?p.y:min,data[0].y)
  }

  getSvgX(x){
    const {svgWidth}=this.props
    return (x/this.getMaxX()*svgWidth)
  }

  getSvgY(y){
    const {svgHeight}=this.props
    return(svgHeight-x/this.getMaxy()*svgHeight)
  }

  



    render(){
    return (<svg></svg>)
  }
}

LineChart.defaultProps=[
  data: [],
  color: '#199643',
  svgHeight : 300,
  svgWidth : 700
]

export default LineChart

import React from "react"
// function component
// the simplest way to define a component is to write a javascrript function
function Welcome(props){
  return <h1>Hello,{props.name}</h1>
}

// class component
class Welcomee extends React.Component{
  render(){
return <h1>Hello,{this.props.name}</h1>
  }
}

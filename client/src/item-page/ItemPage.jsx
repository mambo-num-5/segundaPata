import React, {Component}from "react";
import ReactDOM from "react-dom";
import menuItem from "./menuItem.js";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      list:[]
    }
  }

  render(){
    return(
      <Item/>
    )
  }

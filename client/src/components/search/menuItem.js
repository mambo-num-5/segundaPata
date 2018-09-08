import React, {Component}from "react";
import List from "./list.js";

class MenuItem extends React.Component{
  constructor(props){
    super()
    this.state ={
      list:[1,2,3,4,4,5,6]



    }
  }

    date(){
      this.setState({

      })
    }

  render(){
    console.log(this.state.list)
    return(
      <div>
      <List/>
      </div>
    )
  }
}


export default MenuItem;

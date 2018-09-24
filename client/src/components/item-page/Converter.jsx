import React from "react";

class Converter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      number:' ',
      result: 0
    }
    this.convert = this.convert.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  convert(a){
    var result = a * 18.95
    this.setState({result: result});
  }

  handleChange(e){
    this.setState({number: e.target.value});
  }

  handleClick(e){
    this.convert(this.state.number);
  }

  render(){
    return(
      <div>
        <p>convert</p><br />
        <textarea onChange={this.handleChange}>
        </textarea><br />
      <button onClick={this.handleClick}>Submit</button>
      <p>result:</p> {this.state.result}

      </div>
    )
  }
}

export default Converter;

import React from 'react';
import ReactDOM from 'react-dom';
import './Cocktail.css';

class Cocktail extends React.Component {

  constructor(props){
    super(props)
    this.click = this.click.bind(this)
  }

  click(){
    this.props.handleClick(this.props.id);
  }

  render(){
    return(
      <div className="cocktailOuter" onClick={this.click}>
        <img src={this.props.image} />
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}


export default Cocktail

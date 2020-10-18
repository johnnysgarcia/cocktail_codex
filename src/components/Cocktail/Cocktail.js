import React from 'react';
import ReactDOM from 'react-dom';
import './Cocktail.css';

class Cocktail extends React.Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.toggleModal(this.props.index);
  }

  render(){
    return(
      <div className="cocktailOuter" onClick={this.handleClick}>
        <img src={this.props.image} />
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}


export default Cocktail

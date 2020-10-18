import React from 'react';
import ReactDOM from 'react-dom';
import './List.css';
import Cocktail from '../Cocktail/Cocktail.js'

class List extends React.Component{
  render(){
    return(
      <div className="listOuter">
        {this.props.cocktails.map((item, index) => {
          return <Cocktail index={index} name={item.name} image={item.image} toggleModal={this.props.toggleModal}/>
        })}
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
      </div>
    )
  }
}

export default List

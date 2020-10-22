import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

class Modal extends React.Component {
  render(){
    return(
      <div id="myModal" className="modal" onClick={this.props.toggleModal}>
        <div className="modal-content">
          <button id="close">X</button>
          <img src={this.props.item.image} id="image"/>
          <div id="text">
          <h1 id="title">{this.props.item.name}</h1>
          <p id="description">This is a wonderful summer drink</p>
          <hr/>
          <h4>Ingredients</h4>
          <ul>
          {this.props.item.ingredients.map(x => {
            return <li>{x}</li>
          })}
          </ul>
          <h4>Instructions</h4>
          <p>{this.props.item.instructions}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal

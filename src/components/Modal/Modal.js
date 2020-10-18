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
          <h2 id="title">{this.props.item.name}</h2>
          <p id="description">This is a wonderful summer drink</p>
          <hr/>
          <label>Ingredients</label>
          <ol id="ingredients">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            <li>Ingredient 4</li>
          </ol>
          <label>Instructions</label>
          <ol id="steps">
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
          </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal

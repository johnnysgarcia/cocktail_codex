import React from 'react';
import ReactDOM from 'react-dom'
import './Codex.css'
import List from '../List/List.js'
import Modal from '../Modal/Modal.js'

class Codex extends React.Component{
  constructor(props){
    super(props);
    this.state={
      featured: [{
        name: 'mojito',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/6/23/0/mojito.jpg.rend.hgtvcom.826.620.suffix/1382375731551.jpeg'
      }, {
        name: 'margarita',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz-QnG8sCFthF5g6wKRYdCK9qvURpYvQyfZA&usqp=CAU'
      }, {
        name: 'old fashioned',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs3NgCll1qYcIBZxpNNtbABNT8LzShftTpSg&usqp=CAU'
      } , {
        name: 'margarita',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz-QnG8sCFthF5g6wKRYdCK9qvURpYvQyfZA&usqp=CAU'
      }],
      results: [{
        name: 'drink 1',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/6/23/0/mojito.jpg.rend.hgtvcom.826.620.suffix/1382375731551.jpeg'
      }, {
        name: 'drink 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz-QnG8sCFthF5g6wKRYdCK9qvURpYvQyfZA&usqp=CAU'
      }, {
        name: 'drink 3',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs3NgCll1qYcIBZxpNNtbABNT8LzShftTpSg&usqp=CAU'
      }, {
        name: 'drink 4',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/6/23/0/mojito.jpg.rend.hgtvcom.826.620.suffix/1382375731551.jpeg'
      }, {
        name: 'drink 5',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz-QnG8sCFthF5g6wKRYdCK9qvURpYvQyfZA&usqp=CAU'
      }, {
        name: 'drink 6',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs3NgCll1qYcIBZxpNNtbABNT8LzShftTpSg&usqp=CAU'
      }],
      displayModal: false,
      selected: {
        name: 'old fashioned',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs3NgCll1qYcIBZxpNNtbABNT8LzShftTpSg&usqp=CAU'
      }

    }
    this.selectFeatured = this.selectFeatured.bind(this)
    this.selectResult = this.selectResult.bind(this)
  }

  selectFeatured(index){
      if (this.state.displayModal === false){
        this.setState({
          displayModal: true,
          selected: this.state.featured[index]
        })
      } else {
        this.setState({
          displayModal: false
        })
      }
  }


  selectResult(index){
      if (this.state.displayModal === false){
        this.setState({
          displayModal: true,
          selected: this.state.results[index]
        })
      } else {
        this.setState({
          displayModal: false
        })
      }
  }

  render(){

    return (
    <div>
    <h2>Check out these featured drinks</h2>
    <List cocktails={this.state.featured} toggleModal={this.selectFeatured}/>
    {this.state.displayModal ? <Modal toggleModal={this.selectFeatured} item={this.state.selected}/> : ""}
    <h2>Search Results</h2>
    <List cocktails={this.state.results} toggleModal={this.selectResult}/>

    </div>
    )
  }
}

export default Codex

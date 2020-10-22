import React from 'react';
import ReactDOM from 'react-dom'
import './Codex.css'
import List from '../List/List.js'
import Modal from '../Modal/Modal.js'
import Filter from '../Filter/Filter.js'

class Codex extends React.Component{
  constructor(props){
    super(props);
    this.state={
      featured: [],
      results: [],
      displayModal: false,
      displayFilter: false,
      searchQuery: "",
      filter: "",
      resultsFound: false,
      initialSearch: false,
      selected: {
        name: 'old fashioned',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs3NgCll1qYcIBZxpNNtbABNT8LzShftTpSg&usqp=CAU'
      }

    }
    this.toggleModal = this.toggleModal.bind(this)
    this.getFeatured = this.getFeatured.bind(this)
    this.getCocktail = this.getCocktail.bind(this)
    this.toggleFilter = this.toggleFilter.bind(this)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.search = this.search.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  toggleModal(){
      if (this.state.displayModal === false){
        this.setState({
          displayModal: true,
        })
      } else {
        this.setState({
          displayModal: false
        })
      }
  }


  getFeatured(){
    fetch("https://rapidapi.p.rapidapi.com/randomselection.php", {
      "method": "GET",
      "headers": {
		        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		           "x-rapidapi-key": "27f4a2cb52mshc322c4a1c4fc07fp1f7097jsnb5f09ec442cb"
	            }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
            const newFeatured = jsonResponse.drinks.map(item => {
        return {
        name : item.strDrink,
        image : item.strDrinkThumb,
        id: item.idDrink
        }
      })
      newFeatured.splice(4)
      this.setState({
        featured : newFeatured
      })
    }).catch(err => {
      console.log(err)
    })
  }

//pass in id from cocktail object,
  getCocktail(id){
    const endpoint = `https://rapidapi.p.rapidapi.com/lookup.php?i=${id}`
    fetch(endpoint, {
	     "method": "GET",
	      "headers": {
		        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		          "x-rapidapi-key": "27f4a2cb52mshc322c4a1c4fc07fp1f7097jsnb5f09ec442cb"
	           }
           }).then(response => {
	            return response.json()
            }).then(jsonResponse => {
              const ingredientsList = [];
              for (var i = 1; i < 10; i++){
                if (eval(`jsonResponse.drinks[0].strIngredient${i}`) !== null){
                  if (eval(`jsonResponse.drinks[0].strMeasure${i}`) !== null){
                  ingredientsList.push(eval(`jsonResponse.drinks[0].strMeasure${i}`) + " " + eval(`jsonResponse.drinks[0].strIngredient${i}`))
                } else {
                  ingredientsList.push(eval(`jsonResponse.drinks[0].strIngredient${i}`))
                }
                }
              }
              let newObj = {
                name: jsonResponse.drinks[0].strDrink,
                image: jsonResponse.drinks[0].strDrinkThumb,
                instructions: jsonResponse.drinks[0].strInstructions,
                ingredients: ingredientsList
              }
              this.setState({
                selected: newObj,
                displayModal: true
              })
            }).catch(err => {
	            console.error(err);
            });
  }

/*
  populate(){
    fetch("https://rapidapi.p.rapidapi.com/popular.php", {
      "method": "GET",
      "headers": {
		        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		           "x-rapidapi-key": "27f4a2cb52mshc322c4a1c4fc07fp1f7097jsnb5f09ec442cb"
	            }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      console.log(jsonResponse)
      const newResults = jsonResponse.drinks.map(item => {
        return {
        name : item.strDrink,
        image : item.strDrinkThumb,
        id: item.idDrink
        }
      })
      this.setState({
        results : newResults
      })
    }).catch(err => {
      console.log(err)
    })
  }
  */
  componentDidMount(){
    this.getFeatured();
  }

  toggleFilter(){
    this.state.displayFilter ?
    this.setState({
      displayFilter: false,
      filter: ""
    }) :
    this.setState({
      displayFilter: true
    })
  }

  handleQueryChange(e){
    var newQuery = e.target.value;
    this.setState({
      searchQuery: newQuery
    })
  }


  search(){
    // if there is query, run through fetch
    var query = this.state.searchQuery;
    var ingredient = this.state.filter;
    var newResults;
    var endpoint = `https://rapidapi.p.rapidapi.com/search.php?s=${query}`;

      fetch(endpoint, {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
  		"x-rapidapi-key": "27f4a2cb52mshc322c4a1c4fc07fp1f7097jsnb5f09ec442cb"
  	}
  })
  .then(response => {
  	return response.json()
  }).then(jsonResponse => {
    console.log(jsonResponse)
    //if there are results
    if (jsonResponse.drinks !== null){
      newResults = jsonResponse.drinks;
      //if an ingredient filter is selected, filter by ingredient
      if (ingredient){
        newResults = newResults.filter(item => {
          for (var i = 0; i < 5; i++){
            if (eval(`item.strIngredient${i}`) === ingredient){
              //this im really not sure why it works, it returns the entire object, but if i just say return it returns nothing
              return {
                name : item.strDrink,
                image : item.strDrinkThumb,
                id: item.idDrink
              }
            }
          }
        })
      }
  //once filtered (or not filtered), checks if there is anything left
  if (newResults.length > 0){
    //maps results
    newResults = newResults.map(item => {
      return {
      name : item.strDrink,
      image : item.strDrinkThumb,
      id: item.idDrink
      }
    })
    this.setState({
      results : newResults,
      resultsFound: true,
      initialSearch: true
    })
  } else {
    //if nothing left, sets found to false
    this.setState({
      resultsFound: false,
      initialSearch: true
    })
  }

    }
  }).catch(err => {
  	console.error(err);
  });

  }

  handleFilterChange(e){
    var newFilter = e.target.value;
    this.setState({
      filter: newFilter
    })
  }

  render(){
//purpose is to only show results list and title if something has been searched
    var resultList;
    if (this.state.initialSearch){
      if (this.state.resultsFound){
        resultList = <div><h2>Search Results</h2>
<List cocktails={this.state.results} handleClick={this.getCocktail}/></div>
      } else {
        resultList = <h3>No Results Found... lets try again! </h3>
      }
    } else {
      resultList = "";
    }

    return (
    <div>
      <div id="featuredSection">
        <h2>Check out these featured drinks</h2>
        <List cocktails={this.state.featured} handleClick={this.getCocktail}/>
      </div>
      {this.state.displayModal ? <Modal toggleModal={this.toggleModal} item={this.state.selected}/> : ""}
      <div id="searchSection">
        <h2> Search for the perfect cocktail</h2>
        <input type="text" id="searchField" onChange={this.handleQueryChange}/><br/>
        <button className="testButton" id="filterButton" onClick={this.toggleFilter}>View Filters</button>
        <button className="testButton" id="searchButton" onClick={this.search}>Search</button>
        {this.state.displayFilter ? <Filter handleChange={this.handleFilterChange}/> : ""}
      </div>
      <div id="resultsSection">
        {resultList}
      </div>
      <div id="footer">
      </div>
    </div>
    )
  }
}

export default Codex

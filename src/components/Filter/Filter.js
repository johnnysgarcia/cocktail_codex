import React from 'react';
import ReactDOM from 'react-dom'
import './Filter.css'

class Filter extends React.Component {
  constructor(props){
    super(props)


  }


  render(){
    return(
      <div id="filterOuter">
<h3>Alcohol</h3>
<form onChange={this.props.handleChange}>
  <label>
    Vodka
    <input type="radio" name="alcohol" value="Vodka"/>
  </label><br/>
  <label>
    Gin
    <input type="radio" name="alcohol"  value="Gin"/>
  </label><br/>
  <label>
    Tequila
    <input type="radio" name="alcohol" value="Tequila"/>
  </label><br/>
  <label>
    Rum
    <input type="radio" name="alcohol" value="Rum"/>
  </label>
</form>
      </div>
    )
  }

}

export default Filter

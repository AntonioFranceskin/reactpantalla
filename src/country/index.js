import React, { Component } from 'react';
import style from './style.css'

class Country extends Component {

constructor(props) {
super(props);
}

  render() {
    return(
 <div>
		<input   value={this.props.book}  onChange={this.props.onInputChange} placeholder ="Book" name="book" type="text"/>
		<button type="button" className="${console.log('DENTRO',this.props.book)}" onClick={this.props.handleSubmit} > Submit </button>            	
		   
</div>
    )
  }
}

export default Country;


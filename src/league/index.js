import React, { Component } from 'react';

class League extends Component {

constructor(props) {
super(props);
const books = this.props.books;
}

  render() {
    console.log("BOOKS",this.props.books);
    return(
      <div >
      {this.props.books.map((book, index)=> 
          <div key={index}>
            <p> {book} </p>
          </div>
      )}
      	<button onClick={this.props.handleSubmit1} type="button" >atras</button>  
		    <button onClick={this.props.handleSubmit2} type="button" >alreves</button>  
      </div>
    )
  }
}

export default League;


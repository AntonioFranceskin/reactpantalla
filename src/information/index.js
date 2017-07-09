import React, { Component } from 'react';


class Information extends Component {

constructor(props) {
super(props);
const books = this.props.books;
}

  render() {
    console.log("BOOKS INFORMATATION",this.props);
    return(
      <div >
      {this.props.books.reverse().map((book, index) => 
          <div key={index}>
            <p> {book} </p>
          </div>
      )}
      	<button onClick={this.props.handleSubmit1} type="button" >atras</button>  
        <button onClick={this.props.handleSubmit11} type="button" >alderecho</button>  
      </div>
    )
  }
}

export default Information;
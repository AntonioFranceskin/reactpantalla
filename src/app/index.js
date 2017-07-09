import React, { Component} from 'react';

import Country from './../country/';
import League from './../league/';
import Information from './../information/';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLayout: 'L1',
      book: "",
      books: []
    };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSubmit1 = this.handleSubmit1.bind(this);
  this.handleSubmit11 = this.handleSubmit11.bind(this);
  this.handleSubmit2 = this.handleSubmit2.bind(this);
  this.onInputChange = this.onInputChange.bind(this);
  }



onInputChange(e) {
  let book = this.state.book;
  book = e.target.value;
  this.setState({book});

}

handleSubmit() {
    const book = this.state.book;
    let books = [...this.state.books, book];
    const currentLayout = "L2";
    this.setState({books, currentLayout});
    console.log("BOOK BOOKS currentLayout",book,books, currentLayout);

    } 

handleSubmit1() {
    let books = this.state.books;
    const currentLayout = "L1";
    this.setState({books, currentLayout});
    console.log("BOOK11111 BOOKS currentLayout",books, currentLayout);
    } 

handleSubmit2() {
    let books = this.state.books;
    const currentLayout = "L3";
    this.setState({books, currentLayout});
    console.log("BOOK333333 BOOKS currentLayout",books, currentLayout);
    } 


handleSubmit11() {
    let books = this.state.books;
    books.reverse();
    const currentLayout = "L2";
    this.setState({books, currentLayout});
    console.log("BOOK444444 BOOKS currentLayout",books, currentLayout);
    } 



  render() {
    const {
      currentLayout
    } = this.state;
    const {books} = this.state;
    let layout;

    switch (currentLayout) {
      case "L1":
        layout = <Country handleSubmit={this.handleSubmit} onInputChange={this.onInputChange} />    
        break;
      case "L2":
        layout = <League books={books}   handleSubmit1={this.handleSubmit1} handleSubmit2={this.handleSubmit2} />  
        break;
      case "L3":
        layout = <Information books={books}   handleSubmit1={this.handleSubmit1}  handleSubmit11={this.handleSubmit11}  />
        break;
    }
    return(
      <div>
        { layout }
      </div>
    );
  }
}

export default App;

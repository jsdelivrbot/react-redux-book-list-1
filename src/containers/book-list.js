import React, { Component } from 'react'
import { connect } from 'react-redux' // glue between react and redux
import selectBook from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList(){
    if (!this.props.books){
      return (
        <div> Loading ...</div>
      );
    }
    return this.props.books.map(book => {
      return (
        <li 
          onClick={() => this.props.selectBook(book)}
          key={book.title} 
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  
  render() {
    return (
      <ul className="list=group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// this is connection between redux and our container component
const  mapStateToProps = (state) => {
  // Whatever is returned will show up as props
  // inside book list
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props
// to the BookList container
const mapDispatchToProps = (dispatch) => {
  // Whenever selectBook is called, ths result should be passed
  // to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}
// Promote BookList from a component to container - it needs to
// know about this new dispatch method, selectBook. Make it avilable
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

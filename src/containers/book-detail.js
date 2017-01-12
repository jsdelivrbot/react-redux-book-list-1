import React, { Component } from 'react'
import { connect } from 'react-redux' // glue between react and redux


class BookDetail extends Component {
    render() {
        if (!this.props.activeBook){
            return (
                <div> Book Detail </div>
            );
        }

        return(
            <div>
                <h3> Details For </h3>
                    <div>Title: {this.props.activeBook.title}</div>
                    <div>Pages: {this.props.activeBook.pages}</div>
                    
            </div>
        );
    }
}

// this is connection between redux and our container component
const  mapStateToProps = (state) => {
  // Whatever is returned will show up as props
  // inside book list
  return {
    activeBook: state.activeBook
  }
}

// Promote BookList from a component to container - it needs to
// know about this new dispatch method, selectBook. Make it avilable
// as a prop.
export default connect(mapStateToProps)(BookDetail);

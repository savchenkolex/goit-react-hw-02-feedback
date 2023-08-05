import React, { Component } from 'react';
import css from './Form.module.css';

class Form extends Component {
  render() {
    return (
      <>
        <form className={css.form}>

          {this.props.children}
          
        </form>
      </>
    );
  }
}

export default Form;

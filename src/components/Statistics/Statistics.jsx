import React, { Component } from 'react';
import PropTypes, { shape } from "prop-types";
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    return (
      <>
        <ul className={css.votes}>
          <li>Good: {this.props.good} </li>
          <li>Neutral: {this.props.neutral}</li>
          <li>Bad: {this.props.bad}</li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
    props: PropTypes.objectOf(shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number
    }))
}

export default Statistics;

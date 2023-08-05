import React, { Component } from 'react';

import css from './Statistics.module.css';

class Statistics extends Component {
    
  render() {
    console.log(this.props);
    return (
      <>
        
        <ul className={css.votes}>
          <li className={css.vote}>Good: {this.props.good} </li>
          <li className={css.vote}>Neutral: {this.props.neutral}</li>
          <li className={css.vote}>Bad: {this.props.bad}</li>
        </ul>
        <div className={css.aggregator}>
          <div>
            <p className={css["agg-title"]}>Total:</p>
            <p>{this.props.total}</p>
          </div>
          <div>
            <p className={css["agg-title"]}>Precentage:</p>
            <p>{this.props.precentage}%</p>
          </div>
        </div>
      </>
    );
  }
}

export default Statistics;

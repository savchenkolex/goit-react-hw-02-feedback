
import PropTypes, { shape } from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics (props) {
  
    return (
      <>
        <ul className={css.votes}>
          <li>Good: {props.good} </li>
          <li>Neutral: {props.neutral}</li>
          <li>Bad: {props.bad}</li>
        </ul>
        <div className={css.aggregator}>
          <div>
            <p className={css['agg-title']}>Total:</p>
            <p>{props.total}</p>
          </div>
          <div>
            <p className={css['agg-title']}>Positive precentage:</p>
            <p>{props.positivePercentage}%</p>
          </div>
        </div>
      </>
    );
  }


Statistics.propTypes = {
  props: PropTypes.objectOf(
    shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
      total: PropTypes.number,
      positivePercentage: PropTypes.number,
    })
  ),
};


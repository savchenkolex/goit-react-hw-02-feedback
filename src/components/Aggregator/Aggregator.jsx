import PropTypes, { shape } from 'prop-types';
import css from './Aggregator.module.css';

export default function Aggregator(props) {
  console.log(props);
  return (
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
  );
}

Aggregator.propTypes = {
  props: PropTypes.objectOf(
    shape({
      total: PropTypes.number,
      positivePercentage: PropTypes.number,
    })
  ),
};

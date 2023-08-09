import PropTypes, { shape } from 'prop-types';

import css from './FeedbackOptions.module.css';

export default function FeedbackOptions(props) {
  return (
    <>
      {props.options.map(element => {
        return (
          <button
            key={element.toUpperCase()}
            onClick={event => {
              props.onLeaveFeedback(event);
            }}
            className={css.input}
            type="button"
          >
            {element.toUpperCase()}
          </button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  props: PropTypes.objectOf(
    shape({
      options: PropTypes.array,
    })
  ),
};

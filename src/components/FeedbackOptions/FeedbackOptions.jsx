import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    
    render() {
        return (
      <>
        { this.props.options.map(element => {
          return (
            <input
              onClick={event => {
                this.props.onLeaveFeedback(event);
              }}
              className={css.input}
              type="button"
              value={element.toUpperCase()}
            />
          );
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  props: PropTypes.objectOf(
    shape({
      options: PropTypes.array,
    })
  ),
};

export default FeedbackOptions;

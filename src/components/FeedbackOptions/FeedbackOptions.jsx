import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
          className={css.button}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;

import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  filter: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

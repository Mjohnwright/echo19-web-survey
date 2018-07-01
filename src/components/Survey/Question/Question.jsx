import React from 'react';
import PropTypes from 'prop-types';

export default class Question extends React.Component {
  static propTypes = {
    question: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        questionText: PropTypes.string.isRequired,
        questionHelp: PropTypes.string.isRequired,
        questionOptions: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          optionText: PropTypes.string.isRequired,
          optionHelp: PropTypes.string.isRequired,
        }).isRequired),
      })]).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.state.question = this.props.question;
  }

  render() {
    return (
      <div className="question">
        <h1>{this.state.question.questionText}</h1>
      </div>
    );
  }
}

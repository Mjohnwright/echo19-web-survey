import React, { } from 'react';
import PropTypes from 'prop-types';

import QuestionOptionButton from '../QuestionOptionButton/QuestionOptionButton';
import './QuestionOptions.css';

class QuestionOptions extends React.Component {
  static propTypes = {
    clickFunction: PropTypes.func.isRequired,
    questionOptions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      optionText: PropTypes.string.isRequired,
      optionHelp: PropTypes.string.isRequired,
    })).isRequired,
  };

  options = options => options.map(item => (
    <QuestionOptionButton
      optionText={item.optionText}
      optionHelp={item.optionHelp}
      key={item.id}
      clickFunction={this.optionClicked}
      id={item.id}
    />
  ))

  optionClicked = (id) => {
    this.props.clickFunction(id);
  }

  render() {
    return (
      <div className="questionOptions">
        {this.options(this.props.questionOptions)}
      </div>
    );
  }
}

export default QuestionOptions;

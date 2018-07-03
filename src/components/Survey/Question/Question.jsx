import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptions from '../QuestionOptions/QuestionOptions';
import QuestionParser from '../../../QuestionParser/QuestionParser';


export default class Question extends React.Component {
  static propTypes = {
    qp: PropTypes.instanceOf(QuestionParser).isRequired,
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
    this.qp = this.props.qp;
  }

  answerClicked = (id) => {
    this.setState({ question: this.qp.getAnswerQuestions(id) });
  }

  render() {
    return (
      <div className="question">
        <h1>{this.state.question.questionText}</h1>
        <QuestionOptions
          clickFunction={this.answerClicked}
          questionOptions={this.state.question.questionOptions}
        />
      </div>
    );
  }
}

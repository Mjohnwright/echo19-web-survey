import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './QuestionOptionButton.css';

class QuestionOptionButton extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    clickFunction: PropTypes.func.isRequired,
    optionText: PropTypes.string.isRequired,
    optionHelp: PropTypes.string.isRequired,
    attributeKey: PropTypes.string,
    attributeValue: PropTypes.string,
  }

  static defaultProps = {
    attributeKey: null,
    attributeValue: null,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  callback = () => {
    this.props.clickFunction(
      this.props.id,
      this.props.attributeKey,
      this.props.attributeValue,
    );
  }

  render() {
    return (
      <button
        type="button"
        className="QuestionOptions btn btn-primary btn-lg btn-block"
        title={this.props.optionHelp}
        onClick={this.callback}
      >
        {this.props.optionText}
      </button>
    );
  }
}

export default QuestionOptionButton;

import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Question from './Question/Question';
import QuestionParser from '../../QuestionParser/QuestionParser';
import questions from '../../research/treeizeData'; // move to api call later...

export default class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.questionParser = new QuestionParser(questions);
  }

  firstQuestion() {
    return (
      <Question
        question={this.questionParser.getFirstQuestion()}
        qp={this.questionParser}
      />
    );
  }

  render() {
    return (
      <div className="routes">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Link to="/start" href="/start">
                  <h1>Let&#39;s get started</h1>
                </Link>
                <a href="/#/start" className="btn btn-primary btn-block">Go!</a>
              </div>
            )}
          />
          <Route path="/start" exact render={() => this.firstQuestion()} />
        </Switch>
      </div>
    );
  }
}

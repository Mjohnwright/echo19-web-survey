import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Question from './Question/Question';
import QuestionParser from '../../QuestionParser/QuestionParser';
import survey from '../../research/treeizeData'; // move to api call later...

const questions=survey.questions;

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
                <Link to="/survey" href="/survey">
                  <h3>{survey.intro}</h3>
                </Link>
              </div>
            )}
          />
          <Route path="/survey" exact render={() => this.firstQuestion()} />
          <Route
            path="/end"
            exact
            render={() => (
              <div>
                <h3>{survey.endMessage}</h3>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

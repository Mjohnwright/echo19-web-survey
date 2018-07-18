import React from 'react';
import Question from './Question';
import QuestionOptions from '../QuestionOptions/QuestionOptions';

import QuestionParser from '../../../QuestionParser/QuestionParser';
import survey from '../../../research/treeizeData';

const qp = new QuestionParser(survey.questions);
const q = qp.getFirstQuestion();

describe('Question tests', () => {
  test('has question parser', () => {
    const wrapper = shallow(<Question question={q} qp={qp} />);
    expect(wrapper.instance().qp).toBeInstanceOf(QuestionParser);
  });

  test('switches question', () => {
    const newQ = qp.getAnswerQuestions((q.questionOptions[0].id));
    const wrapper = mount(<Question question={q} qp={qp} />);
    expect(wrapper.text()).not.toMatch(/First, let’s start with do you like ice cream\?/);
    wrapper.instance().setState({ question: newQ });
    expect(wrapper.text()).toMatch(/First, let’s start with do you like ice cream\?/);
  });

  test('has question options', () => {
    const wrapper = mount(<Question question={q} qp={qp} />);
    expect(wrapper.find(QuestionOptions)).toExist();
  });

  test('has initial state', () => {
    const wrapper = shallow(<Question
      question={qp.getFirstQuestion()}
      qp={qp}
    />);
    expect(wrapper.instance().state).toBeDefined();
    expect(wrapper.instance().state.question.id).toBe('35767');
  });

  test('renders with question', () => {
    const wrapper = shallow(<Question question={q} qp={qp} />);
    expect(wrapper.text()).toMatch(/Hi \[voter name\]\. Let’s begin!/);
  });

  test('renders', () => {
    const wrapper = shallow(<Question question={q} qp={qp} />);
    expect(wrapper.find('div')).toExist();
  });
});

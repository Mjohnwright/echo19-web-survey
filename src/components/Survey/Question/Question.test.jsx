import React from 'react';
import Question from './Question';

import QuestionParser from '../../../QuestionParser/QuestionParser';
import questions from '../../../research/treeizeData';

const qp = new QuestionParser(questions);

describe('Question tests', () => {
  test('renders with question', () => {
    const q = qp.getFirstQuestion();
    const wrapper = shallow(<Question question={q} />);
    expect(wrapper.text()).toMatch(/Hi \[voter name\]\. Let’s begin!/);
  });

  test('renders', () => {
    const q = qp.getFirstQuestion();
    const wrapper = shallow(<Question question={q} />);
    expect(wrapper.find('div')).toExist();
  });
});

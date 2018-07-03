import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

import QuestionOptions from './QuestionOptions';
import dbQuestions from '../../../research/treeizeData';
import questionConverter from '../../../QuestionParser/questionConverter';

const questions = questionConverter(dbQuestions.questions);

const firstQuestionOptions = questions[1].questionOptions;

describe('COMPONENT: <QuestionOptions /> tests', () => {
  // this should implemented... key, value will what can get stored in the db...
  // that way the answer could be different than what's on the screen, may or may not be
  // usefull...
  // test('can have key and value associate with the option', () => {
  //   console.log(firstQuestionOptions);
  //   expect(firstQuestionOptions[0].surveyQuestionAnswerId).toBe(159348);
  // });

  it('triggers click event from child component', () => {
    const spy = jest.fn();
    const w = mount(<QuestionOptions
      questionOptions={firstQuestionOptions}
      clickFunction={spy}
    />);
    w.find('button').first().simulate('click');
    expect.assertions(1);
    expect(spy).toHaveBeenCalled();
  });

  test('has large buttons for displaying the options', () => {
    const w = mount(<QuestionOptions
      questionOptions={firstQuestionOptions}
      clickFunction={() => {}}
    />);
    expect(w.find('button.btn-lg').length).toBe(2);
  });

  test('displays question options', () => {
    const wrapper = shallow(<QuestionOptions
      questionOptions={firstQuestionOptions}
      clickFunction={() => {}}
    />);
    expect(isCompositeComponent(wrapper)).toBe(true);
  });
});

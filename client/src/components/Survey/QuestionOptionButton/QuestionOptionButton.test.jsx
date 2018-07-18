import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

import QuestionOptionButton from './QuestionOptionButton';
import survey from '../../../research/treeizeData';

const firstQuestion = survey.questions[1].answers;

describe('COMPONENT: <QuestionOptionButton />', () => {
  test('has attribute key and value', () => {
    expect(firstQuestion[0].surveyQuestionAnswerId).toBe(159348);
  });

  // test('passes value to click function when clicked', () => {
  //   const clickFunc = jest.fn();
  //   const wrapper = mount(<QuestionOptionButton
  //     id="1"
  //     optionText="otext"
  //     optionHelp="ohelp"
  //     attributeKey={firstQuestion[0].attributeKey}
  //     attributeValue={firstQuestion[0].attributeValue}
  //     clickFunction={clickFunc}
  //   />);
  //   wrapper.find('button').first().simulate('click');
  //   expect(clickFunc.mock.calls[0][0]).toBe('1');
  //   expect(clickFunc.mock.calls[0][1]).toBe('foo');
  //   expect(clickFunc.mock.calls[0][2]).toBe('bar');
  // });


  test('has an onClick event', () => {
    const spy = jest.fn();
    expect(spy.mock.calls.length).toBe(0);
    const w = shallow(<QuestionOptionButton
      optionText={firstQuestion[0].value}
      optionHelp={firstQuestion[0].responseText}
      key={firstQuestion[0].surveyQuestionAnswerId}
      clickFunction={spy}
      id="TEST1"
    />);
    w.find('button').first().simulate('click');
    expect(spy.mock.calls.length).toBe(1);
  });

  test('gets it\'s instance in enzyme', () => {
    const wrapper = shallow(<QuestionOptionButton
      optionText={firstQuestion[0].value}
      optionHelp={firstQuestion[0].responseText}
      key={firstQuestion[0].surveyQuestionAnswerId}
      clickFunction={() => {}}
      id="TEST1"
    />);
    expect(wrapper.instance()).toBeInstanceOf(QuestionOptionButton);
  });

  test('displays question option button', () => {
    const wrapper = shallow(<QuestionOptionButton
      optionText={firstQuestion[0].value}
      optionHelp={firstQuestion[0].responseText}
      key={firstQuestion[0].surveyQuestionAnswerId}
      clickFunction={() => {}}
      id="TEST1"
    />);
    expect(isCompositeComponent(wrapper)).toBe(true);
    expect(wrapper.html()).toMatch(/Yes/);
  });
});

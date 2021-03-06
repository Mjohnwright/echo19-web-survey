import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import SurveyContainer from './SurveyContainer';


describe('survey container tests', () => {
  // TODO: this test is probably not right...
  test('start link goes to first question', () => {
    const wrapper = mount(<Router initialEntries={['/start']} initialIndex={0}><SurveyContainer /></Router>);
    expect(wrapper.html()).toMatch(/href="#\/start/);
  });

  test('has link to first question', () => {
    const wrapper = mount(<Router><SurveyContainer /></Router>);
    expect(wrapper.html()).toMatch(/Let\'s get started/);
    expect(wrapper.text()).toMatch(/Hello! This is \[volunteer name\] from Chocolate Cows with a brief 3/);
    expect(wrapper.html()).toMatch(/href="#\/start"/);
  });

  test('survey container has routes', () => {
    const wrapper = shallow(<SurveyContainer />);
    expect(wrapper.find(Route)).toExist();
  });

  test('survey container has questions (inside question parser)', () => {
    const wrapper = shallow(<SurveyContainer />);
    expect(wrapper.instance().questionParser.questions[0].id).toBe('35767');
  });

  test('test can mount', () => {
    const wrapper = shallow(<SurveyContainer />);
    expect(wrapper.find('div')).toExist();
  });
});

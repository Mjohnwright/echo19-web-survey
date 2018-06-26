import questionConverter from './questionConverter';
import dbQuestions from '../../research/treeizeData';

describe('questionConverter tests', () => {
  test('ids are string values', () => {
    const q = questionConverter(dbQuestions);
    expect(typeof (q[1]).id).toBe('string');
    expect(typeof (q[1].questionOptions[1].id)).toBe('string');
  });
  test('test skip data gets entered into object', () => {
    const q = questionConverter(dbQuestions);
    expect(q[5].questionOptions[1].action).toBe('GOTO=7');
  });
});

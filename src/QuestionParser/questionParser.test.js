import QuestionParser from './QuestionParser';

import dbQuestions from '../../research/treeizeData';

describe('questionParser tests', () => {
  test('skips if a goto is the action', () => {
    const qp = new QuestionParser(dbQuestions);
    expect(qp.getNextQuestion('159360').id).toBe('35774');
    expect(qp.getNextQuestion('159364').id).toBe('35774');
  });

  test('returns next question with faked id', () => {
    const qp = new QuestionParser(dbQuestions);
    expect(qp.getNextQuestion('35767-1').id).toBe('35768');
  });

  test('returns false if no next question', () => {
    const qp = new QuestionParser(dbQuestions);
    expect(qp.getNextQuestion('35774-1')).toBe(false);
  });

  test('can get next question', () => {
    const qp = new QuestionParser(dbQuestions);
    expect(qp.getNextQuestion('159349').id).toBe('35769');
  });

  test('question parser can convert db questions to js questions', () => {
    const qp = new QuestionParser(dbQuestions);
    expect(qp.questions[0].id).toBe('35767');
  });

  test('question parser gets questions', () => {
    const qp = new QuestionParser(dbQuestions);
    expect(qp.questions[0].id).toBe('35767');
  });

  test('can load questions from file', () => {
    expect(dbQuestions[0].surveyQuestionId).toBe(35767);
  });

  test('sanity test', () => {
    expect(true).toBeTruthy();
  });
});

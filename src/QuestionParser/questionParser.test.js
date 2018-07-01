import QuestionParser from './QuestionParser';

import dbQuestions from '../research/treeizeData';

describe('questionParser tests', () => {
  describe('question parser tests', () => {
    const questionParser = new QuestionParser(dbQuestions);
    // test('gets next question from parent', () => {
    //   expect(questionParser.getAnswerQuestions('1.1.1').id).toBe('q3');
    // });

    // test('get\'s parent\'s next question if question doesn\'t have child questions', () => {
    //   expect(questionParser.getAnswerQuestions('1.2').id).toBe('q3');
    // });

    test('can get first question', () => {
      expect(questionParser.getFirstQuestion().id).toBe('35767');
    });

    test('will return false if the next question does not exist', () => {
      expect(questionParser.getAnswerQuestions('35774-1')).toBe(false);
    });

    test('can get the next question after a click if the answer has addtestional questions', () => {
      expect(questionParser.getAnswerQuestions('159364').id).toBe('35774');
    });

    test('has question array', () => {
      expect(questionParser.questions.length).toBeGreaterThan(0);
    });

    test('can be constructed', () => {
      expect(typeof questionParser).toBe('object');
    });
  });


  // older tests below...


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

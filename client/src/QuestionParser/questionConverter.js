export default (dbQuestions) => {
  const newQuestions = [];
  dbQuestions.forEach((item) => {
    const newSurveyItem = {
      id: String(item.surveyQuestionId),
      intro: dbQuestions.intro,
      goal: dbQuestions.goal,
      endMessage: dbQuestions.endMessage,
      questionText: item.nameLong,
      questionHelp: item.nameLong,
    };
    // if / else statement to handle questions without any answers - i.e. statements
    if (item.answers) {
      newSurveyItem.questionOptions = [];
      item.answers.forEach((answer) => {
        newSurveyItem.questionOptions.push({
          id: String(answer.surveyQuestionAnswerId),
          optionText: answer.value,
          optionHelp: answer.value,
          action: answer.action,
        });
      });
    } else {
      newSurveyItem.questionOptions = [{
        id: `${item.surveyQuestionId}-1`,
        optionText: 'OK',
        optionHelp: 'OK',
      }];
    }
    newQuestions.push(newSurveyItem);
  });
  return newQuestions;
};

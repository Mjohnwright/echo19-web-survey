export default (dbQuestions) => {
  const newQuestions = [];
  dbQuestions.forEach((item) => {
    const newSurveyItem = {
      id: String(item.surveyQuestionId),
      questionText: item.nameLong,
      questionHelp: item.nameLong,
    };
    // if / else statement to fix data without any options...
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

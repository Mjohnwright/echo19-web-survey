// import testData from './treeizeData';
// const testData = require('./treeizeData');
import testData from './treeizeData';

const Treeize = require('treeize');


const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'echo19',
});

const survey = new Treeize();
survey.setOptions({ input: { uniformRows: true }, output: { resultsAsObject: true } });
const query = `
select
c.id as callId, c.\`name\` as callName, c.isActive as active, c.intro, c.endMessage, c.goal,
b.id as 'questions:surveyQuestionId*', b.\`name\` as 'questions:SurveyQuestionName',
b.recordingMp3S3 as 'questions:recordingMp3S3', b.defaultAction as
'questions:defaultAction', b.defaultActionValue as 'questions:defaultActionValue',
b.noAnswerReceivedAction as 'questions:noAnswerReceivedAction',
b.noAnswerReceivedValue as 'questions:noAnswerReceivedValue',
b.singleDigit as 'questions:singleDigit', b.multipleDigitQuestion as
'questions:multipleDigitQuestion',
b.digits as 'questions:numberOfDigits', b.lowerLimit as 'questions:lowerLimit',
b.upperLimit as 'questions:upperLimit',
b.isMandatory as 'questions:required', b.nameLong as 'questions:nameLong',
b.defaultResponseText as 'questions:defaultResponseText',
b.isStatement as 'questions:statement', b.isFeedback as 'questions:feedback',
a.id as 'questions:answers:surveyQuestionAnswerId', a.digit as
'questions:answers:digit', a.\`value\` as 'questions:answers:value',
a.answerValue as 'questions:answers:answerValue', a.answerAction as
'questions:answers:action', a.doNotRandomize as 'questions:answers:doNotRandomize',
a.s3url as 'questions:answers:s3url', a.responseText as 'questions:answers:responseText'
from SurveyQuestionAction a
right outer join SurveyQuestion b on a.surveyQuestionId = b.id
inner join \`Call\` c on b.callId = c.id
where c.id = 18940
order by b.id, a.digit
`

const surveyJson = survey.grow(testData);
const newSurvey = {};
newSurvey.questions = [];

surveyJson.getData().questions.forEach((item) => {
  const newSurveyItem = {
    id: item.surveyQuestionId,
    questionText: item.nameLong,
    questionHelp: item.nameLong,
  };
  if (item.answers) {
    newSurveyItem.questionOptions = [];
    item.answers.forEach((answer) => {
      newSurveyItem.questionOptions.push({
        id: answer.surveyQuestionAnswerId,
        optionText: answer.value,
        optionHelp: answer.value,
      });
    });
  } else {
    newSurveyItem.questionOptions = [{
      id: `${item.surveyQuestionId}-1'`,
      optionText: 'OK',
      optionHelp: 'OK',
    }];
  }

  newSurvey.questions.push(newSurveyItem);
});

// console.log(newSurvey);
// console.log(newSurvey.questions[1]);
console.log(JSON.stringify(newSurvey));

// console.log(surveyJson.getData().questions.length);
// console.log(JSON.stringify(surveyJson.getData(), null, 4));
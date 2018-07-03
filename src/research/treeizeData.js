import Treeize from 'treeize';

const surveyT = new Treeize();

const testData = [{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35767,
  'questions:SurveyQuestionName': 'hello',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': null,
  'questions:noAnswerReceivedValue': null,
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Hi [voter name]. Let’s begin!',
  'questions:defaultResponseText': '',
  'questions:statement': 1,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': null,
  'questions:answers:digit': null,
  'questions:answers:value': null,
  'questions:answers:answerValue': null,
  'questions:answers:action': null,
  'questions:answers:doNotRandomize': null,
  'questions:answers:s3url': null,
  'questions:answers:responseText': null,
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35768,
  'questions:SurveyQuestionName': 'Like ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'First, let’s start with do you like ice cream?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159348,
  'questions:answers:digit': '1',
  'questions:answers:value': 'Yes',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35768,
  'questions:SurveyQuestionName': 'Like ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'First, let’s start with do you like ice cream?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159349,
  'questions:answers:digit': '2',
  'questions:answers:value': 'No',
  'questions:answers:answerValue': '',
  'questions:answers:action': 'BYE',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35769,
  'questions:SurveyQuestionName': 'How often you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Okay, that’s good. About how many times a month would you say you eat ice cream?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159350,
  'questions:answers:digit': '1',
  'questions:answers:value': '10 or more',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35769,
  'questions:SurveyQuestionName': 'How often you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Okay, that’s good. About how many times a month would you say you eat ice cream?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159351,
  'questions:answers:digit': '2',
  'questions:answers:value': '6 to 9 times per month',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35769,
  'questions:SurveyQuestionName': 'How often you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Okay, that’s good. About how many times a month would you say you eat ice cream?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159352,
  'questions:answers:digit': '3',
  'questions:answers:value': '3 to 5 times per month',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35769,
  'questions:SurveyQuestionName': 'How often you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Okay, that’s good. About how many times a month would you say you eat ice cream?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159353,
  'questions:answers:digit': '4',
  'questions:answers:value': '1 to 2 times per month',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35769,
  'questions:SurveyQuestionName': 'How often you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Okay, that’s good. About how many times a month would you say you eat ice cream?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159354,
  'questions:answers:digit': '5',
  'questions:answers:value': 'less than once a month',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35770,
  'questions:SurveyQuestionName': 'how do you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Do you prefer to eat ice cream out of a Bowl, on a sugar cone, on a cake cone, or it doesn\'t matter?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159355,
  'questions:answers:digit': '1',
  'questions:answers:value': 'Bowl',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35770,
  'questions:SurveyQuestionName': 'how do you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Do you prefer to eat ice cream out of a Bowl, on a sugar cone, on a cake cone, or it doesn\'t matter?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159356,
  'questions:answers:digit': '2',
  'questions:answers:value': 'Sugar cone',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35770,
  'questions:SurveyQuestionName': 'how do you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Do you prefer to eat ice cream out of a Bowl, on a sugar cone, on a cake cone, or it doesn\'t matter?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159357,
  'questions:answers:digit': '3',
  'questions:answers:value': 'Cake cone',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35770,
  'questions:SurveyQuestionName': 'how do you eat ice cream?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Do you prefer to eat ice cream out of a Bowl, on a sugar cone, on a cake cone, or it doesn\'t matter?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159358,
  'questions:answers:digit': '4',
  'questions:answers:value': 'It doesn\'t matter',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35772,
  'questions:SurveyQuestionName': 'Best ice cream flavor',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Now, the tough one - which of the following is the best ice cream flavor: Chocolate, Vanilla or Strawberry?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159360,
  'questions:answers:digit': '1',
  'questions:answers:value': 'Chocolate',
  'questions:answers:answerValue': '',
  'questions:answers:action': 'GOTO=7',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35772,
  'questions:SurveyQuestionName': 'Best ice cream flavor',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Now, the tough one - which of the following is the best ice cream flavor: Chocolate, Vanilla or Strawberry?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159361,
  'questions:answers:digit': '2',
  'questions:answers:value': 'Vanilla',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35772,
  'questions:SurveyQuestionName': 'Best ice cream flavor',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Now, the tough one - which of the following is the best ice cream flavor: Chocolate, Vanilla or Strawberry?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159362,
  'questions:answers:digit': '3',
  'questions:answers:value': 'Strawberry',
  'questions:answers:answerValue': '',
  'questions:answers:action': '-1',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35773,
  'questions:SurveyQuestionName': 'Sure it’s not chocolate?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Are you sure it’s not chocolate?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159363,
  'questions:answers:digit': '1',
  'questions:answers:value': 'Yes',
  'questions:answers:answerValue': '',
  'questions:answers:action': 'BYE',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35773,
  'questions:SurveyQuestionName': 'Sure it’s not chocolate?',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': '-1',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': '-1',
  'questions:noAnswerReceivedValue': '',
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'Are you sure it’s not chocolate?',
  'questions:defaultResponseText': '',
  'questions:statement': 0,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': 159364,
  'questions:answers:digit': '2',
  'questions:answers:value': 'No',
  'questions:answers:answerValue': '',
  'questions:answers:action': 'GOTO=7',
  'questions:answers:doNotRandomize': 0,
  'questions:answers:s3url': null,
  'questions:answers:responseText': '',
},
{
  callId: 18940,
  callName: 'echo1> call trial',
  active: 1,
  intro: 'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?',
  endMessage: 'Okay, that’s it. Thank you very much for your time! Have a great day/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate’s committee. 555-555-5555.',
  goal: 'Use this demo call to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.',
  'questions:surveyQuestionId*': 35774,
  'questions:SurveyQuestionName': 'Chocolate is the best!',
  'questions:recordingMp3S3': null,
  'questions:defaultAction': 'BYE',
  'questions:defaultActionValue': '',
  'questions:noAnswerReceivedAction': null,
  'questions:noAnswerReceivedValue': null,
  'questions:singleDigit': 1,
  'questions:multipleDigitQuestion': 0,
  'questions:numberOfDigits': 1,
  'questions:lowerLimit': null,
  'questions:upperLimit': null,
  'questions:required': 0,
  'questions:nameLong': 'You are correct, chocolate is the best!',
  'questions:defaultResponseText': '',
  'questions:statement': 1,
  'questions:feedback': 0,
  'questions:answers:surveyQuestionAnswerId': null,
  'questions:answers:digit': null,
  'questions:answers:value': null,
  'questions:answers:answerValue': null,
  'questions:answers:action': null,
  'questions:answers:doNotRandomize': null,
  'questions:answers:s3url': null,
  'questions:answers:responseText': null,
},
];

const survey = { questions: surveyT.grow(testData).getData()[0].questions };
survey.intro = testData[0].intro;
survey.goal = testData[0].goal;
survey.endMessage = testData[0].endMessage;
export default survey;
<img src="http://chaos.echo19.com/images/email/echo19logo_blue_text_no_backgroundX200.png" width="200px">
# echo19 web survey 
[repo] by [kridlet]

echo19, a progressive political communications and research platform, conducts large scale surveys via automated and live phone interviews, and large scale survey recruitment via distributed human SMS delivery.

Currently, SMS survey recruitment is for 3rd party survey instruments. In order to facilitate a tighter integration with the existing echo19 suite of research tools, I will create the echo19 web survey.

echo19 web survey will integrate the existing echo19 PHP/Yii/MySQL survey design, list management, and scheduling features with a new SMS recruitment and survey delivery system built using Node.js, Express.js, React, and Sequelize. handle individualized link generation,  is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

### Existing Elements
  - MySQL database running on AWS RDS
  - PHP/Yii running on AWS EC2 autoscaled instances behind Elastic Load Balancer
  - AWS Route53 DNS

### New Elements (and how they will integrate)
  - AWS Lambda
    * This will host new Node/Express/Sequelize code that fetches and displays survey questions and answer choices, and stores survey response information in the MySQL database. 
  - Elastic Load Balancer routes for Lambda functions.

### New Technologies Employed
* [React] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

### Todos
 - Create React components for survey delivery
 - Create Sequelize queries for survey data retreival
 - Create Node/Express routes for survey data input/output
 - Create Twilio SMS Copilot messageing service

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [kridlet]: <https://github.com/kridlet/echo19-web-servey/>
   [repo]: <https://github.com/kridlet/echo19-web-servey.git>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [React]: <http://reactjs.org>
   

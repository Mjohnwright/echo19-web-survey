<img src="http://chaos.echo19.com/images/email/echo19logo_blue_text_no_backgroundX200.png" width="200px" />

# echo19 web survey

echo19, a progressive political communications and research platform, conducts large scale surveys via automated and live phone interviews, and large scale survey recruitment via distributed human SMS delivery.

Currently, SMS survey recruitment is for 3rd party survey instruments. In order to facilitate a tighter integration with the existing echo19 suite of research tools, this echo19 web survey platform will directly host surveys. This will allow partners to conduct research using automated telephony, live-operator phone, and web survey all withiin the same, familiar platform.

echo19 web survey will integrate the existing echo19 PHP/Yii/MySQL survey design, list management, and scheduling features with a new SMS recruitment and survey delivery system built using PHP, Node.js, Express.js, and React.

### Existing Infrastructure
  - MySQL database running on AWS RDS
  - PHP/Yii running on AWS EC2 autoscaled instances behind Elastic Load Balancer
  - AWS Route53 DNS

### New Infrastructure
  - AWS Lambda
    * This will host new Node/Express/Sequelize code that fetches and displays survey questions and answer choices, and stores survey response information in the MySQL database. 
  - Elastic Load Balancer routes for Lambda functions.

### New Technologies Employed
* [React] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

### Wireframes
<img src="http://chaos.echo19.com/images/email/mobile-screens.png" width="400px" />

### Todos
 - Create React components for survey delivery
 - Create Sequelize queries for survey data retreival
 - Create Node/Express routes for survey data input/output
 - Create Twilio SMS Copilot messageing service

### Authors
[kridlet]

### Repo
[repo]

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [kridlet]: <https://github.com/kridlet/echo19-web-servey/>
   [repo]: <https://github.com/kridlet/echo19-web-servey.git>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [React]: <http://reactjs.org>
   

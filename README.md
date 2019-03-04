# Quiz-Bro
Create a quiz app that keeps track of players scores in a database. The game will ask 5 random questions.

Task: Create a quiz application (questions about animals) that keeps track of the player scores
in a database. The game will ask the user 5 random questions.
Build Specifications:
Server Side
1. Start off by creating an Express server.
2. In pgAdmin create the following items:
a. A database called ultimatequiz and two tables called questionlist and
scores .
b. questionlist - columns: id , question , choice_one, choice_two,
choice_three, choice_four, and answer
c. scores - columns: id , player_name , and score
d. Create 20 sets of questions/answers to the table.
3. Create two routing files:
a. questions.routes.js - Contains an endpoint to GET the list of questions from
the database and sends them to the front-end.
b. scores.routes.js - Contains endpoints to GET scores and POST new scores.
4. Create the connection.js file that will contain the credentials to communicate with
the database.
5. Test your endpoints with Postman.
6. Set up the server to host the public directory.
Client (Angular) Side
1. Create a server called QuizService that contains three methods:
a. addScore - Take a guess at what this will do.
b. getScores - Take a guess at what this will do.
c. getQuestions - Take a guess at what this will do.
2. Create two components:
a. quiz - Displays 5 random questions that the player can answer.
Use radio buttons or inputs to collect the answer from the player.
Upon completing the quiz, send the player’s answers to a service which will
calculate the total score, POST the score to the server, and direct the player to
the scores route.
b. scores - Displays a list of the top 10 scores from the database. This includes the
score and the player’s name who obtained the score.
4. Set up routing to allow the player to navigate between the scores and quiz routes.

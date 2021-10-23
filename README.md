# Shakers-challenge

## Table of Contents
1. [General Info](#general-info)
2. [Installation](#installation)
3. [Technologies](#technologies)
4. [Comments](#comments)

## General Info

This project is a replica of the classic **Tic-Tac-Toe** game.  
You play with **Player X**, and you will play against a IA, **Player O**.  
The objective of the game is to fill a 3x3 board until there are 3 tiles of the same player in line (in which case that player would win the game) or until the board is filled (in that case, it will be a draw and no one will win).  
It is played in turns and in each turn the player will place a token on an empty square of the
board with the objective of making 3 in a row.

On the bottom of the board you can see the turn of the player and the result of the game. Also you can see the winning score of each player. If you want more detailed ranking with the scores you can press 'Show ranking' button.

### Screenshots

![Game screen](https://i.ibb.co/P9B6KMn/Captura-de-pantalla-2021-10-23-a-las-17-45-49.png)
![Ranking screen](https://i.ibb.co/s57b3sN/Captura-de-pantalla-2021-10-23-a-las-17-45-55.png)

## Installation

Follow the next steps to run the project on your computer:
- Clone the project repository and open it on your code editor.
- Open your terminal and go to client folder to install dependencies with `npm i`. Do the same with server folder.
- **Build** your own .env file for client and server folders following the .env.example model.
- Run the project with `npm start` in two terminals, one for the client and the other for the server.
- Now you are ready to play!

To run the tests for the client and the server use `npm test` command for each one.

## Technologies

A list of technologies used within the project:
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://www.w3.org/html/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org)
* [Node.js](https://nodejs.org)
* [Express](https://expressjs.com)
* [Mongo](https://www.mongodb.com/)
* [Sass](https://sass-lang.com)
* [Jest](https://jestjs.io)

## Comments

If you want to implement a button to restart the game and the ranking you can create a button near 'Show ranking' button called 'Restart game'. For the functionallity of the button you just should call to reset function and dispatch createRanking function.
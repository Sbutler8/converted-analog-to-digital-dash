# Converted Analog To Digital Dash
![alt text](https://raw.githubusercontent.com/Sbutler8/converted-analog-to-digital-dash/db/final_fav.jpg.png)

This application is for users who love the latest and greatest trends in today's automotive industry. I have had a dream of converting my old 1988 Mazda's analog dashboard into a digital touch screen. This app is meant to mimic the conversion of an older cars analog dashboard to that of a newer digital dashboard. In order to do so realistically one would connect a raspberryPi and Arduino to the On Board Diagnostics (OBD) Port in their car via serial cable. Nearly every car made after 1996 has an OBD2 port which can send parameter IDs, making it possible to extract human-readable data from your car such as speed, RPM, throttle position, and much more.

Ideally, this custom app will be robust enough to take in any cars serial data and parse it into meaningful signals and data displayed on a new digital touch screen no matter how old the car. With that being said, in order to narrow down the complexity and get a feel for the application in full I have "mimicked" some of the signals a car might emit using the Arduino Uno microcontroller. The hardware connected to the Arduino is reading serial data in real time and sending it to the current dashboard display. Want to give it a spin? Check out the wiring diagram found on the next page. Don't have the hardware? Don't worry I have created full-blown functionality through just the web-app itself.

## Technologies

#### Front End

<a href="https://www.javascript.com/"><img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" /></a>
<a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
<a href="https://redux.js.org/"><img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" /></a>
<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=React-Router&logoColor=white" /></a>
<a href="https://developers.google.com/maps"><img alt="Google Maps" src="https://img.shields.io/badge/-Google%20Maps-4285F4?style=flat-square&logo=Google%20Maps&logoColor=white" /></a>

#### Back End

<a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
<a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
<a href="https://www.postgresql.org/"><img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white" /></a>
<a href="https://aws.amazon.com/"><img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon%20AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white" /></a>

#### Deployment and Package Management

<a href="https://docker.com/"><img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" /></a>
<a href="#"><img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" /></a>
<a href="https://www.npmjs.com/"><img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" /></a>
<a href="https://heroku.com/"><img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" /></a>

## Features

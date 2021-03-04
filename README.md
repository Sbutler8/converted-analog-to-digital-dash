[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!--ReactSkipperStart -->

<br />
<p align="center">
  <a href="https://analog-to-digital-dash.herokuapp.com/">
    <img src="https://raw.githubusercontent.com/Sbutler8/converted-analog-to-digital-dash/db/final_fav.jpg.png"  alt="Logo" width="auto" height="120">
  </a>
  
<h1 align="center"> Converted Analog To Digital Dash </h1>

This application is for users who love the latest and greatest trends in today's automotive industry. I have had a dream of converting my old 1988 Mazda's analog dashboard into a digital touch screen. This app is meant to mimic the conversion of an older cars analog dashboard to that of a newer digital dashboard. In order to do so realistically one would connect a raspberryPi and Arduino to the On Board Diagnostics (OBD) Port in their car via serial cable. Nearly every car made after 1996 has an OBD2 port which can send parameter IDs, making it possible to extract human-readable data from your car such as speed, RPM, throttle position, and much more.

Ideally, this custom app will be robust enough to take in any cars serial data and parse it into meaningful signals and data displayed on a new digital touch screen no matter how old the car. With that being said, in order to narrow down the complexity and get a feel for the application in full I have "mimicked" some of the signals a car might emit making this an integrated systems project using the Arduino Uno microcontroller. The hardware connected to the Arduino is reading serial data in real time and sending it to the current dashboard display. Want to give it a spin? Check out the wiring diagram found on the next page. Don't have the hardware? Don't worry I have created full-blown functionality through just the web-app itself. Feel free to check out the live site [here](https://analog-to-digital-dash.herokuapp.com/).

### Built With

#### Front End

<a href="https://www.javascript.com/"><img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" /></a>
<a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
<a href="https://redux.js.org/"><img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" /></a>
<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=React-Router&logoColor=white" /></a>
<a href="https://developers.google.com/maps"><img alt="Google Maps" src="https://img.shields.io/badge/-Google%20Maps-4285F4?style=flat-square&logo=Google%20Maps&logoColor=white" /></a>
<a href="https://devdocs.io/css/"><img alt="CSS3" src="https://img.shields.io/badge/-CSS3%20-61DAFB?style=flat-square&logo=CSS3&logoColor=white&color=brightgreen"/></a>
<a href="https://devdocs.io/html/"><img alt="HTML5" src="https://img.shields.io/badge/-HTML5%20-61DAFB?style=flat-square&logo=HTML5&logoColor=white&color=blue"/></a>

#### Back End

<a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
<a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
<a href="https://www.postgresql.org/"><img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white" /></a>
<a href="https://aws.amazon.com/"><img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon%20AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white" /></a>
<a href="https://flask-socketio.readthedocs.io/en/latest/"><img alt="Flask SocketIO" src="https://img.shields.io/badge/Flask%20SocketIO-Flask%20SocketIObrightgreen" /></a>
<a href="https://socket.io/docs/v3/index.html"><img alt="socket.io" src="https://img.shields.io/badge/socket.io-socket.io-red" /></a>

#### Deployment and Package Management

<a href="https://docker.com/"><img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" /></a>
<a href="#"><img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" /></a>
<a href="https://www.npmjs.com/"><img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" /></a>
<a href="https://heroku.com/"><img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" /></a>


### Installation

1. Clone the repo `git clone https://github.com/Sbutler8/converted-analog-to-digital-dash.git`
2. Create root .env file based on example .env-example file `touch .env`
3. Create frontend .env file based on example .env-frontend-example `cd react-app/ && touch .env`
4. Install backend dependencies `cd converted-analog-to-digital-dash/react-app/ && pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
5. Install frontend dependencies `cd ../react-app && npm install`
6. Start virtual environment in frontend `cd .. && pipenv shell`
7. Apply the migration to the database `flask db upgrade`
8. Seed the database `flask seed all`
9. Start backend `flask run`
10. Open new terminal and start frontend `cd ../react-app && npm start`
11. Open browser to http://localhost:3000/

### Features
#### 1. Display the following live serial data:
   * speed in [mph]
   * warning gas light
   * warning lights on light
   * warning low oil light
   * warning battery light
   * warning check engine light
#### 2. The ability to upload user profile photos and an image of their car using AWS S3 third party API
#### 3. Live geolocation services pinpointing where the user is in real time using Google Maps API
#### 4. On Board Diagnostic Parameter IDs (OBD PIDs) lookup to decode what the error code your car is throwing means. Used implementing IBM's Car API.
#### 5. The ability to change which car you are driving with customized pre-filled fields when performing PID code lookups.
![Alt text](https://github.com/Sbutler8/converted-analog-to-digital-dash/blob/main/react-app/public/solo_project_2_screen_recording.gif)

[contributors-shield]: https://img.shields.io/github/contributors/Sbutler8/converted-analog-to-digital-dash.svg?style=for-the-badge
[contributors-url]: https://github.com/Sbutler8/converted-analog-to-digital-dash/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Sbutler8/converted-analog-to-digital-dash.svg?style=for-the-badge
[forks-url]: https://github.com/Sbutler8/converted-analog-to-digital-dash/network/members
[stars-shield]: https://img.shields.io/github/stars/Sbutler8/converted-analog-to-digital-dash.svg?style=for-the-badge
[stars-url]: https://github.com/Sbutler8/converted-analog-to-digital-dash/stargazers
[issues-shield]: https://img.shields.io/github/issues/Sbutler8/converted-analog-to-digital-dash.svg?style=for-the-badge
[issues-url]: https://github.com/Sbutler8/converted-analog-to-digital-dash/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/samantha-butler-410675178/

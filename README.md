<div align="center">
    <h1>Burgers On You<h1>
</div>

Burgers on you is a food ordering application mostly based on burgers made with react , redux and firebase ..

The app is deployed at http://localhost:3001/
This application i used JIRA https://acunetix-test.atlassian.net/jira/software/projects/BOY/boards/1

# Running the project locally

Download this repository and then on the root folder run

```bash
npm install
```
This will install all dependencies ... then run ....

```bash
npm start
```

This will start the development server at port 3000

If you want to use your own database then go to **axios-orders.js** on **src** folder in root folder and change baseUrl there ... Or more precisely , this file : https://github.com/NSBM-SPM-2021/github-basics-prushothman/blob/master/src/axios-orders.js...
               

This project uses firebase realtime database...

# Features
* You basically build a burger and order it..
* You can check you orders. 
* You can order premade burgers.
* authentication with firebase auth

# Screenshots

![GIF showing core parts of the app](https://github.com/grapeJUICE1/burgers-on-you/blob/master/screenshots/main.gif?raw=true)

#### Home page
![home page of the app](https://github.com/grapeJUICE1/burgers-on-you/blob/master/screenshots/home.PNG?raw=true)

#### orders page
![orders page of the app](https://github.com/grapeJUICE1/burgers-on-you/blob/master/screenshots/orders.PNG?raw=true)

#### checkout page
![checkout page of the app](https://github.com/grapeJUICE1/burgers-on-you/blob/master/screenshots/checkout.PNG?raw=true)

#### login/signup page
![login/signup page of the app](https://github.com/grapeJUICE1/burgers-on-you/blob/master/screenshots/auth.PNG?raw=true)

#### readymade burgers page
![readymade burgers page of the app](https://github.com/grapeJUICE1/burgers-on-you/blob/master/screenshots/premad.PNG?raw=true)

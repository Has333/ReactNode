# ReactNode

## About

This project is a simple fullstack application whose purpose is to practice my skills as a developer mainly with React and it's technologies, it works by creating a interface integrating a CRUD API, with a React frontend where you can mantain and manage a MongoDB database for a list of users and their information.

## Configuring and running the project

First, we start by downloading our project on our machine using Git, be it either with HTTP by running

```
git clone https://github.com/Has333/ReactNode.git
```

Or SSH 

```
git clone git@github.com:Has333/ReactNode.git
```

on our OS main terminal.

Afterwards, we have to install both our frontend and backend dependencies, we can do so by opening our newly downloaded project with our IDE of choice and then opening an integrated terminal both on "AppFront" and "AppServer" (or doing so directly from our terminal) and running on each of them:

```
npm install
```

Then, we have to configure our environment files both on the frontend and backend.

## Server Environment Variables

```
PORT = { Any free port on your machine }
apiURL = { Here, you can set the apiURL as http://localhost since we are hosting the API }
DB = { Insert Your MongoDB Atlas Database Instance URL here }
```

## Frontend Environment Variables

```
VITE_APIURL = { Here, we should use both our server apiURL and PORT to consume our API data, e.g http://localhost:5000 }
```

After installing all required dependencies and configuring our environment variables, we can run the project by opening a terminal both for "AppFront" and "AppServer" and running on each of them:

```
npm run dev
```

to run the project with nodemon

or

```
npm run start
```
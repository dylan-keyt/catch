# Catch Code Challenge

## Introduction
This is a code challenge I'm working on for Catch as part of the application process.

Included in this README are instructions for running the application and unit tests, as well as a development log to showcase my progress and thinking throughout the challenge.

If you'd like to see a breakdown of tasks, [please view my Trello Board here](https://trello.com/b/glL33Pdm).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions
### Running the app
1. Run `npm install` to install all required dependencies.
2. Run `npm start` to run the app in development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running the tests
1. Run `npm test` to launch the test runner.
2. Once the menu appears in the console, press `a` to run all tests.

## Development Log
### Day 0 - Morning
I took some time to prepare my working environment for this project.

First, I set up the Trello board and broke down each component into subtasks. After that, I had a quick look at React boilerplate code templates and settled on the tried-and-true [Create React App](https://github.com/facebook/create-react-app), as it includes Jest and I know that unit test coverage is going to be very important for this project.

I had some issues with npm and found that there was an issue with my registry settings, but everything is now installed, fixed, and up to date. I linked this repo to my GitHub account and created some folders for organising the app structure.

I originally intended to use the React Context API for managing state, but as I was mapping out the app structure on some paper I've decided to just use [state hooks](https://reactjs.org/docs/hooks-state.html) and keep it simple.

Anyway, this app creation process and planning took about an hour. I will be recording my time from the moment I start coding via the [pomodoro method](https://chrome.google.com/webstore/detail/marinara-pomodoro%C2%AE-assist/lojgmehidjdhhbmpjfamhpkpodfcodef?hl=en); I've found it really useful for tracking time and staying focused while I've been working from home.

For context, one pomodoro is about 25-30 minutes, and then I take a 5-15 minute break depending on the schedule.

I look forward to starting the code challenge tomorrow.

### Day 1 - Morning
I have completed the basic app structure with the components that I need, using a state hook in the root of the application and the context API to update and share the state amongst components. I'm sure there's a better way to do this, so I'll prioritise looking into it later. All things considered, I'm pretty happy to have gotten this far as this is the first time I'm using Context. It's a classic example of "once you learn it, it's not that difficult".

Next, I'm going to get the API call working so I can get all the products and display them in the ProductList with ProductTile components. After that's looking good, I plan to configure the sorting methods. By the end of the day, I hope to have completed most of the styling.

At this rate, I'll probably make a start on the unit tests tomorrow.

#### Time spent so far: 4 pomodoros (~2 hours)

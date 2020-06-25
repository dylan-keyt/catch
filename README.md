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

### Running the tests without console errors
1. Run `npm run test:suppress-errors` to launch the test runner.
2. Once the menu appears in the console, press `a` to run all tests.

## Design decisions and implementation
### State management
I originally was going to keep the state management implementation very simple and just use a root state in the App component, but this quickly proved to unscalable and clunky; callback hell. After hearing about Context many times in the past and how it can be used as a replacement for libraries such as Redux, I decided to use it for the first time in this project.

I researched and learnt about good design patterns [from this article](https://kentcdodds.com/blog/how-to-use-react-context-effectively), and was able to create context files for product and sort, using them throughout the application.

### Testing
It was my first time using react-testing-library. For ease of use, I found a package called [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock) which will mock the fetch API in tests by default. We probably want to be doing this in tests rather than attempting to call the actual endpoints anyway.

If I could improve a single test, it would be the test for ProductList. I wanted to take advantage of react-testing-library and the Context API, and render some sample ProductTile components that I expect `toBeInTheDocument`. Unfortunately, I wasn't able to do this in a timely manner, and it's likely due to a flawed component structure. As a compromise, I mocked the product actions and checked that they were being called as per `useEffect`. So at least the test was able to test something useful.

### Components
The DropDown component is an example of a generic component that could be imported from a component library and have all behaviour and relevant data passed down as props.

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

### Day 1 - Afternoon
I encountered a tricky CORS issue that was preventing me from proceeding, so after some searching I found a temporary, non-production resolution involving a proxy which lets me use the data from the Catch endpoint.

Unfortunately, I had a lot of disruptions this afternoon so I wasn't able to complete as much as I'd liked to today. I have reached the recommended 4 hour capacity of this coding challenge, but was told that there is no time limit and I knew I'd need more time anyway.

Tomorrow I will focus on styling and code cleanup, then start the unit tests if I have time.

#### Time spent so far: 8 pomodoros (~4 hours)

### Day 2 - Morning
I decided to start on the unit tests as they would be more time consuming, and as I was going through the various files I did some minor refactoring. When I arrived at the tests for SortContext, it became clear to me that what I had done was a hack and not the right way to use Context. So I read [this article](https://kentcdodds.com/blog/how-to-use-react-context-effectively), followed the examples and created a much more robust solution.

There's more code which means more tests will be required, and it's apparent I need to do this for storing the product data as well. But overall, this is a much better structure for centralising app-centric data that will be shared across components. As a bonus, I learnt of a much better way of using Context and the action/reducer pattern is very familiar to me which made it a bit easier to pick up.

This afternoon, I will refactor the product and sorting method, then continue on with unit tests.

#### Time spent so far: 12 pomodoros (~6 hours)

### Day 2 - Afternoon
Refactor complete. I learnt more about custom hooks and how/where they can be used. The project structure is now in a good state, so it's just a matter of adding all remaining unit tests and CSS styles, followed by a final code cleanup.

I expect to keep working on this for the next couple of days. This project has taken longer than I anticipated, but it's been a good exercise for learning and practicing things I haven't used before. Even the methodology behind react-testing-library has been good to pick up.

#### Time spent so far: 16 pomodoros (~8 hours)

### Day 2 - Evening
A shorter session to round off the day. I was able to add some more unit tests, which means there won't be much left to do tomorrow.

At this stage, I'm confident that I will finish the tests tomorrow morning, and then I can move onto the CSS.

#### Time spent so far: 18 pomodoros (~9 hours)

### Day 3 - Night
I decided to use eslint so I wouldn't have to worry about formatting everything at the last minute. After reviewing the specifications again, it seems that I missed a requirement about the metadata appearing in the header. This won't be difficult as I've already set up the API call, just need to handle it and add tests of course.

#### Time spent so far: 20 pomodoros (~10 hours)

### Day 4 - Morning
I spent way too long on writing a good test for ProductList. I understand that the philosophy behind react-testing-library is just to test what you need, whatever's most useful to the user. I was having a lot of trouble with the async calls to getProducts, and unfortunately had to cut it short and mock those calls instead. In a real-world scenario, I would just ask someone about the best way to test what I have written.

I'll proceed with the unit tests, and add the metadata handler when I get up to that part.

#### Time spent so far: 24 pomodoros (~12 hours)

### Day 4 - Afternoon
I'm relieved to have finished the unit tests, and can now proceed with confidence. It gave me a chance to perform some refactors across the application, both big and small. Looking back, I can see some improvements that can be made throughout such as moving the metadata handler into its own context, or remove the sort context as it's just holding a single value. I'll keep them as-is for this project as it ended up being a good learning experience and opportunity to work with custom hooks.

The main part to work on now involves styling the application. Hopefully I will finish this tomorrow and submit the project in time for the weekend.

#### Time spent so far: 30 pomodoros (~15 hours)

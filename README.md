# **Luster** - An Introduction
**Luster** is a dating app created for the 2022 ShellHacks hackathon. 
I participated in a group of 5 programmers (myself included) to see what we could come up with in 48 hours.
Since the project was an extremely ambitious idea for a hackathon, we were not able to finish everything we hoped to achieve with it.
However, we may continue developing it in the future for the sake of completeness.

( Insert Pictures Here )

Our goal for the hackathon was to create *something* while also learning some new skills.
We came up with a variety of really interesting ideas, but we chose this dating app because it was something that was out of everyone's comfort zones.
None of us had any experience with the underlying technologies we used to make it. Some of us didn't even have any JavaScript experience!
Because of this, a good chunk of the time during the hackathon was spent learning the technologies, but that in itself was useful for us too.
While this limitation did restrict how much we could achieve during the hackathon, it did mean that the team members got more value out of the experience.

We chose to make the frontend with **React**. React is a very popular and well-documented front-end framework that none of us had any experience in.
The main advantage of React over some of the other front-end libraries is its relative ease of use. By choosing React over other libraries,
we cut down on the time needed to learn the essentials so we could get into coding faster.

For the backend, we chose **Express** with NodeJS. Similarly to React, we chose Express because it was very simple to get a basic HTTP server running for use
as the backend of our project. We wanted to reduce the amount of time learning how to do the backend, so we chose Express to allow us to focus specifically on 
NodeJS and not "NodeJS plus some backend library". 

# The Technical Stuff
## How to Set up Local Environment for Project
1. Make a clone of this repository on your local machine.

`git clone https://github.com/Zgell/slayqueen.git`

2. Make sure that you have NPM and NodeJS installed on your system. To check this, type `npm --version` and/or `node --version`. If version numbers come up, then the tools are installed on your system.

3. Install the dependencies for the project by going into the `server/` folder and doing the following:

`npm i`

This installs all NodeJS dependencies for the server (namely Express).

4. Now, go into the `client/` folder and do the same thing.

`npm i`

This installs React and its dependencies so that the frontend can render correctly.

**NOTE**: DO NOT COMMIT ANY "node_modules" FOLDERS TO THE REPO! They are intended not to be added to the repository, but you need them to run the project. If for whatever reason you are missing these files, repeat Step 3 in the setup process above.



## How to Run the Project
1. In one terminal tab, navigate to the `server/` folder and run `npm start`. This will initiate the backend component of the project on port 3001 on localhost.
2. In another terminal tab, navigate to the `client/` folder and run`npm start`. This will run the frontend component of the project. This should automatically open up the project in the browser, but if not, navigate to `http://localhost:3000` in your browser.
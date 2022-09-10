# slayqueen
Dating app project for the 2022 ShellHacks hackathon.

# How to Set up Local Environment for Project
1. Make a clone of this repository on your local machine.

`git clone https://github.com/Zgell/slayqueen.git`

2. Make sure that you have NPM and NodeJS installed on your system. To check this, type `npm --version` and/or `node --version`. If version numbers come up, then the tools are installed on your system.

3. Install the dependencies for the project by going into the `server/` folder and doing the following:

`cd server`
`npm i`

This installs all NodeJS dependencies for the server (namely Express).

4. Now, go into the `client/` folder and do the same thing.

`cd ../client`
`npm i`

This installs React and its dependencies so that the frontend can render correctly.

**NOTE**: DO NOT COMMIT ANY "node_modules" FOLDERS TO THE REPO! They are intended not to be added to the repository, but you need them to run the project. If for whatever reason you are missing these files, repeat Step 3 in the setup process above.



# How to Run the Project
1. In one terminal tab, navigate to the `server/` folder and run `npm start`. This will initiate the backend component of the project on port 3001 on localhost.
2. In another terminal tab, navigate to the `client/` folder and run`npm start`. This will run the frontend component of the project. This should automatically open up the project in the browser, but if not, navigate to `http://localhost:3000` in your browser.
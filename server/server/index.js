/* Setup Process */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

// Set up the BodyParser library, used to extract the body from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
/* The following lines are ESSENTIAL! Will not work without them, but I do not understand why. -Z */
// Force Express to rebrand JSON packets as plaintext.
app.use(express.json({
    type: ['application/json', 'text/plain']
}))



/* Server Process (begins listening for POST requests and hosting the server) */

// Load in accounts from JSON
accountIDs = new Set();  // Stores the UIDs of accounts registered
accountInfo = {};  // Unordered map that maps an ID to the rest of the account info
rawAccountData = fs.readFile("accounts.json");  // Performed asynchronously!


app.post("/api", (req, res) => {
    console.log('API request received!', req.body);
    console.log(req.body)
    res.json({ message: "Hello from server!" });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
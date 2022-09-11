const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
/* The following lines are ESSENTIAL! Will not work without them, but I do not understand why. -Z */
app.use(express.json({
    type: ['application/json', 'text/plain']
}))

numberOfPackets = 0;

app.post("/api", (req, res) => {
    numberOfPackets++;
    console.log('API request received! Total packets so far: ', numberOfPackets);
    console.log(req.body)
    res.json({ message: "Hello from server!" });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
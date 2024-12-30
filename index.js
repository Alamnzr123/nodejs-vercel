const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));


app.get("/hello", (req, res) => res.send("Hello Express!"));

app.get("/incoming-request", (req, res) => res.send("Request Allow!"));


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
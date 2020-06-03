/*
    Node is still using CommonJS for its modules 
    (the old way of doing it that we refactored before.) 
    That's why we're using require.
*/
// const http = require("http");

/** 
 * @param req parameter represents all the information coming from the user. 
 * You can see what URL they used to request, what parameters they sent you, what headers 
 * (headers are meta data that your browser sends with each request, like if you want the response to be in English, Spanish, etc.)
 * they used, etc.
 * 
 * @param res paramenters represents what you want to send back for the request. 
 * Here you can set your own headers, set cookies 
 * (cookies are bits of information that the client and server pass back-and-forth to each other so you can keep track of who the client is,) 
 * the HTTP status code 
 * (404 is a status code that means not found; there are many like 200, 302, 403, 500, etc.), 
 * and what the response body should be.
 */
// const server = http.createServer(function(req, res) {
//   console.log(`user visited ${req.url}`);
//   res.end("hello!"); // called at the end to let the server know you're done
// });

// console.log("listening on http://localhost:3000");
// server.listen(3000); // you tell the server to actually start up and start listening for requests

// ---USING EXPRESS---
const express = require("express")

const path = require("path")

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
]

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length)
    return complements[randomIndex]
}

const app = express()

/**
 * Route to particular URL
 * @param req url
 * @param res callback
 */
app.get("/", function(req, res){
    // res.end("Welcome to my site!")
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/complement", function(req, res) {
    // res.end("You look nice today")
    res
    .json({
        complement: getRandomComplement()
    })
    .end()
})

app.use("/public", express.static("./public"))

app.listen(3000)
console.log("listening on http://localhost:3000")
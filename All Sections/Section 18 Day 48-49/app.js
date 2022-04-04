// const http = require("http");

// function handleRequest(request , response){

//   if(request.url === "/currenttime"){
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   }
//   else if(request.url === "/"){
//     response.statusCode = 200;
//     response.end("<h1>First Server</h1>");  
//   }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);

// Defining functions like above can go very difficult to handle.

const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}))

// by this we are specifying the endpoints of the api.
// and we can define the function directly here. An anonymous function.
// this function won't be executed at the time of compilation, as it is an anonymous function.
// It will be called by the server.

app.get("/currenttime" , function(request , response){
  // as we are using express, so here the request and the response objects will be created by express
  // And therfore methods inside request and response object will be different as compared to 
  // one that was created by http

});

app.get("/" , function(req , res){
  // action -> the URL to which the request will go when the form is submitted
  // method -> Whether POST or GET
  res.send("<form action='/store-user' method='POST'> \
              <label>Your Name</label> \
              <input type='text' name='username'> \
              <button type='submit'>Submit</button> \
              </form>")
})

// now we have to handle the POST request
app.post("/store-user" , function(req , res){
  const userName = req.body.username;
  console.log(userName);
  
  // in this we have to define the absolute path
  // so for this we have to get the folder path first, and we can do this with
  // __dirname
  // the below path will be :- folder/data/users.json
  const filePath = path.join(__dirname , "data" , "users.json");

  // this data will not be any JS object but instead it is simple text
  const fileData = fs.readFileSync(filePath);

  // JSON.parse() will convert the text into JS object
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  // JSON.stringify() -> it will convert the JS object into text that will follow JSON format
  fs.writeFileSync(filePath , JSON.stringify(existingUsers));

  res.send("User is stores Successfully");
})

app.get("/users" , function(req , res){
  const filePath = path.join(__dirname , "data" , "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ol>";
  for(const user of existingUsers){
    responseData += "<li>" + user + "</li>";
  }
  responseData += "</ol>";


  res.send(responseData);
})

app.listen(3000);


// cmd + .  -> will quit the current running process
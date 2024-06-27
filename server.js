const http = require("http");
const port = 8081;
//port varaible
//selection of port also depends on accesibility is it free or not

//in a server u r capable of getting request and response
//so her are request parameter and response parameter

// Create an HTTP server instance
const server = http.createServer((request, response) => {
  // Set the HTTP response header with status code 200 and content type text/html
  //someone try to access your server on internet we try to send them response
  response.writeHead(200, { "Content-Type": "text/html" });

  // Write a simple HTML response
  response.write("<h1>Hello Practice server</h1>");

  // End the response
  response.end();
});

// Start the server and listen on the specified port
//port where u want your application to start or the server to communicate
//chaining or promises
server.listen(port, () => {
  console.log(`Node.js server started at port ${port}`);
  //This will only run when ur server is sucessfuuly created
});

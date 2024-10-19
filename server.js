const http = require('http'); // Imports the built-in 'http' module for creating an HTTP server.
const fs = require('fs'); // Imports the built-in 'fs' module for file system operations (like reading files).
const path = require('path'); // Imports the built-in 'path' module to work with file paths.
const PORT = 3000; // Defines the server port number (3000).

// Creates the HTTP server.
const server = http.createServer((req, res) => {
    // Handles requests for the '/home' URL.
    if (req.url === '/home' || req.url === '/') {
        const serverFile = path.join(__dirname, 'index.html'); // Sets the path for 'index.html'.
        
        fs.readFile(serverFile, (err, data) => { // Reads the 'index.html' file.
            if (err) { // If an error occurs, sends a 500 response with an error message.
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('internal server error');
                res.end();
            } else { // Sends the HTML file content with a 200 status.
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
        return;
    }

    // Handles requests for the '/about' URL.
    if (req.url === '/about') {
        const serverFile = path.join(__dirname, 'about.html'); // Sets the path for 'about.html'.

        fs.readFile(serverFile, (err, data) => { // Reads the 'about.html' file.
            if (err) { // If an error occurs, sends a 500 response with an error message.
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
            } else { // Sends the HTML file content with a 200 status.
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
        return;
    }

    // Handles requests for the '/contact' URL.
    if (req.url === '/contact') {
        const serverFile = path.join(__dirname, 'contact.html'); // Sets the path for 'contact.html'.

        fs.readFile(serverFile, (err, data) => { // Reads the 'contact.html' file.
            if (err) { // If an error occurs, sends a 500 response with an error message.
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('internal server error');
                res.end();
            } else { // Sends the HTML file content with a 200 status.
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
        return;
    }

    // Handles requests for the '/services' URL.
    if (req.url === '/services') {
        return res.end("<h1>Payment</h1>"); // Sends a simple HTML response with "Payment" message.
    }
});

// Starts the server and listens on port 5000.
server.listen(PORT, () => {
    console.log("server is running ...."+PORT); // Logs a message when the server is running.
});

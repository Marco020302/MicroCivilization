const http = require('http');
const express = require('express');
const path = require('path');
let app = express();
let server = http.createServer(app);

app.use(express.static("public"));
app.use(express.static("public/src"));

app.get("/", (req, res) => {
	res.redirect("/index.html");
});

let port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
	console.log('Server running on port:'+port);
});
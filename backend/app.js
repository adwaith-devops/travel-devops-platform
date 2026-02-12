const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Backend API Running");
    res.end();
});

server.listen(8080, () => {
    console.log("Backend running on port 8080");
});


const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Admin Panel Running");
    res.end();
});

server.listen(4000, () => {
    console.log("AppUI running on port 4000");
});


const http = require("http");

const server = http.createServer((req, res) => {
    res.write("WebUI Service Running");
    res.end();
});

server.listen(3000, () => {
    console.log("WebUI running on port 3000");
});


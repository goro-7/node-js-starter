import http from "http";

const port = process.env.port;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
});

server.listen(port, ()=>{
    console.info(`Server running at port ${port}`);
});
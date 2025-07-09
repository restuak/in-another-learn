import http, {IncomingMessage, ServerResponse} from "http";

const PORT = 8080;
const server = http.createServer(
    (req:IncomingMessage, res:ServerResponse) => { 
    if (req.url ==="/api" && req.method === "GET") {
        res.writeHead(200, {"content type": "application/json"});
        res.write("Ini API tanpa Framework");

        res.end();
    }
}
);

server.listen(PORT, () =>{
    console.log(`Server start on port ${PORT}`);
})
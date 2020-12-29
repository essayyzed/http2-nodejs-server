const http2 = require ("http2")
const fs = require("fs")

const server = http2.createSecureServer({
    "key" : fs.readFileSync("localhost-private.pem"),
    "cert" : fs.readFileSync("localhost-cert.pem")
})

server.listen(8443)
console.log("Listening on 8443");

server.on("stream", (stream, Headers) => {

    console.log(stream.id);

    stream.respond({ 
        "content-type": "application/json",
        "status" : 200


    })
    stream.end(JSON.stringify({
        "user":"ESSAYYZED",
        "id":"0034"
    }))
})

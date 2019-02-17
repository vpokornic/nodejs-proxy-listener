const http = require('http')
const port = 3000

const requestHandler = (req, res) => {
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);

    var msg = '[REQ] ' + new Date().toString().replace(/T/, ':').replace(/\.\w*/, '') + '\n' + ip + '\n';

    console.log(msg);
    res.end('Hello Node.js Server!\n' + msg);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
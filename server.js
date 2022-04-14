const net = require('net');
const fs = require('fs');

const server = net.createServer();
let client = '';

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');

  client.setEncoding('utf8');
  client.on('data', (fName) => {
    console.log('Message from client: ', fName);
    /* Get all the contents from a file */
    fs.readFile(fName, 'utf8', (err, data) => {
      if (!err)  {
        //if error, send error message
        console.log(`Sending contents of ${fName}...`);
        client.write(data);
      } else {
        //if file found, transmit contents
        console.log("File error - sending error message to client...");
        client.write(err.message);
      }
      return;
    });
  });
});


server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

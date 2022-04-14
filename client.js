const net = require('net');
const stdin = process.stdin;
const stdout = process.stdout;


const conn = net.createConnection({
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3000 // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

conn.on('data', (data) => {
  console.log('Server says: ', data);
  stdout.write("Filename: ");
});

// conn.on('connect', () => {
//   conn.write('I need a file please!');
// });

stdin.on('data', (input) => {
  //remove newline character from input
  let formatInput = input.toString().replace('\n', '');
  conn.write(`${formatInput}`);
});
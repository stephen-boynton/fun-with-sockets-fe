export default (socket, cb) => {
  const connection = socket('http://localhost:3001');
  connection.on('connection', cb(connection));
}
export default (socket, cb) => {
  const connection = socket('http://localhost:3001');
  return connection.on('connection', () => cb(connection));
}
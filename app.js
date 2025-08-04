const express = require('express');
const app = express();
const PORT = 3000; // Custom internal port

app.get('/', (req, res) => {
  res.send('Hello from Node.js Docker Compose app!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
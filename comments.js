// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comments array
const comments = [
  { name: 'John', comment: 'Hello' },
  { name: 'Amy', comment: 'Hi' },
  { name: 'Bob', comment: 'Howdy' }
];

// Add a route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


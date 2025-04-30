const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from multiple directories
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'mobile')));
app.use(express.static(path.join(__dirname, 'mobile/dynamic')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// /mobile/dynamic/default.html
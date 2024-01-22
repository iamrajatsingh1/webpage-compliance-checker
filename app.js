const express = require('express');
const bodyParser = require('body-parser');
const { handleComplianceCheck } = require('./controllers/compliance.controller');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/check-compliance', handleComplianceCheck);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Set X-Frame-Options to allow iframe embedding
app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'ALLOWALL');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Serve static files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
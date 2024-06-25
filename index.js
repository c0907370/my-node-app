const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// API routes
app.get('/api/data1', (req, res) => {
    res.json({ message: 'API endpoint 1' });
});

// Add more APIs as needed

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

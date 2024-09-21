const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the EJS page
app.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs file
});

app.get("/about-us", (req, res) =>{
    res.render('about-us')
})
//Define a route to render the EJS page
app.get('/contacts', (req, res) => {
    res.render('contacts');
});
//Define a route to render the EJS page
app.get('/causes', (req, res) => {
    res.render('causes'); // Render the index.ejs file
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
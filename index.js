import express from 'express';
import cors from 'cors';

const app = express();

// Add support for handling JSON requests
app.use(express.json());

// Add support for cross-origin requests
app.use(cors());

// Add endpoint to keep track of the fruit that were send to the backend
const fruit = [];
app.post('/', (req, res) => {
    fruit.push(req.body.fruit);
    res.send(fruit.join(","));
});

// Start the server
console.log("Server starting on http://localhost:3000");
app.listen(3000);
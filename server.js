const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const dbConfig = {
  host: 'localhost',
  user: 'Priyanshi2829',
  password: 'Priyanshi@28',
  database: 'tastebuddy_db'
};

// Helper function to connect to the database
const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Database connected');
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};

// Fetch all ingredients from the database
app.get('/api/ingredients', async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const [ingredients] = await connection.query('SELECT * FROM ingredients');  // Assuming you have an 'ingredients' table
    connection.end();
    res.status(200).json(ingredients);
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    res.status(500).json({ message: 'An error occurred while fetching ingredients' });
  }
});

// Fetch all recipes from the database
app.get('/api/recipes', async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const [recipes] = await connection.query('SELECT * FROM recipes');
    connection.end();
    res.status(200).json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'An error occurred while fetching recipes' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

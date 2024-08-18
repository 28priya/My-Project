import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pantry = () => {
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/ingredients')  // Adjust this path depending on your backend
            .then(response => setIngredients(response.data))
            .catch(error => console.error('Error fetching ingredients:', error));
    }, []);

    const handleSelect = (ingredient) => {
        setSelectedIngredients((prev) => {
            if (prev.includes(ingredient)) {
                return prev.filter(item => item !== ingredient);
            } else {
                return [...prev, ingredient];
            }
        });
    };

    const fetchRecipes = () => {
        const query = selectedIngredients.join(',');
        axios.get(`https://api.edamam.com/search?q=${query}&app_id=49b48cd4&app_key=9ccbf4b0d697d25d780bf842616b6ad0`)
            .then(response => console.log('Fetched Recipes:', response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    };

    const filteredIngredients = ingredients.filter(ingredient => 
        ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pantry-container">
            <div className="ingredient-box">
                <input 
                    type="text" 
                    placeholder="Search ingredients..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="search-bar"
                />
                <div className="ingredient-list">
                    {filteredIngredients.map((ingredient, index) => (
                        <div 
                            key={index} 
                            className={`ingredient-item ${selectedIngredients.includes(ingredient.name) ? 'selected' : ''}`} 
                            onClick={() => handleSelect(ingredient.name)}
                        >
                            {ingredient.name}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={fetchRecipes}>Fetch Recipes</button>
        </div>
    );
};

export default Pantry;

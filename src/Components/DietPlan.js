import React from 'react';
import '../css/DietPlan.css';

const DietPlan = () => {
  const dietPlans = [
    { name: 'Vegetarian Diet', link: 'https://www.foodnetwork.com/healthy/photos/healthy-vegetarian-recipes' },
    { name: 'Mediterranean Diet', link: 'https://www.themediterraneandish.com/best-mediterranean-diet-recipes/' },
    { name: 'Paleo Diet', link: 'https://www.delish.com/cooking/g4198/paleo-diet-recipes/' },
    { name: 'Low-carbohydrate Diet', link: 'https://www.bbcgoodfood.com/recipes/collection/low-carbohydrate-recipes' },
    { name: 'Atkins Diet', link: 'https://www.food.com/ideas/most-popular-atkins-recipes-6874#c-760887' },
    { name: 'Ketogenic Diet', link: 'https://www.bbcgoodfood.com/recipes/collection/ketogenic-diet-recipes' },
    { name: 'Dukan Diet', link: 'https://mydukandiet.com/recipes/' },
    { name: 'Gluten-Free Diet', link: 'https://www.bbcgoodfood.com/recipes/collection/gluten-free-recipes' },
    { name: 'The Zone Diet', link: 'https://zoneliving.com/blogs/recipes' },
    { name: 'The HCG Diet', link: 'https://cookpad.com/us/search/hcg' },
    { name: 'Low Fat Diet', link: 'https://www.bbcgoodfood.com/recipes/collection/low-fat-recipes' },
    { name: 'The Ultra-Low-Fat Diet', link: 'https://www.medindia.net/health/diet-and-nutrition/ultra-low-fat-diet.htm' },
  ];

  // Calculate the size of each quarter
  const quarterIndex = Math.ceil(dietPlans.length / 4);
  const firstQuarter = dietPlans.slice(0, quarterIndex);
  const secondQuarter = dietPlans.slice(quarterIndex, quarterIndex * 2);
  const thirdQuarter = dietPlans.slice(quarterIndex * 2, quarterIndex * 3);
  const fourthQuarter = dietPlans.slice(quarterIndex * 3);

  return (
    <div className="diet-plan-container">
      <div className="container mx-auto pt-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Diet Plans</h1>

        <div className="diet-plan-list">
          <div className="diet-plan-row">
            {firstQuarter.map((plan, index) => (
              <div key={index} className="diet-plan-item">
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                </a>
              </div>
            ))}
          </div>

          <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

          <div className="diet-plan-row">
            {secondQuarter.map((plan, index) => (
              <div key={index} className="diet-plan-item">
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                </a>
              </div>
            ))}
          </div>

          <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

          <div className="diet-plan-row">
            {thirdQuarter.map((plan, index) => (
              <div key={index} className="diet-plan-item">
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                </a>
              </div>
            ))}
          </div>

          <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

          <div className="diet-plan-row">
            {fourthQuarter.map((plan, index) => (
              <div key={index} className="diet-plan-item">
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;

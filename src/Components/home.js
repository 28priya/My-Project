import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading'; // Import the Loading component
import '../css/home.css';

const Home = () => {
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleRecipeButtonClick = () => {
    const section = document.getElementById("featuresSection");
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleCardClick = (path) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      navigate(path);
      setIsLoading(false); // Stop loading after navigation
    }, 1000); // Simulate a delay
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setIsLoading(true); // Start loading
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', formValues);
      setTimeout(() => {
        // Reset form after submission
        setFormValues({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setIsLoading(false); // Stop loading
      }, 2000); // Simulate a delay for form submission
    }
  };

  return (
    <div className="home-container">
      {isLoading && <Loading />} {/* Show loading spinner when loading */}
      <header className="home-banner">
        <h1 className="primary-heading">Welcome to Tastebuddy</h1>
        <button className="secondary-button" onClick={handleRecipeButtonClick}>
          “Good food is the foundation of genuine happiness.” – Auguste Escoffier 
        </button>
      </header>
      <main className="cards-container">
        <div className="card" onClick={() => handleCardClick('/diet-plans')}>
          <h2>Diet Plans</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('/explore')}>
          <h2>Explore Page</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('/pantry')}>
          <h2>Pantry</h2>
        </div>
      </main>
      
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At Tastebuddy, we believe that good food is the essence of a good life. Our mission is to bring you the best recipes and diet plans that not only tantalize your taste buds but also nourish your body and soul. Whether you're exploring new cuisines, planning a balanced diet, or organizing your pantry, we are here to guide you every step of the way.
        </p>
        <p>
          Good food is more than just fuel for your body; it's a way to connect with loved ones, explore cultures, and create lasting memories. Join us on this delicious journey and discover how you can enhance your life, one meal at a time.
        </p>
        <button className="primary-button" onClick={() => handleCardClick('/login')}>
          Learn More <FiArrowRight />
        </button>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formValues.name} 
              onChange={handleInputChange} 
              required 
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formValues.email} 
              onChange={handleInputChange} 
              required 
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </label>
          <label>
            Query:
            <textarea 
              name="message" 
              rows="1" 
              value={formValues.message} 
              onChange={handleInputChange} 
              required
            ></textarea>
            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
          </label>
          <button type="submit" className="primary-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'} <FiArrowRight />
          </button>
        </form>
      </section>
      
      <footer className="footer-section">
        <p>&copy; {new Date().getFullYear()} Tastebuddy. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

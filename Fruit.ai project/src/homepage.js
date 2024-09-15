import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-container">
            <h2>Welcome!</h2>
            <Link to="/chatbot">Chatbot</Link>
            <Link to="/translator">Translator</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default HomePage;

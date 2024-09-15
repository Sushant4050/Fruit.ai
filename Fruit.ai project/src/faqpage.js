import React, { useEffect, useState } from 'react';

const FaqPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [newFaq, setNewFaq] = useState('');

    const fetchFaqs = async () => {
        const response = await fetch('/faqs');
        const data = await response.json();
        setFaqs(data);
    };

    const addFaq = async () => {
        await fetch('/faqs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: newFaq }),
        });
        fetchFaqs();
    };

    useEffect(() => {
        fetchFaqs();
    }, []);

    return (
        <div className="faq-container">
            <h2>FAQs</h2>
            <input type="text" onChange={(e) => setNewFaq(e.target.value)} />
            <button onClick={addFaq}>Add FAQ</button>
            <ul>
                {faqs.map((faq) => (
                    <li key={faq.id}>{faq.question}</li>
                ))}
            </ul>
        </div>
    );
};

export default FaqPage;

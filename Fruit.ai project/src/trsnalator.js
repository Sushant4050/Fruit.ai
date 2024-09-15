import React, { useState } from 'react';

const TranslatorPage = () => {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = () => {
        // Translation logic here
        setTranslatedText(`Translated: ${text}`);
    };

    return (
        <div className="translator-container">
            <h2>Translator</h2>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleTranslate}>Translate</button>
            <p>{translatedText}</p>
        </div>
    );
};

export default TranslatorPage;

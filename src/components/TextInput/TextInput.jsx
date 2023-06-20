import React, { useState } from 'react';
import './TextInput.css';

const TextInput = ({ onCheck }) => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        onCheck(text);
    };

    return (
        <div className="text-input-container">
      <textarea
          className="text-input"
          onChange={handleTextChange}
          value={text}
          rows="4"
          cols="50"
          maxLength={1000}
      />
            <p>{text.length} / 1000</p>
            <br />
            <button className="check-button" onClick={handleSubmit}>
                Check Uniqueness
            </button>
        </div>
    );
};

export default TextInput;

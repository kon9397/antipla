import React, { useState } from 'react';
import './HistoryPage.css';

const HistoryPage = ({ history, setHistory }) => {
    const [filter, setFilter] = useState('all'); // 'all', 'unique', 'not-unique'

    const filteredHistory = history.filter(item => {
        if (filter === 'all') return true;
        if (filter === 'unique') return item.isUnique;
        if (filter === 'not-unique') return !item.isUnique;
    });

    const handleDelete = (indexToDelete) => {
        setHistory((prevHistory) => prevHistory.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="history-page">
            <h2>Check History</h2>

            <div className="filter-section">
                <label>
                    <input
                        type="radio"
                        value="all"
                        checked={filter === 'all'}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    All
                </label>
                <label>
                    <input
                        type="radio"
                        value="unique"
                        checked={filter === 'unique'}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    Unique
                </label>
                <label>
                    <input
                        type="radio"
                        value="not-unique"
                        checked={filter === 'not-unique'}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    Not Unique
                </label>
            </div>

            <ul className="history-list">
                {filteredHistory.map((item, index) => (
                    <li key={index}>
                        <strong>{item.timestamp}</strong>: {item.text} - {item.isUnique ? "Unique" : "Not Unique"}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default HistoryPage;

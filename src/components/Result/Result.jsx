import React from 'react';
import './Result.css';

function Result({ result }) {
    if (result === null) {
        return null;
    }

    return (
        <div className="result">
            <h3>Uniqueness: {result.uniquenessPercent}%</h3>
            {result.matchedSites.length > 0 && (
                <>
                    <p>Similar text found on:</p>
                    <ul>
                        {result.matchedSites.map((site, index) => (
                            <li key={index}>
                                <a href={site} target="_blank" rel="noopener noreferrer">{site}</a>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}


export default Result;

import React, {useState} from 'react';
import TextInput from "./TextInput/TextInput";
import Result from "./Result/Result";
import Spinner from "./Spinner/Spinner";

import './HomePage.css';

function HomePage({setHistory}) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkUniqueness = async (text) => {
        setLoading(true);

        setTimeout(() => {
            const uniquenessPercent = Math.floor(Math.random() * 100);
            const exampleSites = [
                "https://example.com/article1",
                "https://example.com/article2",
                "https://example.com/article3",
            ];

            // Отфильтровываем сайты на основе процента уникальности
            const matchedSites = exampleSites.filter((_, index) => index < (100 - uniquenessPercent) / 33);

            const checkResult = {
                uniquenessPercent,
                matchedSites
            };

            setResult(checkResult);
            setLoading(false);

            // Добавляем в историю
            setHistory(prevHistory => [
                ...prevHistory,
                {
                    text,
                    ...checkResult,
                    timestamp: new Date().toLocaleString()
                }
            ]);
        }, 2000); // имитация задержки запроса в 2 секунды
    };

    return (
        <>
            <div className="info-section">
                <h2>About This Tool</h2>
                <p>This tool allows you to check the uniqueness of the text. Just enter the text in the input field and click the "Check" button. The result will be displayed below.</p>
            </div>
            <TextInput onCheck={checkUniqueness}/>
            {loading ? (
                <Spinner />
            ) : (
                <Result result={result}/>
            )}
        </>
    );
}

export default HomePage;

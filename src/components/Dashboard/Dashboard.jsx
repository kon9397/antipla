import React from 'react';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './Dashboard.css';

function Dashboard({history}) {
    const generatePDF = async (index) => {
        const content = document.getElementById(`pdf-content-${index}`);

        // Создать холст HTML из элемента content
        const canvas = await html2canvas(content);

        // Получить изображение в формате Data URL
        const imgData = canvas.toDataURL('image/png');

        // Создать новую страницу
        const pdf = new jsPDF();
        pdf.setFont('arial');
        pdf.setFontSize(12);

        // Добавить изображение на страницу
        pdf.addImage(imgData, 'PNG', 10, 10, 180, 0);

        // Сохранить PDF
        pdf.save(`uniqueness-report-${index}.pdf`);
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard!</p>
            <div className="dashboard-cards">
                {history && history.map((item, index) => (
                    <div key={index} className="dashboard-card">
                        <div id={`pdf-content-${index}`} className="pdf-content">
                            <div className="pdf-header">
                                <h2>Uniqueness Report</h2>
                            </div>
                            <div className="pdf-body">
                                <strong>{item.timestamp}</strong>
                                <p>{item.text}</p>
                                <span>Uniqueness: {item.uniquenessPercent}%</span>
                                <div>
                                    <strong>Matched Sites:</strong>
                                    <ul>
                                        {item.matchedSites && item.matchedSites.map((site, idx) => (
                                            <li key={idx}>{site}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="pdf-footer">
                                <p>Thank you for using our service.</p>
                            </div>
                        </div>
                        <button onClick={() => generatePDF(index)}>Generate PDF</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const SingleBarChart = () => {
    const barData = {
        labels: ['T', '', '', 'F', '', '', 'M', '', '', 'T', '', '', 'S'],
        datasets: [
            {
                label: 'Value',
                data: [65, 75, 52, 67, 53, 30, 70, 42, 47, 50, 58, 48, 50],
                backgroundColor: 'rgba(3, 169, 244, 1)',
                barThickness: 6,
                order: 1,
            },
            {
                label: 'Track backdrop',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                backgroundColor: '#f1f1f6',
                barThickness: 6,
                order: 2,
                skipNull: false,
            }
        ]
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                grid: { display: false },
                ticks: {
                    stepSize: 25,
                    color: '#6e768e',
                    font: { size: 11 }
                }
            },
            x: {
                stacked: true,
                grid: { display: false },
                ticks: {
                    color: '#6e768e',
                    font: { size: 11 }
                }
            }
        }
    };

    return (
        <div style={{
            backgroundColor: 'var(--bg-header)',
            borderRadius: '12px',
            padding: '0 0 35px 0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            // border: '1px solid #f0f0f5',
            width: '100%'
        }}>
            <div style={{ padding: '20px 25px', borderBottom: '1px solid #f0f0f5', marginBottom: '25px' }}>
                <h3 style={{ fontSize: 'var(--text-heading)', color: 'var(--black-clr)', margin: 0 }}>
                    Bar Chart
                </h3>
            </div>

            <div style={{ height: '220px', padding: '0 25px' }}>
                <Bar data={barData} options={barOptions} />
            </div>
        </div>
    );
};

export default SingleBarChart;
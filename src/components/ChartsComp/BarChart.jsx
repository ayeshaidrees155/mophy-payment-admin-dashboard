import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
    const barData = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [
            {
                label: 'Series A',
                data: [100, 75, 50, 75, 50, 75, 100],
                backgroundColor: 'rgba(3, 169, 244, 1)',
                barThickness: 3,
            },
            {
                label: 'Series B',
                data: [90, 65, 40, 65, 40, 65, 90],
                backgroundColor: 'rgba(76, 175, 80, 1)',
                barThickness: 3,
            },
            {
                label: 'Series C',
                data: [60, 35, 10, 35, 10, 35, 60],
                backgroundColor: 'rgba(255, 193, 7, 1)',
                barThickness: 3,
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
                grid: {
                    drawBorder: false,
                    color: '#f0f0f5',
                },
                ticks: {
                    stepSize: 25,
                    color: '#6e768e',
                    font: { size: 11 }
                }
            },
            x: {
                grid: {
                    display: false,
                },
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
            width: '100%'
        }}>
            <div style={{
                padding: '20px 25px',
                borderBottom: '1px solid #f0f0f5',
                marginBottom: '25px'
            }}>
                <h3 style={{
                    fontSize: 'var(--font-heading)',
                    color: 'var(--black-clr)',
                    margin: 0
                }}>
                    Bar Chart
                </h3>
            </div>

            <div style={{ height: '220px', padding: '0 25px' }}>
                <Bar data={barData} options={barOptions} />
            </div>
        </div>
    );
};

export default BarChart;
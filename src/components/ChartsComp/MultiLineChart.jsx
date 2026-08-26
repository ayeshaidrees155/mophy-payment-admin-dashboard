import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MultiLineChart = () => {
    const lineData = {
        labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007'],
        datasets: [
            {
                label: 'Line Blue',
                data: [0, 65, 45, 30, 130, 45, 30],
                borderColor: 'rgba(3, 169, 244, 1)', // Blue Line
                backgroundColor: '#ffffff',
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 4, // Shows dots
                pointHoverRadius: 6,
                pointBackgroundColor: 'rgba(3, 169, 244, 1)',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 1.5,
            },
            {
                label: 'Line Green',
                data: [0, 65, 90, 50, 45, 80, 30],
                borderColor: 'rgba(76, 175, 80, 1)', // Green Line
                backgroundColor: '#ffffff',
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 1.5,
            },
            {
                label: 'Line Purple',
                data: [0, 30, 40, 30, 110, 40, 30],
                borderColor: 'rgba(103, 58, 183, 1)', // Purple Line
                backgroundColor: '#ffffff',
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: 'rgba(103, 58, 183, 1)',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 1.5,
            }
        ]
    };

    const lineOptions = {
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
                    stepSize: 50,
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
            // border: '1px solid #f0f0f5',
            width: '100%'
        }}>
            <div style={{
                padding: '20px 25px',
                borderBottom: '1px solid #f0f0f5',
                marginBottom: '25px'
            }}>
                <h3 style={{
                    fontSize: 'var(--text-heading)',
                    // fontWeight: '600',
                    color: 'var(--black-clr)',
                    margin: 0
                }}>
                    Line Chart
                </h3>
            </div>

            <div style={{ height: '220px', padding: '0 25px' }}>
                <Line data={lineData} options={lineOptions} />
            </div>
        </div>
    );
};

export default MultiLineChart;
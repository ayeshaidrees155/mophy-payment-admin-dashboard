import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const AreaChart = () => {
    const areaData = {
        labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007'],
        datasets: [
            {
                label: 'Phone',
                data: [0, 90, 60, 25, 130, 45, 30],
                borderColor: 'rgba(103, 58, 183, 0.7)',
                backgroundColor: 'rgba(103, 58, 183, 0.55)',
                fill: true,
                tension: 0.4,
                pointRadius: 0,
            },
            {
                label: 'Windows',
                data: [0, 60, 45, 50, 45, 80, 25],
                borderColor: 'rgba(3, 169, 244, 0.7)',
                backgroundColor: 'rgba(3, 169, 244, 0.55)',
                fill: true,
                tension: 0.4,
                pointRadius: 0,
            },
            {
                label: 'Mac',
                data: [0, 25, 40, 15, 10, 40, 15],
                borderColor: 'rgba(76, 175, 80, 0.7)',
                backgroundColor: 'rgba(76, 175, 80, 0.55)',
                fill: true,
                tension: 0.4,
                pointRadius: 0,
            }
        ]
    };

    const areaOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                grid: { display: false },
                ticks: {
                    stepSize: 50,
                    color: '#6e768e',
                    font: { size: 11 }
                }
            },
            x: {
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
                    Area Chart
                </h3>
            </div>

            <div style={{ height: '220px', padding: '0 25px' }}>
                <Line data={areaData} options={areaOptions} />
            </div>
        </div>
    );
};

export default AreaChart;
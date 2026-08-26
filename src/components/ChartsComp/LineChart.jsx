import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
    const lineChartRef = useRef(null);

    useEffect(() => {
        if (lineChartRef.current) {
            const chart = lineChartRef.current;
            const ctx = chart.ctx;
            const gradient = ctx.createLinearGradient(0, chart.chartArea.top, 0, chart.chartArea.bottom);

            gradient.addColorStop(0, 'rgba(3, 169, 244, 0.25)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            chart.data.datasets[0].backgroundColor = gradient;
            chart.update();
        }
    }, []);

    const lineData = {
        labels: ['Q1', '', '', 'Q2', '', '', 'Q3', '', '', 'Q4'],
        datasets: [{
            label: 'Performance',
            data: [35, 34, 36, 42, 41, 45, 52, 60, 58, 55],
            fill: true,
            borderColor: 'rgba(3, 169, 244, 0.8)',
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 1.5,
        }]
    };

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: { display: false, suggestedMin: 0 },
            x: { display: false }
        },
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
                <Line
                    ref={lineChartRef}
                    data={lineData}
                    options={lineOptions}
                    style={{ filter: 'drop-shadow(0 2px 3px rgba(3, 169, 244, 0.15))' }}
                />
            </div>
        </div>
    );
};

export default LineChart;
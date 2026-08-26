import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const centerTextPlugin = {
    id: 'centerText',
    afterDraw: (chart) => {
        const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
        const { options } = chart;
        const centerOptions = options.plugins.centerText;

        if (!centerOptions || !centerOptions.textTop) return;

        ctx.save();

        ctx.font = 'bold 13px sans-serif'; t
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(centerOptions.textTop, left + width / 2, top + height / 2 - 10);

        ctx.font = 'bold 28px sans-serif';
        ctx.fillStyle = '#000000';
        ctx.fillText(centerOptions.textBottom, left + width / 2, top + height / 2 + 16);

        ctx.restore();
    },
};

const DonutChart = () => {
    const donutData = {
        labels: ['In-Store Sales', 'Other Sales', 'Unassigned'],
        datasets: [{
            data: [30, 25, 12],
            backgroundColor: [
                'rgba(3, 169, 244, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(103, 58, 183, 1)',
            ],
            borderColor: '#ffffff',
            borderWidth: 2,
            cutout: '80%',
        }]
    };

    const donutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
            centerText: {
                textTop: 'In-Store Sales',
                textBottom: '30',
            }
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
            {/* Heading Section */}
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
                    Donught Chart
                </h3>
            </div>

            <div style={{
                height: '220px',
                maxWidth: '220px',
                margin: '0 auto',
                position: 'relative'
            }}>
                <Doughnut data={donutData} options={donutOptions} plugins={[centerTextPlugin]} />
            </div>
        </div>
    );
};

export default DonutChart;
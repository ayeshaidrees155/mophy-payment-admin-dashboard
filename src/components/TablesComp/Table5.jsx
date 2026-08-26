import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Divider
} from '@mui/material';

const hoverTableData = (id, product, popularity, sales, color, trackBg) => {
    return { id, product, popularity, sales, color, trackBg };
};

const hoverData = [
    hoverTableData('1', 'Air Conditioner', 70, '70%', '#2196F3', '#F2F6FE'), // Blue
    hoverTableData('2', 'Textiles', 70, '70%', '#2DCA73', '#EAF9F1'),       // Green
    hoverTableData('3', 'Milk Powder', 70, '70%', '#2C3A50', '#F1F3F5'),    // Dark Gray
    hoverTableData('4', 'Vehicles', 70, '70%', '#FF5668', '#FFF0F1'),       // Red
    hoverTableData('5', 'Boats', 70, '70%', '#FF9B29', '#FFF8F0')           // Orange
];

export default function Table5() {
    return (
        <div className="w-full mb-8">
            <Paper
                elevation={0}
                className="w-full p-8 px-5 rounded-md"
                style={{
                    borderColor: 'var(--border-grey)',
                    backgroundColor: 'var(--bg-header)'
                }}
            >
                <h2
                    className="mb-4 tracking-wide"
                    style={{
                        fontSize: 'var(--text-heading)',
                        color: 'var(--black-clr)',
                        fontWeight: 600,
                    }}
                >
                    Hover Table
                </h2>

                <Divider
                    className="!-mx-5"
                    style={{ borderColor: 'var(--border-grey)' }}
                />

                <TableContainer>
                    <Table sx={{ minWidth: 650, marginTop: 3 }} aria-label="hover table">
                        <TableHead>
                            <TableRow style={{ borderBottom: '1px solid var(--border-grey)' }}>
                                {['#', 'Product', 'Popularity', 'Sales'].map((header) => (
                                    <TableCell
                                        key={header}
                                        style={{
                                            color: 'var(--black-clr)',
                                            fontWeight: 600,
                                            borderBottom: 'none',
                                            fontSize: 'var(--text-title)',
                                            color: "var(--black-clr)",
                                            padding: '12px'
                                        }}
                                        className="uppercase tracking-wider"
                                    >
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {hoverData.map((row) => (
                                <TableRow
                                    key={row.id}
                                    style={{
                                        borderBottom: '1px solid var(--border-grey)',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'var(--bg-body) !important', // Hover effect using var(--bg-body)
                                            cursor: 'pointer'
                                        }
                                    }}
                                >
                                    <TableCell
                                        style={{
                                            color: 'var(--black-clr)',
                                            fontWeight: 700,
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '14px 12px'
                                        }}
                                    >
                                        {row.id}
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            color: 'var(--gray-clr)',
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '14px 12px'
                                        }}
                                    >
                                        {row.product}
                                    </TableCell>

                                    <TableCell style={{ borderBottom: 'none', padding: '14px 12px', width: '40%' }}>
                                        <div
                                            className="w-full h-2 rounded-full overflow-hidden"
                                            style={{ backgroundColor: row.trackBg }}
                                        >
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    width: `${row.popularity}%`,
                                                    backgroundColor: row.color
                                                }}
                                            />
                                        </div>
                                    </TableCell>

                                    <TableCell style={{ borderBottom: 'none', padding: '14px 12px' }}>
                                        <span
                                            className="px-3 py-1 rounded-full font-bold inline-block text-center text-xs"
                                            style={{
                                                backgroundColor: row.trackBg,
                                                color: row.color
                                            }}
                                        >
                                            {row.sales}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}
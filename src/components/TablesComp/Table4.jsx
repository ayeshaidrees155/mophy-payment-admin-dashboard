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

const basicTableData = (id, name, status, date, price) => {
    return { id, name, status, date, price };
};

const stripedData = [
    basicTableData('1', 'Kolor Tea Shirt For Man', 'Sale', 'January 22', '$21.56'),
    basicTableData('2', 'Kolor Tea Shirt For Women', 'Tax', 'January 30', '$55.32'),
    basicTableData('3', 'Blue Backpack For Baby', 'Extended', 'January 25', '$14.85')
];

const getStatusBadgeStyle = (status) => {
    switch (status.toLowerCase()) {
        case 'sale':
            return { bg: '#2196F3', text: '#FFFFFF' }; // Blue
        case 'tax':
            return { bg: '#2DCA73', text: '#FFFFFF' }; // Green
        case 'extended':
        default:
            return { bg: '#FF5668', text: '#FFFFFF' }; // Red
    }
};

export default function Table4() {
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
                        color: "var(--black-clr)",
                        fontWeight: 600,
                    }}
                >
                    Table Striped
                </h2>

                <Divider
                    className="!-mx-5"
                    style={{ borderColor: 'var(--border-grey)' }}
                />

                <TableContainer>
                    <Table sx={{ minWidth: 650, marginTop: 3 }} aria-label="striped table">
                        <TableHead>
                            <TableRow>
                                {['#', 'Name', 'Status', 'Date', 'Price'].map((header) => (
                                    <TableCell
                                        key={header}
                                        style={{
                                            color: 'var(--text-title)',
                                            fontWeight: 600,
                                            borderBottom: 'none',
                                            fontSize: 'var(--text-title)',
                                            color: "var(--black-clr)",
                                            padding: '12px 16px'
                                        }}
                                        className="uppercase tracking-wider"
                                    >
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {stripedData.map((row, index) => {
                                const badgeStyle = getStatusBadgeStyle(row.status);
                                // Apply a very soft gray or border-grey shade on odd rows (index 0, 2, etc.)
                                const isOdd = index % 2 === 0;
                                const rowBg = isOdd ? 'rgba(244, 245, 249, 0.6)' : 'transparent';

                                return (
                                    <TableRow
                                        key={row.id}
                                        style={{
                                            backgroundColor: rowBg,
                                            borderTop: '1px solid var(--border-grey)',
                                            borderBottom: '1px solid var(--border-grey)',
                                        }}
                                    >
                                        <TableCell
                                            style={{
                                                color: 'var(--black-clr)',
                                                fontWeight: 700,
                                                fontSize: '14px',
                                                padding: '12px 16px'
                                            }}
                                        >
                                            {row.id}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                color: 'var(--gray-clr)',
                                                borderBottom: 'none',
                                                fontSize: '14px',
                                                padding: '12px 16px'
                                            }}
                                        >
                                            {row.name}
                                        </TableCell>

                                        <TableCell style={{ borderBottom: 'none', padding: '12px 16px' }}>
                                            <span
                                                className="px-4 py-1 rounded-full font-bold inline-block text-center min-w-[75px]"
                                                style={{
                                                    fontSize: '12px',
                                                    backgroundColor: badgeStyle.bg,
                                                    color: badgeStyle.text
                                                }}
                                            >
                                                {row.status}
                                            </span>
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                color: 'var(--gray-clr)',
                                                borderBottom: 'none',
                                                fontSize: '14px',
                                                padding: '12px 16px'
                                            }}
                                        >
                                            {row.date}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                color: 'var(--gray-clr)',
                                                borderBottom: 'none',
                                                fontSize: '14px',
                                                padding: '12px 16px'
                                            }}
                                        >
                                            {row.price}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}
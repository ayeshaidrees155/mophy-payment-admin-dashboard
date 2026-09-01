import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Divider
} from '@mui/material';

const tableData = (id, patient, drName, date, status, price) => {
    return { id, patient, drName, date, status, price };
};

const paymentsData = [
    tableData('01', 'Mr. Bobby', 'Dr. Jackson', '01 August 2020', 'Successful', '$21.56'),
    tableData('02', 'Mr. Bobby', 'Dr. Jackson', '01 August 2020', 'Canceled', '$21.56'),
    tableData('03', 'Mr. Bobby', 'Dr. Jackson', '01 August 2020', 'Pending', '$21.56')
];

const getStatusTheme = (status) => {
    switch (status.toLowerCase()) {
        case 'successful':
            return { bg: '#E6F8ED', text: '#2DCA73' };
        case 'canceled':
            return { bg: '#FFEDED', text: '#FF5668' };
        case 'pending':
        default:
            return { bg: '#FFF4E5', text: '#FF9B29' };
    }
};

export default function RecentPaymentsTable() {
    return (
        <div className="w-full mb-8">
            <Paper
                elevation={0}
                className="w-full p-8  rounded-md"
                style={{
                    borderColor: 'var(--border-grey)',
                    backgroundColor: "var(--bg-header)"
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
                    Recent Payments Queue
                </h2>

                <Divider
                    className="!-mx-5"
                    style={{ borderColor: 'var(--border-grey)' }}
                />

                <TableContainer>
                    <Table sx={{ minWidth: 650, marginTop: 3 }} aria-label="payments queue table">
                        <TableHead>
                            <TableRow style={{ borderBottom: '1px solid var(--border-grey)' }}>
                                {['#', 'Patient', 'Dr Name', 'Date', 'Status', 'Price', ''].map((header) => (
                                    <TableCell
                                        key={header}
                                        style={{
                                            color: 'var(--text-title)',
                                            fontWeight: 600,
                                            borderBottom: 'none',
                                            fontSize: 'var(--text-title)',
                                            color: "var(--black-clr)",
                                            padding: '12px',
                                            paddingX: 5
                                        }}
                                        className="uppercase tracking-wider"
                                    >
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {paymentsData.map((row) => {
                                const theme = getStatusTheme(row.status);
                                return (
                                    <TableRow
                                        key={row.id}
                                        style={{ borderBottom: '1px solid var(--border-grey)' }}
                                    >
                                        <TableCell
                                            style={{
                                                color: 'var(--black-clr)',
                                                fontWeight: 700,
                                                borderBottom: 'none',
                                                fontSize: '14px',
                                                padding: '10px 12px'
                                            }}
                                        >
                                            {row.id}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                color: 'var(--gray-clr)',
                                                borderBottom: 'none',
                                                fontSize: '14px',
                                                padding: '10px 12px'
                                            }}
                                        >
                                            {row.patient}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                color: 'var(--gray-clr)',
                                                borderBottom: 'none',
                                                fontSize: '14px',
                                                padding: '10px 12px'
                                            }}
                                        >
                                            {row.drName}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                color: 'var(--gray-clr)',
                                                borderBottom: 'none',
                                                fontSize: '14px',
                                                padding: '10px 12px'
                                            }}
                                        >
                                            {row.date}
                                        </TableCell>

                                        <TableCell style={{ borderBottom: 'none', padding: '10px 12px' }}>
                                            <span
                                                className="px-4 py-1.5 rounded-full font-bold inline-block"
                                                style={{
                                                    fontSize: '12px',
                                                    backgroundColor: theme.bg,
                                                    color: theme.text
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
                                                padding: '10px 12px'
                                            }}
                                        >
                                            {row.price}
                                        </TableCell>

                                        <TableCell style={{ borderBottom: 'none', padding: '10px 12px' }} align="right">
                                            <IconButton
                                                style={{
                                                    backgroundColor: theme.bg,
                                                    color: theme.text,
                                                    width: '36px',
                                                    height: '36px'
                                                }}
                                                className="hover:opacity-85 transition-opacity"
                                            >
                                                <span
                                                    className="font-extrabold tracking-tighter"
                                                    style={{ fontSize: '10px', lineHeight: 1 }}
                                                >
                                                    •••
                                                </span>
                                            </IconButton>
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
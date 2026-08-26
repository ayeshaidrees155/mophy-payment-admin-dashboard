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

const hoverTableData = (id, first, last, handle) => {
    return { id, first, last, handle };
};

const hoverData = [
    hoverTableData('1', 'Mark', 'Otto', '@mdo'),
    hoverTableData('2', 'Jacob', 'Thornton', '@fat'),
    hoverTableData('3', 'Larry', 'the Bird', '@twitter'),
    hoverTableData('4', 'Larry', 'the Bird', '@twitter'),
    hoverTableData('5', 'Larry', 'the Bird', '@twitter'),
    hoverTableData('5', 'Larry', 'the Bird', '@twitter')
];

export default function Table7() {
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
                    Primary Table Hover
                </h2>

                <Divider
                    className="!-mx-5"
                    style={{ borderColor: 'var(--border-grey)' }}
                />

                <TableContainer>
                    <Table sx={{ minWidth: 650, marginTop: 3 }} aria-label="primary hover table">
                        <TableHead>
                            <TableRow
                                style={{
                                    backgroundColor: '#0D4E70',
                                }}
                            >
                                {['#', 'First', 'Last', 'Handle'].map((header) => (
                                    <TableCell
                                        key={header}
                                        style={{
                                            color: '#FFFFFF',
                                            fontWeight: 600,
                                            borderBottom: 'none',
                                            fontSize: '14px',
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
                            {hoverData.map((row, index) => (
                                <TableRow
                                    key={index}
                                    style={{
                                        backgroundColor: 'var(--blue-clr)',
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.15)', // Light separator line
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#1976D2 !important', // Darker blue hover transition
                                            cursor: 'pointer'
                                        }
                                    }}
                                >
                                    <TableCell
                                        style={{
                                            color: '#FFFFFF',
                                            fontWeight: 700,
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}
                                    >
                                        {row.id}
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            color: '#FFFFFF',
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}
                                    >
                                        {row.first}
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            color: '#FFFFFF',
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}
                                    >
                                        {row.last}
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            color: '#FFFFFF',
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}
                                    >
                                        {row.handle}
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
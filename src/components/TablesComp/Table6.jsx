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

const primaryTableData = (id, first, last, handle) => {
    return { id, first, last, handle };
};

const primaryData = [
    primaryTableData('1', 'Mark', 'Otto', '@mdo'),
    primaryTableData('2', 'Jacob', 'Thornton', '@fat'),
    primaryTableData('3', 'Larry', 'the Bird', '@twitter')
];

export default function Table6() {
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
                    Primary Table
                </h2>

                <Divider
                    className="!-mx-5"
                    style={{ borderColor: 'var(--border-grey)' }}
                />

                <TableContainer>
                    <Table sx={{ minWidth: 650, marginTop: 3 }} aria-label="primary table">
                        <TableHead>
                            <TableRow
                                style={{
                                    backgroundColor: 'var(--blue-clr)',
                                }}
                            >
                                {['#', 'First', 'Last', 'Handle'].map((header) => (
                                    <TableCell
                                        key={header}
                                        style={{
                                            color: 'var(--black-clr)',
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
                            {primaryData.map((row) => (
                                <TableRow
                                    key={row.id}
                                    style={{
                                        borderBottom: '1px solid var(--border-grey)',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'var(--bg-body) !important',
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
                                        {row.first}
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            color: 'var(--gray-clr)',
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}
                                    >
                                        {row.last}
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            color: 'var(--gray-clr)',
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
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
    Divider,
    Checkbox,
    Avatar
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Helper function to structure row data for Exam Toppers
const topperData = (id, rollNo, name, avatarUrl, email, date, status) => {
    return { id, rollNo, name, avatarUrl, email, date, status };
};

const examToppersData = [
    topperData('1', '542', 'Dr. Jackson', '/src/assets/t1.jpg', 'example@example.com', '01 August 2020', 'Successful'),
    topperData('2', '542', 'Dr. Jackson', '/src/assets/t2.jpg', 'example@example.com', '01 August 2020', 'Canceled'),
    topperData('3', '542', 'Dr. Jackson', '/src/assets/t3.jpg', 'example@example.com', '01 August 2020', 'Pending')
];

const getStatusTheme = (status) => {
    switch (status.toLowerCase()) {
        case 'successful':
            return { color: '#2DCA73' };
        case 'canceled':
            return { color: '#FF5668' };
        case 'pending':
        default:
            return { color: '#FF9B29' };
    }
};

export default function Table2() {
    return (
        <div className="w-full mb-8">            <Paper
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
                Exam Toppers
            </h2>

            <Divider
                className="!-mx-5"
                style={{ borderColor: 'var(--border-grey)' }}
            />

            <TableContainer>
                <Table sx={{ minWidth: 650, marginTop: 3 }} aria-label="exam toppers table">
                    <TableHead>
                        <TableRow style={{ borderBottom: '1px solid var(--border-grey)' }}>
                            <TableCell style={{ width: '40px', padding: '12px' }} />
                            {['ROLL NO.', 'NAME', 'Email', 'Date', 'Status', 'Actions'].map((header) => (
                                <TableCell
                                    key={header}
                                    style={{
                                        color: 'var(--text-title)',
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
                        {examToppersData.map((row) => {
                            const theme = getStatusTheme(row.status);
                            return (
                                <TableRow
                                    key={row.id}
                                    style={{ borderBottom: '1px solid var(--border-grey)' }}
                                >
                                    <TableCell style={{ borderBottom: 'none', padding: '10px 12px' }}>
                                        <Checkbox
                                            size="small"
                                            style={{ color: 'var(--border-grey)' }}
                                        />
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            color: 'var(--black-clr)',
                                            fontWeight: 700,
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '10px 12px'
                                        }}
                                    >
                                        {row.rollNo}
                                    </TableCell>

                                    <TableCell style={{ borderBottom: 'none', padding: '10px 12px' }}>
                                        <div className="flex items-center gap-3">
                                            <Avatar
                                                src={row.avatarUrl}
                                                alt={row.name}
                                                sx={{ width: 28, height: 28 }}
                                            />
                                            <span
                                                style={{
                                                    color: 'var(--gray-clr)',
                                                    fontSize: '14px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {row.name}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            color: 'var(--gray-clr)',
                                            borderBottom: 'none',
                                            fontSize: '14px',
                                            padding: '10px 12px'
                                        }}
                                    >
                                        {row.email}
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
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="w-2.5 h-2.5 rounded-full inline-block"
                                                style={{ backgroundColor: theme.color }}
                                            />
                                            <span
                                                style={{
                                                    fontSize: '14px',
                                                    color: 'var(--gray-clr)'
                                                }}
                                            >
                                                {row.status}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell style={{ borderBottom: 'none', padding: '10px 12px' }}>
                                        <div className="flex items-center gap-2">
                                            <IconButton
                                                size="small"
                                                style={{
                                                    backgroundColor: 'var(--blue-clr)',
                                                    color: 'white',
                                                    borderRadius: '6px',
                                                    width: '28px',
                                                    height: '28px'
                                                }}
                                                className="hover:opacity-85"
                                            >
                                                <EditIcon sx={{ fontSize: 16 }} />
                                            </IconButton>

                                            <IconButton
                                                size="small"
                                                style={{
                                                    backgroundColor: '#FF5668',
                                                    color: 'white',
                                                    borderRadius: '6px',
                                                    width: '28px',
                                                    height: '28px'
                                                }}
                                                className="hover:opacity-85"
                                            >
                                                <DeleteIcon sx={{ fontSize: 16 }} />
                                            </IconButton>
                                        </div>
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
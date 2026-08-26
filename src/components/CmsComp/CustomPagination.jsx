import React from 'react';
import { Box, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CustomPagination({ totalItems, page, setPage, visibleItemsCount }) {

    const startRecord = totalItems === 0 ? 0 : page * 6 + 1;
    const endRecord = Math.min((page + 1) * 6, totalItems);
    const totalPages = Math.ceil(totalItems / 6) || 1;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: { xs: 2, sm: 0 },
                width: '100%',
                padding: '12px 8px',
                background: "var(--bg-header)",
                boxSizing: 'border-box'
            }}
        >
            <Typography
                sx={{
                    fontSize: "var(--text-body)",
                    color: "var(--gray-clr)",
                    textAlign: { xs: 'center', sm: 'left' }
                }}
            >
                Page {page + 1} of {totalPages}, showing {visibleItemsCount} records out of {totalItems} total, starting on record {startRecord}, ending on {endRecord}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    maxWidth: '100%',
                    overflowX: 'auto'
                }}
            >
                <button
                    disabled={page === 0}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    style={{
                        padding: '8px 12px',
                        cursor: page === 0 ? 'not-allowed' : 'pointer',
                        backgroundColor: 'var(--bg-header)',
                        color: page === 0 ? '#bfbfbf' : 'var(--gray-clr)',
                        border: 'none',
                        borderRight: '1px solid #e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <NavigateBeforeIcon fontSize="small" />
                </button>

                {/* Page 1 Button */}
                <button
                    onClick={() => setPage(0)}
                    style={{
                        padding: '8px 14px',
                        cursor: 'pointer',
                        backgroundColor: page === 0 ? 'var(--blue-clr)' : '#fff',
                        color: page === 0 ? '#fff' : 'var(--gray-clr)',
                        border: 'none',
                        borderRight: '1px solid #e0e0e0',
                        fontWeight: page === 0 ? 'bold' : 'normal',
                        fontSize: '14px'
                    }}
                >
                    1
                </button>

                {/* Page 2 Button */}
                <button
                    onClick={() => setPage(1)}
                    style={{
                        padding: '8px 14px',
                        cursor: 'pointer',
                        backgroundColor: page === 1 ? 'var(--blue-clr)' : 'var(--bg-header)',
                        color: page === 1 ? '#fff' : 'var(--gray-clr)',
                        border: 'none',
                        borderRight: '1px solid #e0e0e0',
                        fontWeight: page === 1 ? 'bold' : 'normal',
                        fontSize: '14px'
                    }}
                >
                    2
                </button>

                {/* Page 3 Button */}
                <button
                    onClick={() => setPage(2)}
                    style={{
                        padding: '8px 14px',
                        cursor: 'pointer',
                        backgroundColor: page === 2 ? 'var(--blue-clr)' : 'var(--bg-header)',
                        color: page === 2 ? '#fff' : 'var(--gray-clr)',
                        border: 'none',
                        borderRight: '1px solid #e0e0e0',
                        fontWeight: page === 2 ? 'bold' : 'normal',
                        fontSize: '14px'
                    }}
                >
                    3
                </button>

                <button
                    disabled={page >= totalPages - 1}
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    style={{
                        padding: '8px 12px',
                        cursor: page >= totalPages - 1 ? 'not-allowed' : 'pointer',
                        backgroundColor: 'var(--bg-header)',
                        color: page >= totalPages - 1 ? '#bfbfbf' : 'var(--gray-clr)',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <NavigateNextIcon fontSize="small" />
                </button>
            </Box>
        </Box>
    );
}
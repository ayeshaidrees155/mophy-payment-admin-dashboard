import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { rows } from "../../data/transactionsData"

const headCells = [
    { id: 'id', numeric: false, disablePadding: true, label: 'Id Invoice' },
    { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
    { id: 'receipent', numeric: true, disablePadding: false, label: 'Receipent' },
    { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'service', numeric: true, disablePadding: false, label: 'Service Type' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'actions', numeric: true, disablePadding: false, label: 'Actions' },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        padding='normal'
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ textAlign: "left", color: "var(--black-clr)" }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const navigate = useNavigate();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        if (event.target.type === 'checkbox') {
            const selectedIndex = selected.indexOf(id);
            let newSelected = [];

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selected, id);
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selected.slice(1));
            } else if (selectedIndex === selected.length - 1) {
                newSelected = newSelected.concat(selected.slice(0, -1));
            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    selected.slice(0, selectedIndex),
                    selected.slice(selectedIndex + 1),
                );
            }
            setSelected(newSelected);
            return;
        }

        const cleanId = encodeURIComponent(id);
        navigate(`/transaction-details/${cleanId}`);
    };

    const visibleRows = React.useMemo(() => {
        return rows.slice(page * 8, page * 8 + 8);
    }, [page]);

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, overflowX: 'auto' }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750, background: "var(--bg-header)" }}
                        aria-labelledby="tableTitle"
                        size='medium'
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = selected.includes(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" id={labelId} scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <Avatar
                                                    src={row.receipent?.img}
                                                    alt={row.receipent?.store}
                                                    sx={{ width: 32, height: 32 }}
                                                />
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'black' }}>
                                                    {row.receipent?.store || "N/A"}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.service}</TableCell>
                                        <TableCell>
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-center min-w-[100px] ${row.status === "Completed" ? "bg-green-100 text-green-800" :
                                                row.status === "Cancelled" ? "bg-red-100 text-red-800" : "bg-orange-100 text-orange-800"
                                                }`}>
                                                {row.status}
                                            </span>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <MoreVertOutlinedIcon />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Pagination Controls */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', width: '100%', background: "var(--bg-body)" }}>
                    <Typography variant="body2" sx={{ color: "var(--gray-clr)" }}>
                        Showing {page * 8 + 1} to {Math.min((page + 1) * 8, rows.length)} of {rows.length} entries
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <button disabled={page === 0} onClick={() => setPage(page - 1)} style={{ padding: '6px 12px', cursor: page === 0 ? 'not-allowed' : 'pointer' }}>
                            Previous
                        </button>
                        <button onClick={() => setPage(0)} style={{ padding: '6px 12px', backgroundColor: page === 0 ? 'var(--blue-clr)' : 'white', color: page === 0 ? '#fff' : 'var(--gray-clr)' }}>
                            1
                        </button>
                        <button onClick={() => setPage(1)} style={{ padding: '6px 12px', backgroundColor: page === 1 ? 'var(--blue-clr)' : 'white', color: page === 1 ? '#fff' : 'var(--gray-clr)' }}>
                            2
                        </button>
                        <button disabled={page >= 1} onClick={() => setPage(page + 1)} style={{ padding: '6px 12px', cursor: page >= 1 ? 'not-allowed' : 'pointer' }}>
                            Next
                        </button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
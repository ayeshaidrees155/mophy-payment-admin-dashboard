import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Avatar from '@mui/material/Avatar';

function createData(id, date, receipent, email, service, status, actions) {
    return {
        id, date, receipent, email, service, status, actions
    };
}

const rows = [
    createData("#123412450", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/25.png",
        store: "XYZ Store ID"
    },
        "xyzstore@mail.com", "Server Maintenance", "Completed", ""),
    createData("#123412451", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/2.png",
        store: "David Occoner"
    }, "juliaesteh@mail.com", "Upgrade Component", "Cancelled"),
    createData("#123412452", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/3.png",
        store: "Julia Esterr"
    }, "xyzstore@mail.com", "Server Maintenance", "Completed"),
    createData("#123412453", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/4.png",
        store: "Power Supp Store"
    }, "juliaesteh@mail.com", "Upgrade Component", "Cancelled"),
    createData("#123412454", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/5.png",
        store: "James Known"
    }, "juliaesteh@mail.com", "Upgrade Component", "Completed"),
    createData("#123412455", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/6.png",
        store: ""
    }, "davidocon@mail.com", "Clean Up", "Pending"),
    createData("#123412456", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/7.png",
        store: "Rock Lee"
    }, "juliaesteh@mail.com", "Upgrade Component", "Cancelled"),
    createData("#123412457", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/8.png",
        store: "Geovanny Jr."
    }, "davidocon@mail.com", "Clean Up", "Cancelled"),
    createData("#123412458", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/9.png",
        store: "Bella Ingrid"
    }, "davidocon@mail.com", "Clean Up", "Completed"),
    createData("#123412459", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/10.png",
        store: "Bella Ingrid"
    }, "juliaesteh@mail.com", "Upgrade Component", "Completed"),
    createData("#1234124501", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/10.png",
        store: "Bella Ingrid"
    }, "davidocon@mail.com", "Upgrade Component", "Cancelled"),
    createData("#1234124532", '#June 1, 2020, 08:22 AM', {
        img: "/src/assets/10.png",
        store: "Bella Ingrid"
    }, "xyzstore@mail.com", "Upgrade Component", "Completed"),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

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
                        slotProps={{
                            input: { 'aria-label': 'select all desserts' },
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        padding='normal'
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ textAlign: "left", color: "var(--black-clr)", whiteSpace: "nowrap" }}
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
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

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
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(() => {
        if (page === 0) {
            return rows.slice(0, 8);
        } else {
            return rows.slice(8, 12);
        }
    }, [page]);

    return (
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
            <Paper sx={{ width: '100%', mb: 2, overflow: 'hidden' }} className="shadow-sm">
                <TableContainer sx={{ width: '100%' }}>
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
                                                slotProps={{
                                                    input: { 'aria-labelledby': labelId },
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            className='!text-[var(--black-clr)]'
                                            sx={{ whiteSpace: 'nowrap' }}
                                        >
                                            {row.id}
                                        </TableCell>
                                        <TableCell className='!text-[var(--gray-clr)]' sx={{ whiteSpace: 'nowrap' }}>
                                            {row.date}
                                        </TableCell>
                                        <TableCell className='!text-[var(--gray-clr)]'>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}>
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
                                        <TableCell className='!text-[var(--gray-clr)]' sx={{ whiteSpace: 'nowrap' }}>
                                            {row.email}
                                        </TableCell>
                                        <TableCell className='!text-[var(--gray-clr)]' sx={{ whiteSpace: 'nowrap' }}>
                                            {row.service}
                                        </TableCell>
                                        <TableCell>
                                            <span className={`
                                                inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-center min-w-[100px]
                                                ${row.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                                                ${row.status === "Cancelled" ? "bg-red-100 text-red-800" : ""}
                                                ${row.status === "Pending" ? "bg-orange-100 text-orange-800" : ""}
                                            `}>
                                                {row.status}
                                            </span>
                                        </TableCell>
                                        <TableCell className='!text-[var(--gray-clr)]' align='right'>
                                            <MoreVertOutlinedIcon />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={8} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Pagination Footer */}
                <Box className="!bg-[var(--bg-body)]">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px',
                            width: '100%',
                            background: "var(--bg-body)"
                        }}
                    >
                        {/* Left Side: Showing entries text */}
                        <Typography variant="body2" sx={{ color: "var(--gray-clr)" }}>
                            Showing {page === 0 ? '1 to 8' : '9 to 12'} of {rows.length} entries
                        </Typography>

                        {/* Right Side: Navigation Buttons */}
                        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <button
                                disabled={page === 0}
                                onClick={() => setPage(0)}
                                style={{
                                    padding: '6px 12px',
                                    cursor: page === 0 ? 'not-allowed' : 'pointer',
                                    backgroundColor: 'white',
                                    borderRadius: '4px',
                                    color: page === 0 ? 'var(--gray-clr)' : 'var(--blue-clr)',
                                    border: '1px solid #e0e0e0'
                                }}
                            >
                                Previous
                            </button>

                            <button
                                onClick={() => setPage(0)}
                                style={{
                                    padding: '6px 12px',
                                    cursor: 'pointer',
                                    backgroundColor: page === 0 ? 'var(--blue-clr)' : 'white',
                                    color: page === 0 ? '#fff' : 'var(--gray-clr)',
                                    borderRadius: '4px',
                                    fontWeight: page === 0 ? 'bold' : 'normal',
                                    border: '1px solid #e0e0e0'
                                }}
                            >
                                1
                            </button>

                            <button
                                onClick={() => setPage(1)}
                                style={{
                                    padding: '6px 12px',
                                    cursor: 'pointer',
                                    backgroundColor: page === 1 ? 'var(--blue-clr)' : 'white',
                                    color: page === 1 ? '#fff' : 'var(--gray-clr)',
                                    borderRadius: '4px',
                                    fontWeight: page === 1 ? 'bold' : 'normal',
                                    border: '1px solid #e0e0e0'
                                }}
                            >
                                2
                            </button>

                            <button
                                disabled={page === 1}
                                onClick={() => setPage(1)}
                                style={{
                                    padding: '6px 12px',
                                    cursor: page === 1 ? 'not-allowed' : 'pointer',
                                    backgroundColor: 'white',
                                    borderRadius: '4px',
                                    color: page === 1 ? 'var(--gray-clr)' : 'var(--blue-clr)',
                                    border: '1px solid #e0e0e0'
                                }}
                            >
                                Next
                            </button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CustomPagination from "./CustomPagination";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EditIcon from '@mui/icons-material/EditNoteRounded';
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import SaveIcon from '@mui/icons-material/DoneRounded';
import CancelIcon from '@mui/icons-material/CloseRounded';
import TitleForm from './titleForm';

export default function ContentTable() {
    const id = React.useId();

    const [contents, setContents] = useState([]);

    const [filterTitle, setFilterTitle] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [filterDate, setFilterDate] = useState("");

    const [editContentId, setEditContentId] = useState(null);
    const [editContentForm, setEditContentForm] = useState({ title: "", status: "", publishDate: "" })

    const defaultContent = [
        { id: 1, title: "About us", status: "Published", publishDate: "2026-02-18" },
        { id: 2, title: "FAQ", status: "Published", publishDate: "2026-03-02" },
        { id: 3, title: "Pricing", status: "Published", publishDate: "2026-04-03" },
        { id: 4, title: "Schedule", status: "Published", publishDate: "2026-05-04" },
        { id: 5, title: " Under Maintenance ", status: "Published", publishDate: "2026-06-05" }
    ];

    useEffect(() => {
        const storedContent = localStorage.getItem("ContentData");
        if (storedContent) {
            setContents(JSON.parse(storedContent))
        } else {
            setContents(defaultContent)
            localStorage.setItem("ContentData", JSON.stringify(defaultContent));
        }
    }, [])

    const handleDelContent = (id) => {
        const delContent = contents.filter((content) => content.id !== id)
        setContents(delContent);
        localStorage.setItem("ContentData", JSON.stringify(delContent));
    }

    const handleEditContent = (content) => {
        setEditContentForm({ title: content.title, status: content.status, publishDate: content.publishDate });
        setEditContentId(content.id);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditContentForm({ ...editContentForm, [name]: value })
    }

    const handleSaveContent = (contentId) => {
        const UpdatedContent = contents.map((content) => {
            if (content.id === contentId) {
                return ({ ...content, ...editContentForm })
            }
            return content;
        })
        setContents(UpdatedContent);
        localStorage.setItem("ContentData", JSON.stringify(UpdatedContent));
        setEditContentId(null);
    }

    const handleRemoveFilter = () => {
        setFilterTitle("");
        setFilterStatus("");
        setFilterDate("");
        setPage(0);
    };

    const filteredContents = contents.filter((item) => {
        const matchesTitle = filterTitle === "" ||
            item.title.toLowerCase().trim().includes(filterTitle.toLowerCase().trim());

        const matchesStatus = filterStatus === "" ||
            filterStatus === "Select Status" ||
            item.status.toLowerCase() === filterStatus.toLowerCase();

        const matchesDate = filterDate === "" ||
            item.publishDate === filterDate;

        return matchesTitle && matchesStatus && matchesDate;
    });

    const [page, setPage] = useState(0);
    const itemsPerPage = 6;

    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleRows = filteredContents.slice(start, end);

    return (
        <>
            <div className='my-5 w-full max-w-full overflow-x-hidden px-2 sm:px-4'>

                <TitleForm
                    filterTitle={filterTitle}
                    setFilterTitle={setFilterTitle}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                    filterDate={filterDate}
                    setFilterDate={setFilterDate}
                    handleRemoveFilter={handleRemoveFilter}
                />

                <Accordion defaultExpanded sx={{ background: "var(--bg-header)", width: "100%" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3" }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}
                    >
                        <Box className="flex items-center">
                            <EventNoteIcon className='text-(--gray-clr) my-1' sx={{ fontSize: "var(--text-title)" }} />
                            <Typography component="span" sx={{ fontWeight: "bold", fontSize: "var(--text-title)", color: "var(--black-clr)" }} className='!ms-1'>
                                Contact List
                            </Typography>
                        </Box>
                    </AccordionSummary >
                    <AccordionDetails sx={{ px: { xs: 1, sm: 2 }, width: '100%', boxSizing: 'border-box' }}>

                        <div
                            style={{
                                width: '100%',
                                overflowX: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                display: 'block'
                            }}
                        >
                            <Table sx={{ minWidth: 700, width: '100%' }} aria-label="scrollable table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ width: "8%", color: "var(--black-clr)", whiteSpace: 'nowrap' }} className='!font-bold'>Sr.No</TableCell>
                                        <TableCell align="left" sx={{ width: "35%", fontWeight: "bold", color: "var(--black-clr)", whiteSpace: 'nowrap' }}>Title</TableCell>
                                        <TableCell align="left" sx={{ width: "15%", fontWeight: "bold", color: "var(--black-clr)", whiteSpace: 'nowrap' }}>Status</TableCell>
                                        <TableCell align="left" sx={{ width: "20%", fontWeight: "bold", color: "var(--black-clr)", whiteSpace: 'nowrap' }}>Modified</TableCell>
                                        <TableCell align="right" sx={{ width: "22%", fontWeight: "bold", color: "var(--black-clr)", whiteSpace: 'nowrap' }}>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {visibleRows.length > 0 ? (
                                        visibleRows.map((content, index) => (
                                            <TableRow
                                                key={content.id || index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" sx={{ color: "var(--gray-clr)", fontSize: "var(--text-body)", whiteSpace: 'nowrap' }}>
                                                    {page * itemsPerPage + index + 1}
                                                </TableCell>
                                                <TableCell align="left" sx={{ color: "var(--gray-clr)", fontSize: "var(--text-body)", whiteSpace: 'nowrap' }}>
                                                    {editContentId === content.id ? (
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            value={editContentForm.title}
                                                            onChange={handleChange}
                                                            className="border p-1 rounded bg-transparent w-full min-w-[160px]"
                                                        />
                                                    ) : (
                                                        content.title
                                                    )}
                                                </TableCell>
                                                <TableCell align="left" sx={{ color: "var(--gray-clr)", fontSize: "var(--text-body)", whiteSpace: 'nowrap' }}>
                                                    {editContentId === content.id ? (
                                                        <input
                                                            type="text"
                                                            name="status"
                                                            value={editContentForm.status}
                                                            onChange={handleChange}
                                                            className="border p-1 rounded bg-transparent w-full max-w-[120px]"
                                                        />
                                                    ) : (
                                                        content.status
                                                    )}
                                                </TableCell>
                                                <TableCell align="left" sx={{ color: "var(--gray-clr)", whiteSpace: 'nowrap' }}>
                                                    {editContentId === content.id ? (
                                                        <input
                                                            type="date"
                                                            name="publishDate"
                                                            value={editContentForm.publishDate}
                                                            onChange={handleChange}
                                                            className="border p-1 rounded bg-transparent w-full max-w-[140px]"
                                                        />
                                                    ) : (
                                                        content.publishDate
                                                    )}
                                                </TableCell>
                                                <TableCell align="right" sx={{ color: "var(--gray-clr)", fontSize: "var(--text-body)", whiteSpace: 'nowrap' }}>
                                                    {editContentId === content.id ? (
                                                        <span className="inline-flex items-center">
                                                            <span style={{ cursor: 'pointer' }}>
                                                                <SaveIcon onClick={() => handleSaveContent(content.id)} fontSize='medium' className='bg-[green] text-white rounded-sm !mx-1 !font-bold' />
                                                            </span>
                                                            <span style={{ cursor: 'pointer' }}>
                                                                <CancelIcon onClick={() => setEditContentId(null)} fontSize='medium' className='bg-[gray] text-white rounded-sm !mx-1 !font-bold' />
                                                            </span>
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center">
                                                            <span style={{ cursor: 'pointer' }}>
                                                                <EditIcon onClick={() => { handleEditContent(content) }} fontSize='medium' className='bg-[#FE8024] text-white rounded-sm !mx-1 !font-bold' />
                                                            </span>
                                                            <span style={{ cursor: 'pointer' }}>
                                                                <DeleteIcon onClick={() => { handleDelContent(content.id) }} fontSize='medium' className='bg-[red] text-white rounded-sm !mx-1 !px-1 !font-bold' />
                                                            </span>
                                                        </span>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        // No Match Found Condition Row
                                        <TableRow>
                                            <TableCell colSpan={5} align="center" sx={{ py: 4, color: "var(--gray-clr)", fontSize: "var(--text-body)" }}>
                                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                    No match found
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>

                        {/* pagination */}
                        <Box className="!flex !border-(--border-grey)" sx={{ width: '100%', mt: 2, background: "var(--bg-header)", overflowX: "auto" }}>
                            <CustomPagination
                                totalItems={filteredContents.length}
                                page={page}
                                setPage={setPage}
                                visibleItemsCount={visibleRows.length}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion >
            </div >
        </>
    )
}
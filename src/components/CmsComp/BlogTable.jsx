import React, { useEffect, useState, useMemo } from 'react'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CustomPagination from "./CustomPagination";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EditIcon from '@mui/icons-material/EditNoteRounded';
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import SaveIcon from '@mui/icons-material/DoneRounded';
import CancelIcon from '@mui/icons-material/CloseRounded';

export default function BlogTable({ filterTitle = '', filterStatus = '', filterDate = '' }) {
    const id = React.useId();

    const [blogs, setBlogs] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({ title: "", status: "", publishDate: "" })

    const defaultBlogs = [
        { id: 1, title: "Title of first blog post entry", status: "Published", publishDate: "2026-02-18" },
        { id: 2, title: "Why Go For A VFX Course?", status: "Published", publishDate: "2026-03-02" },
        { id: 3, title: "Reasons To Choose Animation Courses", status: "Published", publishDate: "2026-04-03" },
        { id: 4, title: "Blue Screen Vs. Green Screen For VFX", status: "Published", publishDate: "2026-05-04" },
        { id: 5, title: "All About Animation", status: "Published", publishDate: "2026-06-05" }
    ];

    useEffect(() => {
        const storedBlog = localStorage.getItem("BlogData");
        if (storedBlog) {
            setBlogs(JSON.parse(storedBlog))
        } else {
            setBlogs(defaultBlogs)
            localStorage.setItem("BlogData", JSON.stringify(defaultBlogs));
        }
    }, [])

    const handleDelBlog = (id) => {
        const delBlog = blogs.filter((blog) => blog.id !== id)
        setBlogs(delBlog);
        localStorage.setItem("BlogData", JSON.stringify(delBlog));
    }

    const handleEditBlog = (blog) => {
        setEditForm({ title: blog.title, status: blog.status, publishDate: blog.publishDate });
        setEditId(blog.id);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value })
    }

    const handleSaveBlog = (blogId) => {
        const UpdatedBlog = blogs.map((blog) => {
            if (blog.id === blogId) {
                return ({ ...blog, ...editForm })
            }
            return blog;
        })
        setBlogs(UpdatedBlog);
        localStorage.setItem("BlogData", JSON.stringify(UpdatedBlog));
        setEditId(null);
    }

    const filteredBlogs = useMemo(() => {
        return blogs.filter((blog) => {
            const matchesTitle = blog.title.toLowerCase().includes(filterTitle.toLowerCase());
            const matchesStatus = filterStatus ? blog.status.toLowerCase() === filterStatus.toLowerCase() : true;
            const matchesDate = filterDate ? blog.publishDate === filterDate : true;
            return matchesTitle && matchesStatus && matchesDate;
        });
    }, [blogs, filterTitle, filterStatus, filterDate]);

    const [page, setPage] = useState(0);
    const itemsPerPage = 6;

    const visibleRows = useMemo(() => {
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredBlogs.slice(start, end);
    }, [page, filteredBlogs]);

    return (
        <>
            <div className='my-5 w-full overflow-hidden'>
                <Accordion defaultExpanded sx={{ background: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3" }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}
                    >
                        <Box>
                            <EventNoteIcon className='text-(--gray-clr) my-1' sx={{ fontSize: "var(--text-title)" }} />
                            <Typography component="span" sx={{ fontWeight: "bold", fontSize: "var(--text-title)", color: "var(--black-clr)" }} className='!ms-1'>Blog List</Typography>
                        </Box>
                    </AccordionSummary >
                    <AccordionDetails className="!px-2 sm:!px-4">
                        {filteredBlogs.length === 0 ? (
                            <div className="py-4 text-center" style={{ color: "var(--gray-clr)", fontSize: "var(--text-body)" }}>
                                No Blogs Found Matching Criteria
                            </div>
                        ) : (
                            <>
                                <div className="w-full overflow-x-auto">
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ width: "8%", color: "var(--black-clr)" }} className='!font-bold'>Sr.No</TableCell>
                                                <TableCell align="left" sx={{ width: "42%", fontWeight: "bold", color: "var(--black-clr)" }}>Title</TableCell>
                                                <TableCell align="left" sx={{ width: "15%", fontWeight: "bold", color: "var(--black-clr)" }}>Status</TableCell>
                                                <TableCell align="left" sx={{ width: "15%", fontWeight: "bold", color: "var(--black-clr)" }}>Modified</TableCell>
                                                <TableCell align="right" sx={{ width: "20%", fontWeight: "bold", color: "var(--black-clr)" }}>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {visibleRows?.map((blog, index) => (
                                                <TableRow
                                                    key={blog.id || index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" sx={{ color: "var(--gray-clr)", fontSize: "var(--text-body)" }}>
                                                        {page * itemsPerPage + index + 1}
                                                    </TableCell>
                                                    <TableCell align="left" sx={{ color: "var(--gray-clr)", fontSize: "var(--text-body)" }}>
                                                        {editId === blog.id ? (
                                                            <input
                                                                type="text"
                                                                name="title"
                                                                value={editForm.title}
                                                                onChange={handleChange}
                                                                className="border p-1 rounded w-full"
                                                            />
                                                        ) : (
                                                            blog.title
                                                        )}
                                                    </TableCell>
                                                    <TableCell align="left" sx={{ color: "var(--gray-clr)", fontSize: "var(--text-body)" }}>
                                                        {editId === blog.id ? (
                                                            <input
                                                                type="text"
                                                                name="status"
                                                                value={editForm.status}
                                                                onChange={handleChange}
                                                                className="border p-1 rounded w-full"
                                                            />
                                                        ) : (
                                                            blog.status
                                                        )}
                                                    </TableCell>
                                                    <TableCell align="left" sx={{ color: "var(--gray-clr)" }}>
                                                        {editId === blog.id ? (
                                                            <input
                                                                type="date"
                                                                name="publishDate"
                                                                value={editForm.publishDate}
                                                                onChange={handleChange}
                                                                className="border p-1 rounded"
                                                            />
                                                        ) : (
                                                            blog.publishDate
                                                        )}
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ color: "var(--gray-clr)", fontSize: "var(--text-body)" }}>
                                                        {editId === blog.id ? (
                                                            <>
                                                                <span style={{ cursor: 'pointer' }}>
                                                                    <SaveIcon onClick={() => handleSaveBlog(blog.id)} fontSize='medium' className='bg-[green] text-white rounded-sm !mx-1 !font-bold' />
                                                                </span>
                                                                <span style={{ cursor: 'pointer' }}>
                                                                    <CancelIcon onClick={() => setEditId(null)} fontSize='medium' className='bg-[gray] text-white rounded-sm !mx-1 !font-bold' />
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span style={{ cursor: 'pointer' }}>
                                                                    <EditIcon onClick={() => { handleEditBlog(blog) }} fontSize='medium' className='bg-[#FE8024] text-white rounded-sm !mx-1 !font-bold' />
                                                                </span>
                                                                <span style={{ cursor: 'pointer' }}>
                                                                    <DeleteIcon onClick={() => { handleDelBlog(blog.id) }} fontSize='medium' className='bg-[red] text-white rounded-sm !mx-1 !px-1 !font-bold' />
                                                                </span>
                                                            </>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>

                                <Box className="!flex !border-(--border-grey)" sx={{ width: '100%', mt: 2, overflowX: 'auto' }}>
                                    <CustomPagination
                                        totalItems={filteredBlogs.length}
                                        page={page}
                                        setPage={setPage}
                                        visibleItemsCount={visibleRows.length}
                                    />
                                </Box>
                            </>
                        )}
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}
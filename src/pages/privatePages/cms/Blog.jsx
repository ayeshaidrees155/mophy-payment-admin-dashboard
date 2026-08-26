import React, { useState } from 'react'
import Path from '../../../components/CmsComp/Path'
import TitleForm from "../../../components/CmsComp/titleForm"
import Wrapper from '../../Wrapper'
import BlogTable from '../../../components/CmsComp/BlogTable'
import { Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

export default function Blog() {
    // Filter states
    const [filterTitle, setFilterTitle] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [filterDate, setFilterDate] = useState('');

    // Handle Remove Filter
    const handleRemoveFilter = () => {
        setFilterTitle('');
        setFilterStatus('');
        setFilterDate('');
    };

    return (
        <Wrapper>
            <Path mainpath="CMS" path="Blog" />

            {/* 1. Filter Form */}
            <div>
                <TitleForm
                    filterTitle={filterTitle}
                    setFilterTitle={setFilterTitle}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                    filterDate={filterDate}
                    setFilterDate={setFilterDate}
                    handleRemoveFilter={handleRemoveFilter}
                />
            </div>

            {/* 2. Add Blog Button - TitleForm aur Table ke darmiyan */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', my: 2 }}>
                <Button
                    component={Link}
                    to='/addBlog'
                    variant='contained'

                    sx={{
                        background: "var(--blue-clr)",
                        color: "white",
                        textTransform: "none",
                        fontSize: "var(--text-title)",
                        boxShadow: 'none'
                    }}
                >
                    Add Blog
                </Button>
            </Box>

            {/* 3. Blog Table */}
            <div>
                <BlogTable
                    filterTitle={filterTitle}
                    filterStatus={filterStatus}
                    filterDate={filterDate}
                />
            </div>
        </Wrapper>
    )
}
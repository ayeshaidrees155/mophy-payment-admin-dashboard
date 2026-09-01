import React, { useState } from 'react'
import Path from '../../../components/CmsComp/Path'
import TitleForm from "../../../components/CmsComp/titleForm"
import Wrapper from '../../Wrapper'
import BlogTable from '../../../components/CmsComp/BlogTable'
import { Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

export default function Blog() {
    const [filterTitle, setFilterTitle] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [filterDate, setFilterDate] = useState('');

    const handleRemoveFilter = () => {
        setFilterTitle('');
        setFilterStatus('');
        setFilterDate('');
    };

    return (
        <Wrapper>
            <Path mainpath="CMS" path="Blog" />

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
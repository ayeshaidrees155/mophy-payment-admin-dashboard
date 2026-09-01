import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function TitleForm({
    filterTitle,
    setFilterTitle,
    filterStatus,
    setFilterStatus,
    filterDate,
    setFilterDate,
    handleRemoveFilter
}) {
    const id = React.useId();

    return (
        <div className='my-5 w-full'>
            <Accordion defaultExpanded sx={{ background: "var(--bg-header)", width: "100%" }}>
                <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-panel1-content`}
                    id={`${id}-panel1-header`}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FilterAltIcon className='text-(--gray-clr)' sx={{ fontSize: "var(--text-title)" }} />
                        <Typography component="span" sx={{ fontWeight: "bold", fontSize: "var(--text-title)", color: "var(--black-clr)" }}>Filter</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2, sm: 3 } }}>
                    <Box sx={{ width: '100%' }}>
                        <Stack
                            className='my-3'
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: "20px",
                                flexWrap: "wrap",
                                alignItems: { xs: "stretch", md: "flex-end" },
                                justifyContent: "space-between"
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row" }, gap: "20px", flexWrap: 'wrap', flex: 1 }}>

                                <Box className="flex flex-col" sx={{ flex: { sm: '1 1 200px' }, minWidth: { xs: '100%', sm: '180px' } }}>
                                    <label className='mb-1' style={{ fontSize: "var(--text-body)", color: "var(--black-clr)" }}>Title</label>
                                    <input
                                        type='text'
                                        placeholder='Title'
                                        value={filterTitle}
                                        onChange={(e) => setFilterTitle(e.target.value)}
                                        className='border border-gray-200 p-2 rounded-md focus:outline-none bg-transparent w-full text-base md:text-[length:var(--text-body)]'
                                        style={{ color: "var(--gray-clr)", height: '38px', boxSizing: 'border-box' }}
                                    />
                                </Box>

                                <Box className="flex flex-col" sx={{ flex: { sm: '1 1 180px' }, minWidth: { xs: '100%', sm: '160px' } }}>
                                    <label className='mb-1' style={{ fontSize: "var(--text-body)", color: "var(--black-clr)" }}>Status</label>
                                    <select
                                        id='status'
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                        className='border border-gray-200 p-2 rounded-md focus:outline-none bg-transparent w-full text-base md:text-[length:var(--text-body)]'
                                        style={{ color: "var(--gray-clr)", height: '38px', boxSizing: 'border-box' }}
                                    >
                                        <option value="" style={{ color: '#000' }}>Select Status</option>
                                        <option value="Published" style={{ color: '#000' }}>Published</option>
                                        <option value="Draft" style={{ color: '#000' }}>Draft</option>
                                        <option value="Trash" style={{ color: '#000' }}>Trash</option>
                                        <option value="Private" style={{ color: '#000' }}>Private</option>
                                        <option value="Pending" style={{ color: '#000' }}>Pending</option>
                                    </select>
                                </Box>

                                <Box className="flex flex-col" sx={{ flex: { sm: '1 1 200px' }, minWidth: { xs: '100%', sm: '180px' } }}>
                                    <label className='mb-1' style={{ fontSize: "var(--text-body)", color: "var(--black-clr)" }}>Date</label>
                                    <input
                                        type="date"
                                        value={filterDate}
                                        onChange={(e) => setFilterDate(e.target.value)}
                                        className='border border-gray-200 p-2 rounded-md focus:outline-none bg-transparent w-full text-base md:text-[length:var(--text-body)]'
                                        style={{ color: "var(--gray-clr)", height: '38px', boxSizing: 'border-box' }}
                                    />
                                </Box>
                            </Box>

                            <Box
                                className="flex"
                                sx={{
                                    flexDirection: { xs: 'row', sm: 'row' },
                                    gap: 1.5,
                                    alignItems: 'flex-end',
                                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                                    mt: { xs: 1, md: 0 }
                                }}
                            >
                                <Button
                                    variant='contained'
                                    startIcon={<FilterAltIcon />}
                                    sx={{
                                        fontSize: "var(--text-body)",
                                        backgroundColor: "var(--blue-clr)",
                                        textTransform: "none",
                                        boxShadow: 'none',
                                        height: '38px',
                                        px: 2.5
                                    }}
                                >
                                    Filter
                                </Button>

                                <Button
                                    variant='contained'
                                    onClick={handleRemoveFilter}
                                    size="small"
                                    sx={{
                                        fontSize: "var(--text-body)",
                                        backgroundColor: "#FFD5D5",
                                        border: "1px solid red",
                                        textTransform: "none",
                                        color: "red",
                                        boxShadow: 'none',
                                        height: '38px',
                                        px: 2,
                                        "&:hover": {
                                            backgroundColor: "red",
                                            color: "white"
                                        }
                                    }}
                                >
                                    Remove Filter
                                </Button>
                            </Box>

                        </Stack>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
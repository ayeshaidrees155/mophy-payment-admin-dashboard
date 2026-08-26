import React from 'react'
import Wrapper from '../../Wrapper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import VerticalAlignBottomSharpIcon from '@mui/icons-material/VerticalAlignBottomSharp';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import TransTable from "../../../components/DasboardComp/TransTable"

export default function Transaction() {
    return (
        <Wrapper>
            {/* header section */}
            <Box className="!bg-(--bg-header) p-4 my-5 rounded-md shadow-sm">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 2, md: 4 }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'stretch', md: 'center' }}
                >
                    {/* Title */}
                    <Box>
                        <Typography variant='h5' className='!font-bold text-(--black-clr)'>
                            Transactions History
                        </Typography>
                    </Box>

                    {/* Action Buttons Stack (Pushed to flex-end on medium/large screens) */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1.5}
                        alignItems="center"
                        justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
                        sx={{ flexWrap: 'wrap', gap: { xs: 1.5, sm: 0 } }}
                    >
                        {/* btn1: Orange Card */}
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                background: "white",
                                textTransform: "none",
                                fontSize: "var(--text-title)",
                                color: "var(--gray-clr)",
                                boxShadow: 'none',
                                borderRadius: '8px',
                                '&:hover': { background: '#f5f5f5' }
                            }}
                            startIcon={<FiberManualRecordSharpIcon sx={{ color: "#FF7426", fontSize: "large" }} />}
                            endIcon={<ArrowDropDownOutlinedIcon className='!text-(--blue-clr)' />}
                        >
                            Orange Card
                        </Button>

                        {/* btn2: Download Report */}
                        <Button
                            variant="contained"
                            size='large'
                            sx={{
                                background: "var(--blue-clr)",
                                textTransform: "none",
                                fontSize: "var(--text-title)",
                                boxShadow: 'none',
                                borderRadius: '8px',
                                '&:hover': { background: '#0b5ed7' }
                            }}
                            startIcon={<VerticalAlignBottomSharpIcon />}
                        >
                            Download Report
                        </Button>

                        {/* btn3: Filter Date */}
                        <Button
                            variant="contained"
                            size='large'
                            sx={{
                                background: "white",
                                textTransform: "none",
                                color: "var(--black-clr)",
                                fontSize: "var(--text-title)",
                                boxShadow: 'none',
                                borderRadius: '8px',
                                border: '1px solid #e0e0e0',
                                '&:hover': { background: '#f5f5f5' }
                            }}
                            startIcon={<CalendarMonthOutlinedIcon />}
                            endIcon={<ArrowDropDownOutlinedIcon className='!text-(--blue-clr)' />}
                        >
                            Filter Date
                        </Button>
                    </Stack>
                </Stack>
            </Box>

            {/* tablesec */}
            <Box className="!overflow-x-auto">
                <TransTable />
            </Box>
        </Wrapper>
    )
}
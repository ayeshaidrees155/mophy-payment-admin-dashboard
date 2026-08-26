import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// table
import Ptable from "./Ptable"

export default function PaymentTable() {
    return (
        <Box className="!mt-10 w-full">
            <Stack className="!mt-5 !flex !flex-col sm:!flex-row sm:!items-center !justify-between !gap-4">
                <Box>
                    <Typography className='!font-semibold !text-md !text-[var(--black-clr)]'>
                        Payment History
                    </Typography>
                    <Typography className='!text-xs !my-1 !text-[var(--gray-clr)]'>
                        Lorem ipsum dolor sit amet, consectetur
                    </Typography>
                </Box>

                <Box className="self-start sm:self-auto">
                    <Button
                        variant='contained'
                        size='medium'
                        sx={{
                            background: "var(--blue-clr)",
                            textTransform: "none",
                            fontSize: "var(--text-title)"
                        }}
                        startIcon={<CalendarMonthOutlinedIcon />}
                        endIcon={<ArrowDropDownOutlinedIcon />}
                    >
                        Filter Data
                    </Button>
                </Box>
            </Stack>

            {/* table */}
            <Box className="overflow-x-auto w-full mt-5">
                <Ptable />
            </Box>
        </Box>
    )
}
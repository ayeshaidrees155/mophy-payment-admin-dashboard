import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

import Avatar from '@mui/material/Avatar'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function InvoiceCard() {
    const cardData = [
        { id: 1, amount: "582", title: "Total Invoices", icon: <ReceiptLongIcon sx={{ color: "gray" }} fontSize='large' /> },
        { id: 2, amount: "342", title: "Paid Invoices", icon: <CheckCircleOutlineOutlinedIcon sx={{ color: "green" }} fontSize='large' /> },
        { id: 3, amount: "246", title: "Unpaid", icon: <CancelOutlinedIcon sx={{ color: "red" }} fontSize='large' /> },
        { id: 4, amount: "582", title: "Total Invoices", icon: <ReceiptLongIcon sx={{ color: "gray" }} fontSize='large' /> },
    ]

    return (
        <Box className="my-5 w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cardData?.map((item) => (
                    <Card key={item.id}
                        className="!bg-[var(--bg-header)] !rounded-lg shadow-sm w-full">
                        <CardContent className='!flex !flex-row !items-center !justify-between !h-full p-4'>
                            <Box className="!w-[60%]">
                                <Typography variant='h5' className='!font-bold !my-1 !text-[var(--black-clr)]'>
                                    {item.amount}
                                </Typography>
                                <Typography variant="body2" className='!text-[var(--gray-clr)]'>
                                    {item.title}
                                </Typography>
                            </Box>
                            <Box className="!w-[40%] !flex !items-center !justify-end">
                                <Avatar sx={{ background: "none", border: "1px solid #d7d3d3", width: "55px", height: "55px" }}>
                                    {item.icon}
                                </Avatar>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Box>
    )
}
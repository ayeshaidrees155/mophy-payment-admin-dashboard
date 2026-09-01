import React from 'react'
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'

export default function Path({ mainpath, path }) {
    return (
        <Box className="bg-(--bg-header) px-4 py-3 rounded-md w-full shadow-sm !mx-0">
            <Typography className='text-(--gray-clr) text-sm font-medium'>
                {mainpath} <span className='text-(--blue-clr) font-bold'>/ {path}</span>
            </Typography>
        </Box>
    )
}
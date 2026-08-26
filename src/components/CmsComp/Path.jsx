import React from 'react'
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'

export default function Path({ mainpath, path }) {
    return (
        <Box className="bg-(--bg-header) p-4 !my-2 rounded-md">
            <Typography className='text-(color:--gray-clr) !text-(size:--text-title)'> {mainpath} <span className='text-(--blue-clr) font-bold'>/ {path}</span> </Typography>
        </Box>
    )
}

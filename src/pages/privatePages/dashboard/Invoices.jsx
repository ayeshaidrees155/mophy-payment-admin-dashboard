import React from 'react'
import Wrapper from '../../Wrapper'
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import InvoiceCard from '../../../components/DasboardComp/InvoiceCard';
import PaymentTable from '../../../components/DasboardComp/PaymentTable';

export default function Invoices() {
    return (
        <Wrapper>
            <Box>
                <Typography variant='h5' className='!font-bold text-(--black-clr)'>Invoices</Typography>
            </Box>
            <div><InvoiceCard /></div>
            <div><PaymentTable /></div>
        </Wrapper>
    )
}

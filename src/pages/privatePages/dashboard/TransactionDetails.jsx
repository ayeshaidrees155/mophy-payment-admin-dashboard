import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Wrapper from '../../Wrapper';
import TransReceipt from '../../../components/DasboardComp/TransReceipt';
import BalanceCard from '../../../components/DasboardComp/BalanceCard';
import { rows } from "../../../data/transactionsData";

export default function TransactionDetails() {
    const { id } = useParams();

    // Find transaction or fallback to a default/first transaction if ID doesn't exist
    const foundTransaction = rows.find(item => item.id === id || item.id === decodeURIComponent(id));

    const defaultFallbackTransaction = {
        id: "#00123521",
        date: "June 1, 2020, 08:22 AM",
        paymentMethod: "MasterCard 404",
        invoiceDate: "April 29, 2020",
        dueDate: "June 5, 2020",
        datePaid: "June 4, 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        receipent: {
            img: "/src/assets/25.png",
            store: "Samuel Bro",
            email: "info@example.com",
            phone: "+91 123-456-7890"
        },
        status: "Completed"
    };

    const selectedTransaction = foundTransaction || defaultFallbackTransaction;

    return (
        <Wrapper>
            <Box className="bg-white p-4 rounded-md" sx={{ color: "var(--black-clr)", background: "var(--bg-header)" }}>
                <Typography variant='h5' className='!font-bold'>
                    Transactions Details
                </Typography>
                <Typography className='!text-[var(--blue-clr)] !font-semibold !mt-2'>
                    Transactions /<span className='text-[var(--gray-clr)] !font-thin'> {selectedTransaction.id}</span>
                </Typography>
            </Box>

            {/* Fully Responsive Layout: Stacks on mobile/tablet, side-by-side on large screens */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between h-auto mt-5 gap-5'>
                <div className='w-full lg:w-[60%] h-full bg-[var(--bg-header)] text-[var(--black-clr)] rounded-lg mt-3'>
                    <TransReceipt transactionData={selectedTransaction} />
                </div>
                <div className='w-full lg:w-[40%] h-full'>
                    <BalanceCard />
                </div>
            </div>
        </Wrapper>
    );
}
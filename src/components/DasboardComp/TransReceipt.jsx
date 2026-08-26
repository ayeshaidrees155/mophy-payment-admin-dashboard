import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function TransReceipt({ transactionData }) {
  // Ensure ID starts with a single '#' neatly without duplicating
  const formattedId = transactionData?.id
    ? `#${transactionData.id.replace(/^#+/, '')}`
    : "#00123521";

  return (
    <Box className="p-6 rounded-xl shadow-sm border border-gray-100" sx={{ background: "var(--bg-header)", color: "var(--black-clr)" }}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-1">
            ID Payment
          </span>
          <Typography variant="h4" className="!font-bold tracking-tight" sx={{ color: "var(--black-clr)" }}>
            {formattedId}
          </Typography>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outlined"
            startIcon={<PrintIcon />}
            className="!border-gray-200 hover:!bg-gray-50 !normal-case !font-medium !rounded-lg !px-4 !py-2"
            sx={{ color: "var(--black-clr)" }}
          >
            Print
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            className="!bg-[var(--blue-clr)] hover:!bg-blue-600 !text-white !normal-case !font-medium !rounded-lg !px-4 !py-2 !shadow-none"
          >
            Download Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-b border-gray-100 text-sm">
        <div>
          <span className="text-gray-400 text-xs block mb-1">Payment Method</span>
          <span className="font-semibold block" style={{ color: "var(--black-clr)" }}>{transactionData?.paymentMethod || "MasterCard 404"}</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs block mb-1">Invoice Date</span>
          <span className="font-semibold block" style={{ color: "var(--black-clr)" }}>{transactionData?.invoiceDate || "April 29, 2020"}</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs block mb-1">Due Date</span>
          <span className="font-semibold block" style={{ color: "var(--black-clr)" }}>{transactionData?.dueDate || "June 5, 2020"}</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs block mb-1">Date Paid</span>
          <span className="font-semibold block" style={{ color: "var(--black-clr)" }}>{transactionData?.datePaid || "June 4, 2020"}</span>
        </div>
      </div>

      <div className="py-6 border-b border-gray-100">
        <div className="bg-[var(--bg-body)] p-4 rounded-xl border border-gray-100 flex gap-3 text-sm leading-relaxed" style={{ color: "var(--black-clr)" }}>
          <InfoOutlinedIcon className="text-gray-400 text-base mt-0.5 shrink-0" />
          <p color='text-(--black-clr)'>
            {transactionData?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          </p>
        </div>
      </div>

      <div className="pt-6">
        <Typography variant="h6" className="!font-bold mb-4" sx={{ color: "var(--black-clr)" }}>
          Recipients
        </Typography>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-100 rounded-xl gap-4 shadow-2xs" style={{ background: "var(--bg-header)" }}>
          <div className="flex items-center gap-3.5">
            <Avatar
              src={transactionData?.receipent?.img}
              alt={transactionData?.receipent?.store}
              sx={{ width: 48, height: 48 }}
            />
            <div>
              <Typography className="!font-bold text-base" sx={{ color: "var(--black-clr)" }}>
                {transactionData?.receipent?.store || "Samuel Bro"}
              </Typography>
              <Typography variant="body2" className="text-gray-400 text-xs mt-0.5">
                {transactionData?.receipent?.email || "info@example.com"}
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[var(--bg-header)] px-4 py-2.5 rounded-xl border border-gray-100 w-full sm:w-auto">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[var(--blue-clr)] !bg-[var(--bg-header)]">
              <PhoneIcon className="text-sm " />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-medium block uppercase tracking-wide ">Telephone</span>
              <span className="text-xs font-bold" style={{ color: "var(--blue-clr)" }}>{transactionData?.receipent?.phone || "+91 123-456-7890"}</span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
import React from 'react';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import MessageIcon from '@mui/icons-material/MessageOutlined';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Message() {
    return (
        <CartBadge
            badgeContent={5}
            overlap="circular"
            slotProps={{
                badge: { className: 'bg-(--blue-clr) text-white w-1 p-2 my-3 rounded-full' }
            }}
        >
            <MessageIcon fontSize="small" className='text-black' />
        </CartBadge>
    );
}
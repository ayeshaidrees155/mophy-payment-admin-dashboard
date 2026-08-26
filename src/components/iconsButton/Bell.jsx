import React from 'react';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Bell() {
    return (
        <CartBadge
            badgeContent={12}
            overlap="circular"
            slotProps={{
                badge: { className: 'bg-(--blue-clr) text-white w-1 p-2 my-3 rounded-full' }
            }}
        >
            <NotificationIcon fontSize="small" className='text-black' />
        </CartBadge>
    );
}
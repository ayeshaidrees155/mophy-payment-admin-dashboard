import React from 'react';
import { Menu, MenuItem, Box, Typography, Avatar, Divider, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function NotificationMenu({ anchorEl, open, handleClose }) {
    // Dummy Data
    const notifications = [
        { id: 1, name: 'Dr sultads', text: 'Send you Photo', time: '29 July 2020 - 02:26 PM', avatar: '/src/assets/n1.jpg' },
        { id: 2, name: 'Report', text: 'created successfully', time: '29 July 2020 - 02:26 PM', bg: '#D4F7DF', initials: 'KG' },
        { id: 3, name: 'Reminder', text: 'Treatment Time!', time: '29 July 2020 - 02:26 PM', bg: '#D4F7DF', initials: 'H' },
        { id: 4, name: 'Dr sultads', text: 'Send you Photo', time: '29 July 2020 - 02:26 PM', avatar: '/src/assets/n1.jpg' },
        { id: 5, name: 'Report', text: 'created successfully', time: '29 July 2020 - 02:26 PM', bg: '#E0D7FF', initials: 'KG' },
        { id: 6, name: 'Reminder', text: 'Treatment Time!', time: '29 July 2020 - 02:26 PM', bg: '#D4F7DF', initials: 'H' },
        { id: 7, name: 'Dr sultads', text: 'Send you Photo', time: '29 July 2020 - 02:26 PM', avatar: '/src/assets/n1.jpg' },
        { id: 8, name: 'Report', text: 'created successfully', time: '29 July 2020 - 02:26 PM', bg: '#E0D7FF', initials: 'KG' },
        { id: 9, name: 'Reminder', text: 'Treatment Time!', time: '29 July 2020 - 02:26 PM', bg: '#D4F7DF', initials: 'H' },
        { id: 10, name: 'Dr sultads', text: 'Send you Photo', time: '29 July 2020 - 02:26 PM', avatar: '/src/assets/n1.jpg' },
        { id: 11, name: 'Report', text: 'created successfully', time: '29 July 2020 - 02:26 PM', bg: '#E0D7FF', initials: 'KG' },
        { id: 12, name: 'Reminder', text: 'Treatment Time!', time: '29 July 2020 - 02:26 PM', bg: '#D4F7DF', initials: 'H' },
    ];

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            MenuListProps={{
                sx: { py: 0, bgcolor: 'var(--bg-header)' }
            }}
            PaperProps={{
                sx: {
                    width: 320,
                    borderRadius: 3,
                    boxShadow: '0px 8px 24px rgba(0,0,0,0.1)',
                    mt: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    bgcolor: 'var(--bg-header)',
                    backgroundImage: 'none',
                },
            }}
        >
            {/* Notifications Scrollable Container with custom scrollbar */}
            <Box sx={{ maxHeight: '360px', overflowY: 'auto', bgcolor: 'var(--bg-header)' }} className="custom-scrollbar">
                {notifications.map((notif, index) => (
                    <Box key={notif.id} sx={{ bgcolor: 'var(--bg-header)' }}>
                        <MenuItem sx={{ py: 1.5, display: 'flex', gap: 2, alignItems: 'center', bgcolor: 'var(--bg-header)' }}>
                            {notif.avatar ? (
                                <Avatar src={notif.avatar} sx={{ width: 40, height: 40 }} />
                            ) : (
                                <Avatar sx={{ width: 40, height: 40, bgcolor: notif.bg, color: 'var(--black-clr)', fontSize: 14 }}>
                                    {notif.initials}
                                </Avatar>
                            )}
                            <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--black-clr)' }}>
                                    {notif.name} <span style={{ fontWeight: 600 }}>{notif.text}</span>
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'var(--gray-clr)', display: 'block', mt: 0.5 }}>
                                    {notif.time}
                                </Typography>
                            </Box>
                        </MenuItem>
                        {index < notifications.length - 1 && <Divider sx={{ my: 0, borderColor: 'rgba(255, 255, 255, 0.08)' }} />}
                    </Box>
                ))}
            </Box>

            {/* Fixed Footer Button */}
            <Box sx={{ p: 1, textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', bgcolor: 'var(--bg-header)' }}>
                <Button
                    size="small"
                    endIcon={<ArrowForwardIcon fontSize="small" />}
                    sx={{ textTransform: 'none', color: 'var(--blue-clr)', fontWeight: 600 }}
                >
                    See all notifications
                </Button>
            </Box>
        </Menu>
    );
}

export default NotificationMenu;
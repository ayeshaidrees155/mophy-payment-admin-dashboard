import React, { useState } from 'react';
import { Drawer, Box, Tabs, Tab, Typography, Avatar, IconButton, Divider } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Inbox({ open, handleClose }) {
    const [activeTab, setActiveTab] = useState(0);

    // Chat Tab Data
    const chatData = [
        {
            letter: 'A',
            users: [
                { name: 'Archie Parker', text: 'Kalid is online', status: 'online' },
                { name: 'Alfie Mason', text: 'Taherah left 7 mins ago', status: 'offline' },
                { name: 'AharlieKane', text: 'Sami is online', status: 'online' },
                { name: 'Athan Jacoby', text: 'Nargis left 30 mins ago', status: 'offline' }
            ]
        },
        {
            letter: 'B',
            users: [
                { name: 'Bashid Samim', text: 'Rashid left 50 mins ago', status: 'offline' },
                { name: 'Breddie Ronan', text: 'Kalid is online', status: 'online' }
            ]
        },
        {
            letter: 'G',
            users: [
                { name: 'George Carson', text: 'Taherah left 7 mins ago', status: 'offline' }
            ]
        }
    ];

    // Notes Tab Data
    const notesData = [
        { id: 1, title: 'New order placed..', date: '10 Aug 2020' },
        { id: 2, title: 'Youtube, a video-sh..', date: '10 Aug 2020' },
        { id: 3, title: 'john just buy your pr..', date: '10 Aug 2020' },
        { id: 4, title: 'Athan Jacoby', date: '10 Aug 2020' },
    ];

    // Alerts Tab Data
    const alertsData = [
        { type: 'SEVER STATUS', name: 'David Nester Birthday', text: 'Today', initials: 'KK', bg: 'rgba(0, 163, 255, 0.1)', color: 'var(--blue-clr)' },
        { type: 'SOCIAL', name: 'Perfection Simplified', text: 'Jame Smith commented on your status', initials: 'RU', bg: 'rgba(45, 206, 137, 0.1)', color: '#2dce89' },
        { type: 'SEVER STATUS', name: 'AharlieKane', text: 'Sami is online', initials: 'AU', bg: 'rgba(0, 163, 255, 0.1)', color: 'var(--blue-clr)' },
        { type: 'SEVER STATUS', name: 'Athan Jacoby', text: 'Nargis left 30 mins ago', initials: 'MO', bg: 'rgba(111, 66, 193, 0.1)', color: '#6f42c1' },
    ];

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    width: '700px !important',
                    minWidth: "700px !important",
                    backgroundColor: 'var(--bg-body)',
                    border: 'none',
                    height: '100vh',
                    color: 'var(--black-clr)',
                    overflowX: 'hidden',
                }
            }}
        >
            {/* Main Tabs Header */}
            <Box sx={{ bgcolor: 'var(--blue-clr)' }}>
                <Tabs
                    value={activeTab}
                    onChange={(e, val) => setActiveTab(val)}
                    textColor="inherit"
                    variant="fullWidth"
                    sx={{
                        '& .MuiTab-root': { color: 'rgba(255,255,255,0.7)', fontWeight: 600, py: 2, textTransform: 'uppercase', fontSize: '13px' },
                        '& .Mui-selected': { color: '#fff !important' },
                        '& .MuiTabs-indicator': { backgroundColor: '#fff', height: 3 }
                    }}
                >
                    <Tab label="Chat" />
                    <Tab label="Notes" />
                    <Tab label="Alerts" />
                </Tabs>
            </Box>

            {/* Container */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: "var(--bg-body)" }}>

                {/* 1. CHAT TAB PANEL */}
                {activeTab === 0 && (
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', bgcolor: 'var(--bg-body)' }}>
                        <Box sx={{ p: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton size="small" sx={{ bgcolor: 'var(--bg-header)', color: 'var(--black-clr)', borderRadius: 2, p: 0.8 }}><AddIcon fontSize="small" /></IconButton>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'var(--black-clr)' }}>Chat List</Typography>
                                <Typography variant="caption" sx={{ color: 'var(--gray-clr)', display: 'block' }}>Show All</Typography>
                            </Box>
                            <IconButton size="small" sx={{ color: 'var(--black-clr)' }}><MoreHorizIcon /></IconButton>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
                        <Box sx={{ flex: 1, overflowY: 'auto' }} className="custom-scrollbar">
                            {chatData.map((group) => (
                                <Box key={group.letter}>
                                    <Box sx={{ px: 2, py: 0.5, bgcolor: 'var(--bg-header)' }}>
                                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'var(--black-clr)' }}>{group.letter}</Typography>
                                    </Box>
                                    {group.users.map((user, idx) => (
                                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', p: 1.5, px: 2, gap: 2, bgcolor: 'var(--bg-body)', '&:hover': { bgcolor: 'var(--bg-header)', cursor: 'pointer' } }}>
                                            <Box sx={{ position: 'relative' }}>
                                                <Avatar sx={{ width: 40, height: 40 }} />
                                                <Box sx={{
                                                    position: 'absolute', bottom: 2, right: 2, width: 10, height: 10, borderRadius: '50%',
                                                    bgcolor: user.status === 'online' ? '#2dce89' : '#f5365c', border: '2px solid var(--bg-body)'
                                                }} />
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--black-clr)', fontSize: '13px' }}>{user.name}</Typography>
                                                <Typography variant="caption" sx={{ display: 'block', color: 'var(--gray-clr)' }}>{user.text}</Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {/* 2. NOTES TAB PANEL */}
                {activeTab === 1 && (
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', bgcolor: 'var(--bg-body)' }}>
                        <Box sx={{ p: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton size="small" sx={{ bgcolor: 'var(--bg-header)', color: 'var(--black-clr)', borderRadius: 2, p: 0.8 }}><AddIcon fontSize="small" /></IconButton>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'var(--black-clr)' }}>Notes</Typography>
                                <Typography variant="caption" sx={{ color: 'var(--gray-clr)', display: 'block' }}>Add New Notes</Typography>
                            </Box>
                            <IconButton size="small" sx={{ color: 'var(--black-clr)' }}><SearchIcon fontSize="small" /></IconButton>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
                        <Box sx={{ flex: 1, overflowY: 'auto', p: 1 }} className="custom-scrollbar">
                            {notesData.map((note) => (
                                <Box key={note.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--black-clr)', fontSize: '13px' }}>{note.title}</Typography>
                                        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: 'var(--gray-clr)' }}>{note.date}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <IconButton size="small" sx={{ bgcolor: 'var(--blue-clr)', color: '#fff', borderRadius: 1, p: 0.6, '&:hover': { opacity: 0.9 } }}><CreateIcon sx={{ fontSize: 14 }} /></IconButton>
                                        <IconButton size="small" sx={{ bgcolor: '#ff4d4d', color: '#fff', borderRadius: 1, p: 0.6, '&:hover': { bgcolor: '#e60000' } }}><DeleteIcon sx={{ fontSize: 14 }} /></IconButton>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {/* 3. ALERTS TAB PANEL */}
                {activeTab === 2 && (
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', width: '100%', bgcolor: 'var(--bg-body)' }}>
                        <Box sx={{ p: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton size="small" sx={{ color: 'var(--black-clr)' }}><MoreHorizIcon /></IconButton>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'var(--black-clr)' }}>Notifications</Typography>
                                <Typography variant="caption" sx={{ color: 'var(--gray-clr)', display: 'block' }}>Show All</Typography>
                            </Box>
                            <IconButton size="small" sx={{ color: 'var(--black-clr)' }}><SearchIcon fontSize="small" /></IconButton>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
                        <Box sx={{ flex: 1, overflowY: 'auto', width: '100%' }} className="custom-scrollbar">
                            {alertsData.map((alert, idx) => (
                                <Box key={idx} sx={{ width: '100%' }}>
                                    {/* Sub-header text */}
                                    {(idx === 0 || alertsData[idx - 1].type !== alert.type) && (
                                        <Box sx={{ px: 2, py: 0.5, bgcolor: 'var(--bg-header)' }}>
                                            <Typography variant="caption" sx={{ fontWeight: 800, color: 'var(--black-clr)', fontSize: '11px', letterSpacing: '0.5px' }}>{alert.type}</Typography>
                                        </Box>
                                    )}
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: 1.5,
                                        px: 2,
                                        gap: 2,
                                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                                        width: '100%',
                                        boxSizing: 'border-box',
                                        bgcolor: 'var(--bg-body)'
                                    }} >
                                        <Avatar sx={{ width: 40, height: 40, bgcolor: alert.bg, color: alert.color, fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>
                                            {alert.initials}
                                        </Avatar>
                                        <Box sx={{ minWidth: 0, flex: 1 }}>
                                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--black-clr)', fontSize: '13px' }} noWrap>
                                                {alert.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                noWrap
                                                sx={{
                                                    color: alert.text === 'Today' ? 'var(--blue-clr)' : 'var(--gray-clr)',
                                                    fontWeight: alert.text === 'Today' ? 600 : 400,
                                                    display: 'block'
                                                }}
                                            >
                                                {alert.text}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

            </Box>
        </Drawer>
    );
}
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Avatar, Menu, MenuItem, ListItemIcon, ListItemText, ButtonBase } from '@mui/material';
import { RiMenu2Fill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";
import { MdOutlineSearch, MdOutlineWbCloudy } from "react-icons/md";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import logo from "../../assets/logo (1).png";
import darklogoText from "../../assets/logoDark.png";
import logoText from "../../assets/logo-text.png";
import Bell from "../../components/iconsButton/Bell.jsx";
import Message from "../../components/iconsButton/Message.jsx";
import NotificationMenu from './NotificationDropdown.jsx';
import Inbox from './Inbox.jsx';
import pic from "../../assets/17.jpg";
import { ThemeContext } from '../../context/ThemeContext.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar({ isOpen, setIsOpen }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);
    const [inboxOpen, setInboxOpen] = useState(false);
    const { theme, themeToggle } = useContext(ThemeContext);

    return (
        <div className='w-full h-17 bg-(--bg-header) text-(--black-clr) flex items-center justify-between fixed z-50 px-4'>
            <div className='flex items-center gap-2'>
                <div className={`flex items-center transition-all duration-300 ${isOpen ? 'w-auto' : 'w-[50px]'}`}>
                    <img src={logo} alt="logo" className='w-10 h-10 object-contain' />
                    {isOpen &&
                        <img
                            src={theme === 'dark' ? darklogoText : logoText}
                            alt="logoText"
                            className='object-contain ms-2 hidden md:block h-10'
                        />}
                </div>

                <div className='flex items-center justify-center text-2xl cursor-pointer ms-2'>
                    {isOpen ? <RiMenu2Fill className='text-(--gray-clr)' onClick={() => setIsOpen(false)} /> : <HiArrowRight className='text-(--gray-clr)' onClick={() => setIsOpen(true)} />}
                </div>

                <div className='hidden md:block w-64 lg:w-80 h-10 ms-6'>
                    <div className='text-(--gray-clr) h-full bg-(--bg-body) items-center flex rounded-md px-3'>
                        <MdOutlineSearch className='text-xl' />
                        <input type="text" placeholder="Search.." className='w-full bg-transparent ms-2 text-sm focus:outline-none' />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='flex items-center gap-2'>
                <div className='hidden lg:flex items-center me-4'>
                    <div className='bg-(--blue-clr) rounded-full w-24 h-12 flex items-center justify-center text-white z-20 shadow-lg font-bold gap-2'>
                        <MdOutlineWbCloudy className='text-xl' />
                        <span>21</span>
                    </div>
                    <div className='bg-(--bg-body) rounded-r-full h-10 -ms-12 ps-16 pe-4 flex items-center text-(--gray-clr) text-xs'>
                        Medan, IDN
                    </div>
                </div>

                <div className='flex items-center gap-1'>
                    <IconButton onClick={themeToggle}>{theme === 'light' ? <DarkModeIcon className='text-(--blue-clr)' /> : <LightModeIcon fontSize='small' className='text-white' />}</IconButton>
                    <IconButton
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                        className='hidden sm:flex'
                        sx={{
                            color: 'var(--black-clr) !important',
                            '& svg, & svg path': {
                                fill: 'var(--black-clr) !important',
                            }
                        }}
                    >
                        <Bell fontSize='small' />
                    </IconButton>
                    <IconButton
                        onClick={() => setInboxOpen(true)}
                        sx={{
                            color: 'var(--black-clr) !important',
                            '& svg, & svg path': {
                                fill: 'var(--black-clr) !important',
                            }
                        }}
                    >
                        <Message fontSize='small' />
                    </IconButton>
                </div>

                <ButtonBase
                    onClick={(e) => setProfileAnchorEl(e.currentTarget)}
                    className='flex items-center gap-3 ms-2 ps-2 !p-1 !rounded-lg'
                >
                    <div className='hidden md:block text-right'>
                        <p className='text-sm leading-none font-bold'>Hello Franklin</p>
                        <p className='text-[10px] text-(--gray-clr)'>Super Admin</p>
                    </div>
                    <Avatar src={pic} sx={{ width: 35, height: 35 }} />
                </ButtonBase>
            </div>

            <NotificationMenu anchorEl={anchorEl} open={Boolean(anchorEl)} handleClose={() => setAnchorEl(null)} />
            <Inbox open={inboxOpen} handleClose={() => setInboxOpen(false)} />

            <Menu
                anchorEl={profileAnchorEl}
                open={Boolean(profileAnchorEl)}
                onClose={() => setProfileAnchorEl(null)}
                onClick={() => setProfileAnchorEl(null)}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
                        mt: 2,
                        minWidth: 160,
                        borderRadius: '12px',
                        padding: '6px',
                        '& .MuiMenuItem-root': {
                            borderRadius: '8px',
                            margin: '4px 0',
                            padding: '8px 12px',
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => { setProfileAnchorEl(null); navigate('/profile'); }}>
                    <ListItemIcon sx={{ minWidth: '32px !important' }}>
                        <Person2OutlinedIcon fontSize="small" sx={{ color: '#1EAAE7' }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ className: 'text-sm font-medium text-[var(--heading)]' }}>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => { setProfileAnchorEl(null); setInboxOpen(true); }}>
                    <ListItemIcon sx={{ minWidth: '32px !important' }}>
                        <EmailOutlinedIcon fontSize="small" sx={{ color: '#1ee768' }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ className: 'text-sm font-medium text-[var(--heading)]' }}>Inbox</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => { setProfileAnchorEl(null); navigate('/'); }}>
                    <ListItemIcon sx={{ minWidth: '32px !important' }}>
                        <LogoutOutlinedIcon fontSize="small" sx={{ color: '#ef4444' }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ className: 'text-sm font-medium text-red-500' }}>Logout</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}
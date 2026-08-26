import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { NavLink, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import DevicesIcon from '@mui/icons-material/ImportantDevices';
import LayersIcon from '@mui/icons-material/Layers';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function Aside({ isOpen }) {
    const id = React.useId();
    const { pathname } = useLocation();

    const groupsData = {
        panel1: {
            title: 'Dashboard',
            icon: <DashboardIcon />,
            links: [
                { to: '/dashboardLight', label: 'Dashboard Light' },
                { to: '/invoices', label: 'Invoices' },
                { to: '/transaction', label: 'Transactions' },
                { to: '/transactionDetails', label: 'Transactions Details' }
            ]
        },
        panel2: {
            title: 'CMS',
            icon: <SettingsIcon />,
            links: [
                { to: '/content', label: 'Content' },
                { to: '/addContent', label: 'Add Content' },
                { to: '/blog', label: 'Blog' },
                { to: '/addBlog', label: 'Add Blog' }
            ]
        },
        panel3: {
            title: 'Apps',
            icon: <DevicesIcon />,
            links: [
                { to: '/profile', label: 'Profile' },
                { to: '/editProfile', label: 'Edit Profile' },
                { to: '/postDetails', label: 'Post Details' },
            ]
        },
        panel5: {
            title: 'Widgets',
            icon: <AcUnitIcon />,
            links: [
                { to: '/charts', label: 'Charts' }
            ]
        },
        panel6: {
            title: 'Forms',
            icon: <EditNoteIcon />,
            links: [
                { to: '/formElements', label: 'Form Elements' }
            ]
        },
        panel7: {
            title: 'Tables',
            icon: <PivotTableChartIcon />,
            links: [
                { to: '/tables', label: 'Table' }
            ]
        },
        panel8: {
            title: 'Pages',
            icon: <LayersIcon />,
            links: [
                { to: '/login', label: 'Log in' },
                { to: '/register', label: 'Sign in' }
            ]
        }
    };

    const groups = {
        panel1: ['/dashboardLight', '/invoices', '/transaction', '/transactionDetails'],
        panel2: ['/', '/content', '/addContent', '/blog', '/addBlog'],
        panel3: ['/profile', '/edit-profile', '/post-details'],
        panel5: ['/charts'],
        panel6: ['/formElements'],
        panel7: ['/tables'],
        panel8: ['/login', '/signin']
    };

    const isGroupActive = (paths) => paths ? paths.some(path => pathname === path) : false;
    const [expandedPanel, setExpandedPanel] = React.useState(false);

    // Track active panel on route change
    React.useEffect(() => {
        const activePanel = Object.keys(groups).find(panel => isGroupActive(groups[panel]));
        if (activePanel) {
            setExpandedPanel(activePanel);
        }
    }, [pathname]);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        if (!isOpen) return;
        setExpandedPanel(isExpanded ? panel : false);
    };

    const getLinkClass = ({ isActive }) =>
        `!text-xs !ps-20 !pe-4 py-1 w-full block transition-colors !font-normal ${isActive ? 'text-[var(--blue-clr)] font-medium' : 'text-[var(--gray-clr)] hover:text-[var(--blue-clr)]'}`;

    const accordionStyles = {
        backgroundColor: "transparent",
        border: 'none',
        boxShadow: 'none',
        position: 'relative',
        '&:before': { display: 'none' },
        '&.Mui-expanded': { margin: '0 0 6px 0' }
    };

    const getSummaryStyles = (panelKey) => {
        const isActiveGroup = isGroupActive(groups[panelKey]);

        return {
            minHeight: '48px',
            padding: isOpen ? '0 16px' : '0',
            color: 'var(--gray-clr)',
            display: 'flex',
            justifyContent: isOpen ? 'initial' : 'center',

            '& .heading-text': {
                color: 'var(--gray-clr) !important',
                fontWeight: '400 !important',
                display: isOpen ? 'block' : 'none',
                transition: 'color 0.2s ease',
            },
            '& .active-icon': {
                color: isActiveGroup && !isOpen ? '#ffffff !important' : 'var(--gray-clr) !important',
                backgroundColor: isActiveGroup && !isOpen ? 'var(--blue-clr) !important' : 'transparent !important',
                transition: 'all 0.2s ease',
                borderRadius: '50% !important',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0px'
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
                color: 'var(--gray-clr) !important',
                display: isOpen ? 'inline-flex' : 'none',
            },

            '&:hover': {
                '& .heading-text': {
                    color: 'var(--blue-clr) !important'
                },
                '& .active-icon': {
                    backgroundColor: !isOpen ? 'var(--blue-clr) !important' : 'transparent !important',
                    color: !isOpen ? '#ffffff !important' : 'var(--gray-clr) !important',
                },
                '& .MuiAccordionSummary-expandIconWrapper': {
                    color: 'var(--gray-clr) !important',
                }
            },

            '&.Mui-expanded': {
                minHeight: '48px',
                '& .MuiAccordionSummary-expandIconWrapper': { color: '#000000 !important' },
                '& .heading-text': { color: '#000000 !important', fontWeight: '400 !important' },
                '& .active-icon': {
                    backgroundColor: 'var(--blue-clr) !important',
                    color: '#ffffff !important',
                }
            },

            '&.Mui-expanded:hover': {
                '& .heading-text': { color: '#000000 !important' },
                '& .active-icon': {
                    backgroundColor: 'var(--blue-clr) !important',
                    color: '#ffffff !important',
                },
                '& .MuiAccordionSummary-expandIconWrapper': { color: '#000000 !important' },
            },

            '& .MuiAccordionSummary-content': {
                margin: '12px 0',
                justifyContent: isOpen ? 'initial' : 'center',
                alignItems: 'center',
                padding: 0
            }
        };
    };

    return (
        <div className="w-full flex flex-col gap-1 h-full">
            {Object.keys(groupsData).map((panelKey) => {
                const group = groupsData[panelKey];
                return (
                    <div key={panelKey} className="relative group/item w-full">
                        <Accordion
                            disableGutters
                            square
                            elevation={0}
                            sx={accordionStyles}
                            expanded={Boolean(isOpen && expandedPanel === panelKey)}
                            onChange={handleAccordionChange(panelKey)}
                        >
                            <AccordionSummary
                                expandIcon={<ArrowForwardIcon className='!text-xs' sx={{ color: 'inherit' }} />}
                                aria-controls={`${id}-${panelKey}-content`}
                                id={`${id}-${panelKey}-header`}
                                sx={getSummaryStyles(panelKey)}
                            >
                                <div className={`flex items-center w-full ${isOpen ? 'ps-2 mx-1' : 'justify-center'}`}>
                                    {/* Fix: Replaced IconButton with a div to prevent nested button hydration error */}
                                    <div className="active-icon">
                                        {group.icon}
                                    </div>
                                    <Typography className='heading-text !text-sm !ms-5'>{group.title}</Typography>
                                </div>
                            </AccordionSummary>
                            {isOpen && (
                                <AccordionDetails sx={{ padding: '4px 0px 12px 0px' }}>
                                    <div className="flex flex-col gap-2 w-full">
                                        {group.links.map((link) => (
                                            <NavLink key={link.to} to={link.to} className={getLinkClass}>
                                                <Typography variant="span">{link.label}</Typography>
                                            </NavLink>
                                        ))}
                                    </div>
                                </AccordionDetails>
                            )}
                        </Accordion>

                        {/* Hover Dropdown menu for Icon/Collapsed Mode */}
                        {!isOpen && (
                            <div className="absolute left-[70px] top-0 hidden group-hover/item:flex flex-col bg-white border border-slate-100 shadow-xl rounded-lg py-2 min-w-[180px] z-[9999] ml-1 transition-all duration-150">
                                {group.links.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `text-xs px-4 py-2 block transition-all duration-150 ${isActive ? 'text-[var(--blue-clr)] bg-slate-50 font-medium' : 'text-[var(--gray-clr)] hover:text-[var(--blue-clr)] hover:bg-slate-50'}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
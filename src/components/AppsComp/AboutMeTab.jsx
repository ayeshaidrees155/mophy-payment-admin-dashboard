import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

export default function AboutMeTab() {
    const skills = ['Admin', 'Dashboard', 'Photoshop', 'Tailwind', 'Responsive', 'Crypto'];

    const languages = [
        { name: 'English', bg: '#EBF5FF', color: 'var(--blue-clr)' },
        { name: 'French', bg: '#FCE8FF', color: '#AC39D4' },
        { name: 'Bangla', bg: '#EAFBEA', color: '#25A244' }
    ];

    const infoList = [
        { label: 'Name :', value: 'Mitchell C.Shay' },
        { label: 'Email :', value: 'example@example.com' },
        { label: 'Availability :', value: 'Full Time (Free Lancer)' },
        { label: 'Age :', value: '27' },
        { label: 'Location :', value: 'Rosemont Avenue Melbourne, Florida' },
        { label: 'Year Experience :', value: '07 Year Experiences' }
    ];

    return (
        <Box className="w-full bg-(--bg-header) rounded-md flex flex-col gap-6 p-2 sm:p-4">

            <Box>
                <Typography variant="h6" className="!font-bold text-(color:--blue-clr) !mb-3">
                    About Me
                </Typography>
                <Typography className="text-(color:--gray-clr) !text-sm text-justify leading-relaxed !mb-4">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                </Typography>
                <Typography className="text-(color:--gray-clr) !text-sm text-justify leading-relaxed">
                    A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
                </Typography>
            </Box>

            {/* 2. Skills Section */}
            <Box>
                <Typography variant="subtitle1" className="!font-bold text-(color:--blue-clr) !mb-2">
                    Skills
                </Typography>
                <Box className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            className="!bg-[#F4F6FA] !text-(color:--blue-clr) !text-xs !rounded-md !px-2"
                            size="small"
                        />
                    ))}
                </Box>
            </Box>

            {/* 3. Language Section */}
            <Box>
                <Typography variant="subtitle1" className="!font-bold text-(color:--blue-clr) !mb-2">
                    Language
                </Typography>
                <Box className="flex flex-wrap gap-2">
                    {languages.map((lang, index) => (
                        <Chip
                            key={index}
                            label={lang.name}
                            size="small"
                            sx={{
                                backgroundColor: lang.bg,
                                color: lang.color,
                                fontSize: '12px',
                                borderRadius: '6px',
                                paddingX: '6px'
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* 4. Personal Information Grid Section */}
            <Box>
                <Typography variant="subtitle1" className="!font-bold text-(color:--blue-clr) !mb-3">
                    Personal Information
                </Typography>
                <Box className="flex flex-col gap-3 w-full">
                    {infoList.map((info, index) => (
                        <Box
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center text-sm gap-1 sm:gap-4 border-b sm:border-b-0 border-(--border-grey) pb-2 sm:pb-0"
                        >
                            {/* Left Side Labels */}
                            <Typography className="text-(color:--black-clr) w-full sm:w-[150px] sm:min-w-[150px] font-medium text-(size:--text-body)">
                                {info.label}
                            </Typography>
                            {/* Right Side Values */}
                            <Typography className="text-(color:--gray-clr) text-(size:--text-body) break-words">
                                {info.value}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

        </Box>
    );
}
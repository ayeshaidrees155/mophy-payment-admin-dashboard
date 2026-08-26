import React, { useEffect, useState } from 'react'
import { Avatar, Box, IconButton, Typography, Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function UserProfile() {
    const [profile, setProfile] = useState(() => {
        const stored = localStorage.getItem("ProfileData");
        return stored ? JSON.parse(stored) : {
            name: "Mitchell C.Shay",
            surname: "",
            speciality: "UX / UI Designer",
            email: "info@example.com",

        };
    });

    useEffect(() => {

        const handleStorageUpdate = () => {
            const stored = localStorage.getItem("ProfileData");
            if (stored) {
                setProfile(JSON.parse(stored));
            }
        };


        window.addEventListener("profileUpdated", handleStorageUpdate);


        return () => {
            window.removeEventListener("profileUpdated", handleStorageUpdate);
        };
    }, []);

    return (
        <Box className="!bg-(--bg-header) w-full h-auto md:h-75 rounded-md py-4 px-4 md:px-5">
            <Box className="rounded-md h-36 md:h-[70%] w-full object-cover"
                component="img"
                src='/src/assets/back.jpg'>
            </Box>

            <Box className="flex flex-col md:flex-row items-start md:items-center justify-between mt-2 md:mt-0">

                <Box className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                    <Avatar
                        src='/src/assets/profile.png'
                        className='!w-20 !h-20 md:!w-27 md:!h-27 !-mt-10 sm:!-mt-6 ms-2 md:ms-5 border-4 border-white shrink-0'
                    />

                    <Stack className='!flex !flex-col sm:!flex-row items-start sm:items-center gap-4 sm:gap-8 mt-3 sm:mt-0 ml-0 sm:ml-4'>
                        {/* Name & Speciality */}
                        <Box className="flex flex-col items-start justify-center mx-1 md:mx-2">
                            <Typography className='!text-(size:--text-heading) font-semibold text-(color:--blue-clr)'>
                                {profile.name}
                            </Typography>
                            <Typography className='!text-(size:--text-title) text-(color:--gray-clr)'>
                                {profile.speciality}
                            </Typography>
                        </Box>


                        <Box className="flex flex-col items-start justify-center mx-1 md:mx-2">
                            <Typography className='!text-(size:--text-heading) font-semibold text-(color:--black-clr) break-all'>
                                {profile.email}
                            </Typography>
                            <Typography className='!text-(size:--text-title) text-(color:--gray-clr)'>
                                Email
                            </Typography>
                        </Box>
                    </Stack>
                </Box>


                <IconButton
                    className="!bg-(--bg-body) !rounded-md p-2 mt-4 md:mt-0 self-end md:self-center !mx-2 md:!mx-5 shrink-0"
                    sx={{ width: 40, height: 40 }}
                >
                    <MoreHorizIcon className="text-(color:--blue-clr)" />
                </IconButton>
            </Box>
        </Box>
    )
}
import React from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function ProfileHighlights() {
    const interestImages = [
        { id: 1, src: '/src/assets/in.jpg', alt: 'Interest 1' },
        { id: 2, src: '/src/assets/in2.jpg', alt: 'Interest 2' },
        { id: 3, src: '/src/assets/in4.jpg', alt: 'Interest 3' },
        { id: 4, src: '/src/assets/in2.jpg', alt: 'Interest 4' },
        { id: 5, src: '/src/assets/in4.jpg', alt: 'Interest 5' },
        { id: 6, src: '/src/assets/in.jpg', alt: 'Interest 6' },
    ];

    const newsItems = [
        {
            id: 1,
            image: "/src/assets/news1.jpg",
            title: "Compete this projects Monday",
            desc: "I shared this on my fb wall a few months back, and I thought."
        },
        {
            id: 2,
            image: "/src/assets/new2.jpg",
            title: "Development planning",
            desc: "I shared this on my fb wall a few months back, and I thought."
        },
        {
            id: 3,
            image: "/src/assets/new3.jpg",
            title: "Software planning",
            desc: "I shared this on my fb wall a few months back, and I thought."
        }
    ];

    return (
        <Box className="w-full flex flex-col">
            {/* Follow box */}
            <Box className="w-full bg-(--bg-header) !rounded-md p-4 sm:p-6 flex flex-col items-center gap-6 shadow-sm">

                {/* Stats Section */}
                <Box className="w-full flex justify-between items-center text-center px-1 sm:px-2">
                    {/* Follower */}
                    <Box className="flex flex-col flex-1 mx-0.5 sm:mx-1">
                        <Typography className="!text-xl sm:!text-2xl text-(color:--black-clr)">
                            150
                        </Typography>
                        <Typography className="text-(color:--gray-clr) !text-(size:--text-title) !mt-1">
                            Follower
                        </Typography>
                    </Box>

                    {/* Place Stay */}
                    <Box className="flex flex-col flex-1 mx-0.5 sm:mx-1">
                        <Typography className="!text-xl sm:!text-2xl text-(color:--black-clr)">
                            140
                        </Typography>
                        <Typography className="text-(color:--gray-clr) !text-(size:--text-title) !mt-1">
                            Place Stay
                        </Typography>
                    </Box>

                    {/* Reviews */}
                    <Box className="flex flex-col flex-1 mx-0.5 sm:mx-1">
                        <Typography className="!text-xl sm:!text-2xl text-(color:--black-clr)">
                            45
                        </Typography>
                        <Typography className="text-(color:--gray-clr) !text-(size:--text-title) !mt-1">
                            Reviews
                        </Typography>
                    </Box>
                </Box>

                {/* Buttons Section */}
                <Box className="w-full flex flex-wrap sm:flex-nowrap gap-3 justify-center">
                    <Button
                        variant="contained"
                        size='small'
                        className="!bg-(color:--blue-clr) text-white !text-(size:--text-title) !capitalize !px-6 !py-2 !rounded-md flex-1"
                        sx={{ boxShadow: 'none', '&:hover': { backgroundColor: 'var(--blue-clr)', opacity: 0.9 } }}
                    >
                        Follow
                    </Button>
                    <Button
                        variant="contained"
                        size='small'
                        className="!bg-(color:--blue-clr) text-white !text-(size:--text-title) !capitalize !px-4 !py-2 !rounded-md flex-1"
                        sx={{ boxShadow: 'none', '&:hover': { backgroundColor: 'var(--blue-clr)', opacity: 0.9 } }}
                    >
                        Send Message
                    </Button>
                </Box>

            </Box>

            {/* Highlights box */}
            <Box className="w-full bg-(--bg-header) !rounded-md p-4 sm:p-5 my-5 flex flex-col gap-4 shadow-sm">
                <Typography className="text-(color:--blue-clr) !font-semibold text-(size:--text-title)">
                    Today Highlights
                </Typography>

                <Box
                    component="img"
                    src="/src/assets/highlights.jpg"
                    alt="Today Highlights"
                    className="w-full h-[150px] !rounded-md object-cover"
                />

                <Typography className="text-(color:--black-clr) text-(size:--text-title)" sx={{ marginBottom: 0 }}>
                    Darwin Creative Agency Theme
                </Typography>

                <Typography className="text-(color:--gray-clr) !text-(size:--text-title) text-justify" sx={{ marginTop: 0 }}>
                    A small river named Duden flows by their place and supplies it with the
                    necessary regelialia. It is a paradisematic country, in which roasted
                    parts of sentences fly into your mouth.
                </Typography>
            </Box>

            {/* Interest img grid */}
            <Box className="w-full bg-(--bg-header) !rounded-md p-4 sm:p-6 my-5 flex flex-col gap-4 shadow-sm">
                <Typography className="text-(color:--blue-clr) !font-semibold !text-base">
                    Interest
                </Typography>

                <Box className="grid grid-cols-3 gap-2">
                    {interestImages.map((img) => (
                        <Box
                            key={img.id}
                            component="img"
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-[65px] !rounded-md object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        />
                    ))}
                </Box>
            </Box>

            {/* Latest news */}
            <Box className="w-full bg-(--bg-header) !rounded-md p-4 sm:p-6 flex my-5 flex-col gap-5 shadow-sm">
                <Typography className="text-(color:--blue-clr) !font-semibold !text-base">
                    Our Latest News
                </Typography>

                <Box className="flex flex-col gap-4">
                    {newsItems.map((item) => (
                        <Box key={item.id} className="flex items-start gap-3">
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                className="w-[60px] h-[60px] !rounded-md object-cover flex-shrink-0"
                            />
                            <Box className="flex flex-col justify-start">
                                <Typography className="text-(color:--black-clr) !text-(size:--text-title) !mb-0.5 !leading-tight">
                                    {item.title}
                                </Typography>
                                <Typography className="text-(color:--gray-clr) !text-(size:--text-body) !leading-normal">
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
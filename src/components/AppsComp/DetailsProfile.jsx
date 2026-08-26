import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeartIcon from '@mui/icons-material/Favorite';

export default function DetailsProfile() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPost = localStorage.getItem("MyPosts");
        if (storedPost)
            setPosts(JSON.parse(storedPost));
    }, []);

    return (
        <Box className="!mt-5 !px-4">
            <Box className="grid grid-cols-1 gap-6">
                {posts?.map((post) => (
                    <Box
                        key={post.id}
                        className="flex flex-col justify-between p-4 rounded-md shadow-sm bg-(--bg-header) border border-(--border-grey)"
                    >
                        <Box>
                            <Box
                                className="h-48 md:h-64 w-full object-cover rounded-md"
                                component="img"
                                src={post.img}
                                alt={post.title || "Post image"}
                            />
                            <Typography className="!font-bold text-(color:--black-clr) !my-2" variant='h6'>
                                {post.title}
                            </Typography>
                            <Typography className="text-(color:--gray-clr) text-sm">
                                {post.text ? post.text : post.desc}
                            </Typography>
                        </Box>

                        <Box className="flex flex-wrap items-center !mt-4">
                            <Button
                                startIcon={<HeartIcon />}
                                variant="contained"
                                size='small'
                                sx={{
                                    background: "var(--blue-clr)",
                                    color: "white",
                                    fontSize: "var(--text-title)",
                                    textTransform: "none",
                                    marginY: 1
                                }}
                            >
                                Like
                            </Button>
                            <Button
                                startIcon={<HeartIcon />}
                                variant="contained"
                                size='small'
                                sx={{
                                    background: "#AC39D4",
                                    color: "white",
                                    fontSize: "var(--text-title)",
                                    textTransform: "none",
                                    marginLeft: { xs: 0, sm: 2 },
                                    marginY: 1
                                }}
                            >
                                Reply
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
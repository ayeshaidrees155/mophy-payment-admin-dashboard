import React, { useEffect, useState } from 'react';
import { Box, IconButton, Tab, TextareaAutosize, Button, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import LinkIcon from '@mui/icons-material/InsertLink';
import CamIcon from '@mui/icons-material/CameraAlt';
import HeartIcon from '@mui/icons-material/Favorite';
import Settings from './Settings';
import AboutMeTab from './AboutMeTab';
import post1 from "/src/assets/post1.jpg"
import post2 from "/src/assets/post2.jpg"
import post9 from "/src/assets/post9.jpg"

export default function ProfileTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabStyles = {
        fontSize: "var(--text-title)",
        color: "var(--gray-clr)",
        textTransform: "capitalize",
        minWidth: 'auto',
        px: { xs: 2, sm: 3 },
        '&.Mui-selected': {
            color: "var(--blue-clr)",
        }
    };

    const defaultPosts = [
        {
            id: "1",
            img: post1,
            title: "Collection of textile samples lay spread", desc: "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart."
        },
        {
            id: "2",
            img: post2,
            title: "Collection of textile samples lay spread", desc: "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart."
        },
        {
            id: "3",
            img: post1,
            title: "Collection of textile samples lay spread", desc: "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart."
        },
    ]

    const [postsData, setPostsData] = useState({ text: "" })
    const [posts, setPosts] = useState([]);

    const handlePostChange = (e) => {
        const { name, value } = e.target
        setPostsData({ ...postsData, [name]: value })
    }

    const handlePost = () => {
        const finalPost = {
            id: Date.now(),
            img: post9,
            title: "My Users Post",
            text: postsData.text
        }

        const existingPosts = JSON.parse(localStorage.getItem("MyPosts")) || [];
        existingPosts.push(finalPost);
        localStorage.setItem("MyPosts", JSON.stringify(existingPosts))
        setPosts(existingPosts);
        setPostsData({ text: "" })
        alert("posted")
    }

    useEffect(() => {
        const storedPost = localStorage.getItem("MyPosts");
        if (storedPost)
            setPosts(JSON.parse(storedPost))
        else {
            setPosts(defaultPosts);
            localStorage.setItem("MyPosts", JSON.stringify(defaultPosts))
        }
    }, [])

    return (
        <Box sx={{ width: '100%', typography: 'body1', background: "var(--bg-header)" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'var(--border-grey)' }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="profile tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        TabIndicatorProps={{
                            style: { backgroundColor: "var(--blue-clr)" }
                        }}
                    >
                        <Tab label="Posts" value="1" sx={tabStyles} />
                        <Tab label="About me" value="2" sx={tabStyles} />
                        <Tab label="Setting" value="3" sx={tabStyles} />
                    </TabList>
                </Box>

                <TabPanel value="1" sx={{ px: { xs: 1, sm: 0 } }}>
                    <Box className="w-full">
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={6}
                            name="text"
                            placeholder='Please type what you want'
                            value={postsData.text}
                            onChange={handlePostChange}
                            className="rounded-md !border !border-(--border-grey) text-(color:--gray-clr) !focus:outline focus:!outline-1 focus:!outline-[var(--blue-clr)] w-full !text-body-2 p-3 sm:px-4"
                        />

                        <Box className="flex flex-wrap items-center gap-2 mt-2">
                            <IconButton
                                className="!bg-[#E8F6FD] !rounded-md"
                                sx={{ width: 40, height: 40 }}
                            >
                                <LinkIcon className="text-(color:--blue-clr)" />
                            </IconButton>
                            <IconButton
                                className="!bg-[#E8F6FD] !rounded-md"
                                sx={{ width: 40, height: 40 }}
                            >
                                <CamIcon className="text-(color:--blue-clr)" />
                            </IconButton>
                            <Button
                                onClick={handlePost}
                                variant='contained'
                                size="small"
                                className='!text-white !bg-(--blue-clr) !capitalize !py-2 !px-4 ml-auto sm:ml-0'
                            >
                                Post
                            </Button>
                        </Box>
                    </Box>

                    <Box className="!mt-5 bg-(--bg-header)">
                        {posts?.map((post) => (
                            <Box key={post.id} className="!my-6 border-b border-(--border-grey) pb-4">
                                <Box className="rounded-md h-48 sm:h-[70%] w-full object-cover"
                                    component="img"
                                    src={post.img} />
                                <Typography className='!font-bold text-(color:--black-clr) !my-2' variant='h6'>{post.title}</Typography>
                                <Typography className='text-(color:--gray-clr) text-sm sm:text-base'>
                                    {post.text ? post.text : post.desc}
                                </Typography>

                                <Box className="flex flex-wrap gap-2 my-2">
                                    <Button startIcon={<HeartIcon />}
                                        variant="contained" size='small'
                                        sx={{ background: "var(--blue-clr)", color: "white", fontSize: "var(--text-title)", textTransform: "none" }}>Like</Button>
                                    <Button startIcon={<HeartIcon />}
                                        variant="contained" size='small'
                                        sx={{ background: "#AC39D4", color: "white", fontSize: "var(--text-title)", textTransform: "none" }}>Reply</Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </TabPanel>

                <TabPanel value="2" sx={{ px: { xs: 1, sm: 0 } }}>{<AboutMeTab />}</TabPanel>
                <TabPanel value="3" sx={{ px: { xs: 1, sm: 0 } }}>{<Settings />}</TabPanel>
            </TabContext>
        </Box>
    );
}
import React, { useState, useEffect } from 'react';
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography, Stack, TextField, MenuItem, AccordionActions, Button, Snackbar, Avatar, Alert } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import p1Img from "/src/assets/p1.jpg"
export default function ProfileForm() {
    const id = React.useId();

    const [profileData, setProfileData] = useState({
        id: 1,
        name: "",
        surname: "",
        speciality: "",
        skills: "",
        gender: "",
        birth: "",
        phone: "",
        email: "",
        city: "",
        country: ""
    });


    const [openSnackbar, setOpenSnackbar] = useState(false);


    useEffect(() => {
        const savedData = localStorage.getItem("ProfileData");
        if (savedData) {
            setProfileData(JSON.parse(savedData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleProfileUpdate = () => {
        if (!profileData.name.trim() || !profileData.email.trim() || !profileData.speciality.trim()) {
            return;
        }

        const finalProfileData = {
            ...profileData
        };


        localStorage.setItem("ProfileData", JSON.stringify(finalProfileData));


        window.dispatchEvent(new Event("profileUpdated"));


        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    return (
        <Box className="!flex !flex-col lg:!flex-row !gap-4 h-auto !my-5 !px-4">
            {/* left side */}
            <Box className="w-full lg:w-[25%] !rounded-md bg-(--bg-header)">
                <Box className="!h-60 w-full flex flex-col !items-center !justify-center" sx={{ borderBottom: "1px solid var(--border-grey)" }}>
                    <Avatar src={p1Img} className='my-1 !w-[130px] !h-[130px]'></Avatar>
                    <Typography className='text-(--black-clr) !pt-2'>{profileData.name || "Nella Vita"}</Typography>
                    <Typography className='text-(color:--gray-clr) !m-0 !text-(size:--text-title)'>{profileData.skills || "Developer"}</Typography>
                </Box>
                <Box className="!h-15 w-full flex flex-row items-center justify-between px-7" sx={{ borderBottom: "1px solid var(--border-grey)" }}>
                    <Typography className='!text-(color:--gray-clr)'>Models</Typography>
                    <Typography className='!text-(color:--gray-clr) !font-bold'>36</Typography>
                </Box>
                <Box className="!h-15 w-full flex flex-row items-center justify-between px-7" sx={{ borderBottom: "1px solid var(--border-grey)" }}>
                    <Typography className='!text-(color:--gray-clr)'>Gallery</Typography>
                    <Typography className='!text-(color:--gray-clr) !font-bold'>3</Typography>
                </Box>
                <Box className="!h-15 w-full flex flex-row items-center justify-between px-7" sx={{ borderBottom: "1px solid var(--border-grey)" }}>
                    <Typography className='!text-(color:--gray-clr)'>Lessons</Typography>
                    <Typography className='!text-(color:--gray-clr) !font-bold'>1</Typography>
                </Box>

                <Box className="!h-35 w-full !items-center !justify-center gap-4 flex !flex-col !py-4">
                    <Box className="w-[80%] h-10 rounded-md border-1 border-(--border-grey) flex items-center justify-center">
                        <Typography className='!my-2 text-center !text-(color:--gray-clr) !text-(size:--text-body)'>Portfolio</Typography>
                    </Box>
                    <Box className="w-[80%] border-1 border-(--border-grey) h-10 rounded-md !flex !items-center !justify-center">
                        <Typography component="a"
                            href='https://www.dexignzone.com/'
                            target='_blank'
                            className='text-center !text-(color:--gray-clr) !text-(size:--text-body)'
                            sx={{ margin: 1, display: "block" }}
                        >https://www.dexignzone.com/</Typography>
                    </Box>
                </Box>
            </Box>

            {/* form right side */}
            <Box className="w-full lg:w-[75%] lg:!ms-4">
                <Accordion defaultExpanded className="!rounded-md" sx={{ background: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!text-(size:--text-heading) !px-3 text-(color:--black-clr)">
                                Account Setup
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "var(bg-header)" }}>
                        {/* name surname */}
                        <Stack className="!px-3 !flex !flex-col sm:!flex-row !my-0 !gap-2 sm:!gap-0">
                            <Box className="w-full sm:!w-1/2 sm:me-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Name
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.name}
                                    name="name"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                />
                            </Box>
                            <Box className="w-full sm:!w-1/2 sm:!ms-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Surname
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.surname}
                                    name="surname"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                />
                            </Box>
                        </Stack>

                        {/* speciality skill */}
                        <Stack className="!px-3 !flex !flex-col sm:!flex-row !gap-2 sm:!gap-0">
                            <Box className="w-full sm:!w-1/2 sm:me-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Speciality
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.speciality}
                                    name="speciality"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                />
                            </Box>
                            <Box className="w-full sm:!w-1/2 sm:!ms-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Skills
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.skills}
                                    name="skills"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                />
                            </Box>
                        </Stack>

                        {/* gender Dob */}
                        <Stack className="!px-3 !flex !flex-col sm:!flex-row !gap-2 sm:!gap-0">
                            <Box className="w-full sm:!w-1/2 sm:me-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Gender
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    select
                                    name='gender'
                                    value={profileData.gender}
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                >
                                    <MenuItem value="Please Select" defaultValue="Please Select" className="!text-(color:--gray-clr) !text-(size:--text-title)">Please Select</MenuItem>
                                    <MenuItem value="Male" className="!text-(color:--gray-clr) !text-(size:--text-title)">Male</MenuItem>
                                    <MenuItem value="Female" className="!text-(color:--gray-clr) !text-(size:--text-title)">Female</MenuItem>
                                    <MenuItem value="Other" className="!text-(color:--gray-clr) !text-(size:--text-title)">Other</MenuItem>
                                </TextField>
                            </Box>
                            <Box className="w-full sm:!w-1/2 sm:!ms-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    DOB
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    type='date'
                                    value={profileData.birth}
                                    name="birth"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                />
                            </Box>
                        </Stack>

                        {/* phone email */}
                        <Stack className="!px-3 !flex !flex-col sm:!flex-row !gap-2 sm:!gap-0">
                            <Box className="w-full sm:!w-1/2 sm:me-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Phone
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.phone}
                                    name="phone"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                />
                            </Box>
                            <Box className="w-full sm:!w-1/2 sm:!ms-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Email Address
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.email}
                                    name="email"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                />
                            </Box>
                        </Stack>

                        {/* country city */}
                        <Stack className="!px-3 !flex !flex-col sm:!flex-row !gap-2 sm:!gap-0">
                            <Box className="w-full sm:!w-1/2 sm:me-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Country
                                </Typography>
                                <TextField
                                    variant='outlined'
                                    select
                                    fullWidth
                                    value={profileData.country}
                                    name="country"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}>
                                    <MenuItem value="Russia" className="!text-(color:--gray-clr) !text-(size:--text-title)">Russia</MenuItem>
                                    <MenuItem value="Canada" className="!text-(color:--gray-clr) !text-(size:--text-title)">Canada</MenuItem>
                                    <MenuItem value="China" className="!text-(color:--gray-clr) !text-(size:--text-title)">China</MenuItem>
                                    <MenuItem value="Pakistan" className="!text-(color:--gray-clr) !text-(size:--text-title)">Pakistan</MenuItem>
                                </TextField>
                            </Box>
                            <Box className="w-full sm:!w-1/2 sm:!ms-2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    City
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    select
                                    value={profileData.city}
                                    name="city"
                                    onChange={handleChange}
                                    sx={{
                                        mb: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--border-grey)",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px"
                                        }
                                    }}
                                >
                                    <MenuItem value="Krasnodour" className="!text-(color:--gray-clr) !text-(size:--text-title)">Krasnodour</MenuItem>
                                    <MenuItem value="Tyumen" className="!text-(color:--gray-clr) !text-(size:--text-title)">Tyumen</MenuItem>
                                    <MenuItem value="Chelyabnisk" className="!text-(color:--gray-clr) !text-(size:--text-title)">Chelyabnisk</MenuItem>
                                    <MenuItem value="Moscow" className="!text-(color:--gray-clr) !text-(size:--text-title)">Moscow</MenuItem>
                                </TextField>
                            </Box>
                        </Stack>
                    </AccordionDetails>
                    <AccordionActions className='!px-7 !py-7 !w-full' sx={{ borderTop: "1px solid var(--border-grey)" }}>
                        <Stack className='!w-full !flex !flex-col sm:!flex-row !items-center !justify-between !gap-3 sm:!gap-0'>
                            <Button onClick={handleProfileUpdate}
                                variant='contained' size='medium' className='w-full sm:w-auto text-white !bg-(--blue-clr)'>Update</Button>
                            <Typography variant="body2" className='!text-(--blue-clr) cursor-pointer'>Forgot your Password?</Typography>
                        </Stack>
                    </AccordionActions>
                </Accordion>
                {/* Success Snackbar */}
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
                        Profile data added successfully!
                    </Alert>
                </Snackbar>

            </Box>
        </Box>
    );
}
import React from 'react'
import { Box, Divider, FormControlLabel, Typography, TextField, OutlinedInput, TextareaAutosize, MenuItem, Stack, InputLabel, IconButton, InputAdornment, Checkbox, Button, Grid } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';



export default function Elements() {

    const outlinedPasswordId = React.useId();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    }

    return (
        <Box className="!flex !flex-wrap h-auto gap-14">
            {/* input style */}
            <Box className=" w-full  md:!w-[47%]  rounded-md bg-white !pb-10 h-[300px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  ' sx={{ color: "var(--black-clr)" }}>Input Style</Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="input-default"
                        sx={{
                            mb: 2, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",
                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px" // Controls the outline thickness
                            }
                        }}
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="input-rounded"
                        sx={{
                            mb: 1, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",
                                borderRadius: "20px"
                            },

                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px" // Controls the outline thickness
                            }
                        }}
                    />

                </Box>

            </Box>
            {/* checkbox style */}
            <Box className="w-full  md:!w-[47%]  rounded-md bg-white  h-auto" sx={{ backgroundColor: "var(--bg-header)" }}>
                {/* Header Section */}
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>
                        Checkbox
                    </Typography>
                </Box>
                <Divider className='!w-full !p-0' />

                {/* Checkboxes Area */}
                <Box className="!p-5 mt-3 !flex !flex-col !gap-3">

                    {/* Row 1: 2 Checkboxes on one line */}
                    <Box className="!flex !flex-row !justify-between !items-center !ms-2">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        p: 0.5,
                                        color: "#e2e8f0",
                                        '&.Mui-checked': { color: "#e2e8f0" }
                                    }}
                                />
                            }
                            label="Checkbox 1"
                            className="!w-1/2"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{ p: 0.5, '&.Mui-checked': { color: "#5086EC" } }} // Blue
                                />
                            }
                            label="Checkbox 2"
                            className="!w-1/2"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                    </Box>

                    {/* Row 2: 2 Checkboxes on one line */}
                    <Box className="!flex !flex-row !justify-between !items-center !ms-2">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{ p: 0.5, '&.Mui-checked': { color: "#34C759" } }} // Green
                                />
                            }
                            label="Checkbox 3"
                            className="!w-1/2"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{ p: 0.5, '&.Mui-checked': { color: "#FF9500" } }} // Orange
                                />
                            }
                            label="Checkbox 4"
                            className="!w-1/2"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                    </Box>

                    {/* Row 3: Single Checkbox (Red) */}
                    <Box className="!flex !flex-row !items-center !ms-2" >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{ p: 0.5, '&.Mui-checked': { color: "#FF3B30" } }} // Red
                                />
                            }
                            label="Checkbox 5"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                    </Box>

                    {/* Spacer (gap) before the icon-only row */}
                    <Box className="h-2" />

                    {/* Row 4: 4 Checkboxes side-by-side with NO labels */}
                    <Box className="!flex !flex-row !items-center !gap-12 pl-1 !ms-2" >
                        <Checkbox
                            defaultChecked
                            sx={{ p: 0.5, '&.Mui-checked': { color: "#3293F4" } }} // Light Blue
                        />
                        <Checkbox
                            defaultChecked
                            sx={{ p: 0.5, '&.Mui-checked': { color: "#6A0DAD" } }} // Purple
                        />
                        <Checkbox
                            defaultChecked
                            sx={{ p: 0.5, '&.Mui-checked': { color: "#34C759" } }} // Green
                        />
                        <Checkbox
                            defaultChecked
                            sx={{ p: 0.5, '&.Mui-checked': { color: "#FF9500" } }} // Orange
                        />
                    </Box>

                </Box>
            </Box>


            {/* textarea */}
            <Box className="w-full  md:!w-[47%]   rounded-md bg-white !pb-10 h-[300px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>Textarea</Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">

                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={6}

                        style={{ width: 400 }}
                        className=" !mx-3 rounded-md !border-1 !border-(--border-grey) text-(color:--gray-clr) !focus:outline focus:!outline-1 focus:!outline-[var(--blue-clr)]"

                    />
                </Box>
            </Box>

            {/* input size */}
            <Box className=" w-full  md:!w-[47%]   rounded-md bg-white !pb-10 h-[300px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>Input Size</Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="input-default"
                        sx={{
                            mb: 2, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "50px",
                                color: "var(--gray-clr)",
                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px" // Controls the outline thickness
                            }
                        }}
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="input-rounded"
                        sx={{
                            mb: 2, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-title)"


                            },

                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px" // Controls the outline thickness
                            }
                        }}
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="input-rounded"
                        sx={{
                            mb: 2, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "30px",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-body)"

                            },

                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px" // Controls the outline thickness
                            }
                        }}
                    />

                </Box>

            </Box>

            {/* select size */}
            <Box className=" w-full  md:!w-[47%]  rounded-md bg-white !pb-10 h-[300px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>Select Size</Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">
                    <TextField
                        fullWidth
                        size="small"
                        select
                        defaultValue="option 1"
                        sx={{
                            mb: 1, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "50px",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-heading)"

                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                    >

                        <MenuItem value="option 1" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 1
                        </MenuItem>

                        <MenuItem value="option 2" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 2
                        </MenuItem>

                        <MenuItem value="option 3" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 3
                        </MenuItem>
                    </TextField>
                    <TextField
                        fullWidth
                        size="small"
                        select
                        defaultValue="option 1"
                        sx={{
                            mb: 1, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-title)"
                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                    >

                        <MenuItem value="option 1" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 1
                        </MenuItem>

                        <MenuItem value="option 2" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 2
                        </MenuItem>

                        <MenuItem value="option 3" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 3
                        </MenuItem>
                    </TextField>
                    <TextField
                        fullWidth
                        size="small"
                        select
                        defaultValue="option 1"
                        sx={{
                            mb: 1, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "30px",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-body)"

                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                    >

                        <MenuItem value="option 1" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 1
                        </MenuItem>

                        <MenuItem value="option 2" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 2
                        </MenuItem>

                        <MenuItem value="option 3" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            Option 3
                        </MenuItem>
                    </TextField>



                </Box>

            </Box>

            {/* select list */}
            <Box className="w-full  md:!w-[47%]  rounded-md bg-white !pb-10 h-[300px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>Select LIst</Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">
                    <TextField
                        fullWidth
                        size="small"
                        select
                        defaultValue=" 1"
                        sx={{
                            mb: 3, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",


                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                    >

                        <MenuItem value=" 1" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            1
                        </MenuItem>

                        <MenuItem value=" 2" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            2
                        </MenuItem>

                        <MenuItem value=" 3" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            3
                        </MenuItem>
                        <MenuItem value=" 4" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            4
                        </MenuItem>
                    </TextField>
                    <TextField
                        fullWidth
                        size="small"
                        select
                        defaultValue=" 3"
                        sx={{
                            mb: 3, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",

                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            //focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                    >

                        <MenuItem value=" 1" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            1
                        </MenuItem>

                        <MenuItem value=" 2" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            2
                        </MenuItem>

                        <MenuItem value=" 3" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            3
                        </MenuItem>
                        <MenuItem value=" 4" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            4
                        </MenuItem>
                        <MenuItem value=" 5" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                            5
                        </MenuItem>
                    </TextField>




                </Box>

            </Box>


            {/* horizontal form */}
            <Box className=" w-full  md:!w-[47%]  rounded-md bg-white !pb-10 h-[500px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'> Horizontal Form</Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">
                    <Box className="!flex !flex-row !flex-wrap gap-6 ">
                        <Stack className='!flex !flex-col w-[47%] !justify-start !items-start  '>
                            <Typography className='!text-(size:--text-title) !w-24 '>Name</Typography>

                            <TextField
                                variant="outlined"
                                fullWidth
                                type='email'
                                placeholder="Name"
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        // marginY: 1
                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                            />
                        </Stack>
                        <Stack className='!flex !flex-col w-[47%]  !justify-start !items-start  '>
                            <Typography className='!text-(size:--text-title) !w-24 '>Email</Typography>

                            <TextField
                                variant="outlined"
                                fullWidth
                                type='email'
                                placeholder="Email"
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        // marginY: 1
                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                            />
                        </Stack>
                        <Stack className='!flex !flex-col !justify-start !items-start  '>

                            <Typography className='!text-(size:--text-title) !w-24 '>Password</Typography>

                            {/* <InputLabel htmlFor={`${outlinedPasswordId}-input`} className='!text-[size:--text-title] !text-[color:black-clr]'>Password</InputLabel> */}
                            <OutlinedInput
                                id={`${outlinedPasswordId}-input`}
                                type={showPassword ? 'text' : 'password'}
                                sx={{
                                    backgroundColor: "white",
                                    color: "var(--gray-clr)",
                                    height: "40px",
                                    // my: 1,
                                    width: "190px", // This is marginY: 1

                                    // Hover effect on the 
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },

                                    // Focus effect on the border
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </Stack>
                        <Stack className='!flex !flex-col w-[47%] !justify-start !items-start  '>
                            <Typography className='!text-(size:--text-title) !w-24 '>City</Typography>

                            <TextField
                                variant="outlined"
                                fullWidth

                                placeholder="City"
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        // marginY: 1
                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                            />
                        </Stack>
                        <Stack className='!flex !flex-col w-[30%] !justify-start !items-start  '>
                            <Typography className='!text-(size:--text-title) !w-24 '>State</Typography>

                            <TextField
                                fullWidth
                                size="small"
                                select
                                defaultValue="Choose..."
                                sx={{
                                    mb: 1, mt: 1, bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        fontSize: "var(--text-body)"

                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px"
                                    }
                                }}
                            >

                                <MenuItem value="choose..." className="!text-(color:--gray-clr) !text-(size:--text-title)">
                                    Choose...                                </MenuItem>
                                <MenuItem value="option 1" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                                    Option 1
                                </MenuItem>

                                <MenuItem value="option 2" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                                    Option 2
                                </MenuItem>

                                <MenuItem value="option 3" className="!text-(color:--gray-clr) !text-(size:--text-title)">
                                    Option 3
                                </MenuItem>
                            </TextField>
                        </Stack>
                        <Stack className='!flex !flex-col w-[10%] !justify-start !items-start  '>
                            <Typography className='!text-(size:--text-title) !w-24 '>Zip</Typography>

                            <TextField
                                variant="outlined"
                                fullWidth

                                placeholder=""
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        marginY: 1
                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                            />
                        </Stack>



                    </Box>
                    <Stack className=' mx-2 my-3'>
                        <FormControlLabel control={
                            <RadioButtonUnchecked

                                name="Check me out "


                            />} size="small"
                            label="Allow Comments" sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                    </Stack>
                    <Button className="!text-white !my-5  !bg-(--blue-clr)" size="small" varaint="contained" sx={{ textTransform: "none" }}
                    > Sign in</Button>


                </Box>
            </Box>

            {/* vertical from  */}
            <Box className=" w-full  md:!w-[47%]  rounded-md bg-white !pb-10 h-[500px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'> Vertical Form</Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">
                    <Stack className='!flex !flex-row !justify-center !items-center  '>
                        <Typography className='!text-(size:--text-title) !w-24 '>Email</Typography>

                        <TextField
                            variant="outlined"
                            fullWidth
                            type='email'
                            placeholder="Email"
                            sx={{
                                bg: "white", color: "var(--gray-clr)",
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    color: "var(--gray-clr)",
                                    marginY: 2
                                },
                                // hover
                                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--border-grey)",
                                },
                                //focus effect
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--blue-clr)",
                                    borderWidth: "1px" // Controls the outline thickness
                                }
                            }}
                        />
                    </Stack>
                    <Stack className='!flex !flex-row !justify-center !my-3 !items-center '>

                        <Typography className='!text-(size:--text-title) !w-24 '>Password</Typography>

                        {/* <InputLabel htmlFor={`${outlinedPasswordId}-input`} className='!text-[size:--text-title] !text-[color:black-clr]'>Password</InputLabel> */}
                        <OutlinedInput
                            id={`${outlinedPasswordId}-input`}
                            type={showPassword ? 'text' : 'password'}
                            sx={{
                                backgroundColor: "white",
                                color: "var(--gray-clr)",
                                height: "40px",
                                my: 1,
                                width: "400px", // This is marginY: 1

                                // Hover effect on the 
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--border-grey)",
                                },

                                // Focus effect on the border
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--blue-clr)",
                                    borderWidth: "1px" // Controls the outline thickness
                                }
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Stack>

                    {/* radios */}
                    <Stack className='!flex !flex-row !justify-start !items-start  !my-3 '>
                        <Typography className='!text-(size:--text-title) !w-24 '>Radios</Typography>
                        <Box className="!flex !flex-col">

                            <FormControlLabel control={
                                <RadioButtonChecked
                                    name="First Radio"


                                />} size="small"
                                label="Allow Comments" sx={{
                                    color: "var(--gray-clr)",
                                    "& .MuiFormControlLabel-label": {
                                        fontSize: "var(--text-title)"

                                    },
                                    "& .MuiSvgIcon-root": { fontSize: "20px", }
                                }} />
                            <FormControlLabel control={
                                <RadioButtonUnchecked

                                    name="Second Radio"


                                />} size="small"
                                label="Allow Comments" sx={{
                                    color: "var(--gray-clr)",
                                    "& .MuiFormControlLabel-label": {
                                        fontSize: "var(--text-title)"
                                    },
                                    "& .MuiSvgIcon-root": { fontSize: "20px", }
                                }} />
                            <FormControlLabel
                                disabled
                                control={
                                    <RadioButtonUnchecked
                                        name="Third Radio"


                                    />} size="small"
                                label="Allow Comments" sx={{
                                    color: "var(--gray-clr)",
                                    "& .MuiFormControlLabel-label": {
                                        fontSize: "var(--text-title)"
                                    },
                                    "& .MuiSvgIcon-root": { fontSize: "20px", }
                                }} />
                        </Box>
                    </Stack>
                    {/* checkbox */}
                    <Stack className='!flex !flex-row !justify-start !items-center   '>
                        <Typography className='!text-(size:--text-title) !w-24 '>Checkbox</Typography>
                        <Box className="!flex !flex-col">

                            <FormControlLabel control={
                                <Checkbox
                                    name="Example Checkbox"


                                />} size="small"
                                label="Allow Comments" sx={{
                                    color: "var(--gray-clr)",
                                    "& .MuiFormControlLabel-label": {
                                        fontSize: "var(--text-title)"
                                    },
                                    "& .MuiSvgIcon-root": { fontSize: "20px", }
                                }} />

                        </Box>
                    </Stack>
                    <Button className="!text-white !my-5 !bg-(--blue-clr)" size="small" varaint="contained" sx={{ textTransform: "none" }}>Sign in</Button>
                </Box>


            </Box>


            {/* checkboxes */}
            <Box className="w-full  md:!w-[47%]   rounded-md bg-white !pb-10 h-[200px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>Checkboxes </Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 ">
                    <Stack className='!flex !flex-col  '>

                        <FormControlLabel
                            control={
                                <Checkbox sx={{ p: 0.5 }} /> // Reduced checkbox padding
                            }
                            size="small"
                            label="Option 1 "
                            sx={{
                                color: "var(--gray-clr)",
                                my: -0.5, // Pulls rows closer vertically
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)",
                                    padding: 0,
                                    margin: 0
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox sx={{ p: 0.5 }} /> // Reduced checkbox padding
                            }
                            size="small"
                            label=" Option 2"
                            sx={{
                                color: "var(--gray-clr)",
                                my: -0.5, // Pulls rows closer vertically
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />

                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox name=" Option 3" sx={{ p: 0.5 }} /> // Reduced checkbox padding
                            }
                            size="small"
                            label="Option 3"
                            sx={{
                                color: "var(--gray-clr)",
                                my: -0.5, // Pulls rows closer vertically
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />

                    </Stack>
                </Box>
            </Box>

            {/* inline checkboxs */}
            <Box className=" w-full  md:!w-[47%] rounded-md bg-white !pb-10 h-[200px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'> Inline Checkboxes </Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 ">

                    <Stack className='!flex !flex-row !gap-7 !p-2'>

                        <FormControlLabel control={
                            <Checkbox



                            />} size="small"
                            label="Option 1 " sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"

                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                        <FormControlLabel control={
                            <Checkbox

                            />} size="small"
                            label=" Option 2" sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name=" Option 3"


                                />} size="small"
                            label="Option 3" sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                    </Stack>



                </Box>



            </Box>
            {/* radiobutons */}
            <Box className=" w-full  md:!w-[47%]  rounded-md bg-white !pb-10 h-[200px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>Radio Buttons </Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 !flex !flex-col">

                    <Stack className='!flex !flex-col !p-2'>

                        <FormControlLabel control={
                            <RadioButtonUnchecked



                            />} size="small"
                            label="Option 1 " sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"

                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                        <FormControlLabel control={
                            <RadioButtonUnchecked

                            />} size="small"
                            label=" Option 2" sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                        <FormControlLabel
                            disabled
                            control={
                                <RadioButtonUnchecked
                                    name=" Option 3"


                                />} size="small"
                            label="Option 3" sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                    </Stack>



                </Box>



            </Box>
            {/* inline radio btns */}
            <Box className="w-full  md:!w-[47%] rounded-md bg-white !pb-10 h-[200px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>Radio Buttons </Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 ">

                    <Stack className='!flex !flex-row !gap-7 !p-2'>

                        <FormControlLabel control={
                            <RadioButtonUnchecked



                            />} size="small"
                            label="Option 1 " sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"

                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                        <FormControlLabel control={
                            <RadioButtonUnchecked

                            />} size="small"
                            label=" Option 2" sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                        <FormControlLabel
                            disabled
                            control={
                                <RadioButtonUnchecked
                                    name=" Option 3"


                                />} size="small"
                            label="Option 3" sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px", }
                            }} />
                    </Stack>



                </Box>



            </Box>

            {/* form grid */}
            <Box className=" w-full  md:!w-[47%]  rounded-md bg-white !pb-10 h-[170px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>  Form Grid</Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">
                    <Box className="!flex !flex-row !flex-wrap gap-6 ">
                        <Stack className='!flex !flex-row w-full gap-5 !justify-start !items-start  '>

                            <TextField
                                variant="outlined"
                                fullWidth

                                placeholder="First Name"
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        // marginY: 1
                                        fontSize: "var(--text-title)"
                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                            />
                            <TextField
                                variant="outlined"
                                fullWidth

                                placeholder="Last Name"
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        // marginY: 1
                                        fontSize: "var(--text-title)"
                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                            />
                        </Stack>
                    </Box>

                </Box >
            </Box>
            {/* form row */}
            <Box className="w-full  md:!w-[47%]  rounded-md bg-white !pb-10 h-[170px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading)  !text-(color:--black-clr)'>  Form Grid</Typography>

                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3">
                    <Box className="!flex !flex-row !flex-wrap gap-6 ">
                        <Stack className='!flex !flex-row w-full gap-5 !justify-start !items-start  '>

                            <TextField
                                variant="outlined"
                                fullWidth

                                placeholder="First Name"
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        // marginY: 1
                                        fontSize: "var(--text-title)"
                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                            />
                            <TextField
                                variant="outlined"
                                fullWidth

                                placeholder="Last Name"
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        // marginY: 1
                                        fontSize: "var(--text-title)"
                                    },
                                    // hover
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    //focus effect
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px" // Controls the outline thickness
                                    }
                                }}
                            />
                        </Stack>
                    </Box>

                </Box >
            </Box>

            {/* button addons */}
            <Box className="w-full  md:!w-[47%] rounded-md bg-white !pb-10 h-auto" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>
                        Button Addons
                    </Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 !flex !flex-col !gap-4">

                    {/* 1. One Button on the Left */}
                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden">
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                borderRadius: "0px",
                                boxShadow: "none",
                                "&:hover": { backgroundColor: "var(--blue-clr)", boxShadow: "none" }
                            }}
                        >
                            Button
                        </Button>
                        <TextField
                            variant="outlined"
                            fullWidth

                            sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                }
                            }}
                        />
                    </Box>

                    {/* 2. One Button on the Right */}
                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden">
                        <TextField
                            variant="outlined"
                            fullWidth

                            sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                borderRadius: "0px",
                                boxShadow: "none",
                                "&:hover": { backgroundColor: "var(--blue-clr)", boxShadow: "none" }
                            }}
                        >
                            Button
                        </Button>
                    </Box>

                    {/* 3. TWO Buttons on the Left */}
                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden">
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                borderRadius: "0px",
                                boxShadow: "none",
                                borderRight: "1px solid rgba(255, 255, 255, 0.2)", // दोनों बटन के बीच हलकी लाइन के लिए
                                "&:hover": { backgroundColor: "var(--blue-clr)", boxShadow: "none" }
                            }}
                        >
                            Button
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                borderRadius: "0px",
                                boxShadow: "none",
                                "&:hover": { backgroundColor: "var(--blue-clr)", boxShadow: "none" }
                            }}
                        >
                            Button
                        </Button>
                        <TextField
                            variant="outlined"
                            fullWidth

                            sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                }
                            }}
                        />
                    </Box>

                    {/* 4. TWO Buttons on the Right */}
                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden">
                        <TextField
                            variant="outlined"
                            fullWidth

                            sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                borderRadius: "0px",
                                boxShadow: "none",
                                borderRight: "1px solid rgba(255, 255, 255, 0.2)", // दोनों बटन के बीच हलकी लाइन के लिए
                                "&:hover": { backgroundColor: "var(--blue-clr)", boxShadow: "none" }
                            }}
                        >
                            Button
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                borderRadius: "0px",
                                boxShadow: "none",
                                "&:hover": { backgroundColor: "var(--blue-clr)", boxShadow: "none" }
                            }}
                        >
                            Button
                        </Button>
                    </Box>

                </Box>
            </Box>

            {/* dropdown btn */}
            <Box className="w-full  md:!w-[47%] rounded-md bg-white !pb-10 h-auto" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>
                        Buttons With Dropdowns
                    </Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 !flex !flex-col !gap-4">

                    {/* 1. Dropdown on the Left (State-less) */}
                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden">
                        <TextField
                            select
                            defaultValue="dropdown"
                            slotProps={{
                                select: {
                                    IconComponent: () => null, // default dropdown arrow हटाने के लिए
                                }
                            }}
                            sx={{
                                width: "120px", // Dropdown button की width
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    color: "white",
                                    fontSize: "14px",
                                    fontWeight: "medium",
                                    cursor: "pointer",
                                    "& fieldset": { border: "none" },
                                },
                                "& .MuiSelect-select": {
                                    paddingRight: "14px !important", // default arrow space remove
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }
                            }}
                        >
                            {/* Hidden default value to act as button text */}
                            <MenuItem value="dropdown" disabled sx={{ display: 'none' }}>
                                Dropdown ▼
                            </MenuItem>
                            <MenuItem value="action" className="!text-[var(--gray-clr)] !text-(size:--text-title)">Action</MenuItem>
                            <MenuItem value="another" className="!text-[var(--gray-clr)] !text-(size:--text-title)">Another action</MenuItem>
                            <MenuItem value="something" className="!text-[var(--gray-clr)] !text-(size:--text-title)">Something else here</MenuItem>
                            <Divider />
                            <MenuItem value="separated" className="!text-[var(--gray-clr)] !text-(size:--text-title)">Separated link</MenuItem>
                        </TextField>

                        <TextField
                            variant="outlined"
                            fullWidth

                            sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                }
                            }}
                        />
                    </Box>

                    {/* 2. Dropdown on the Right (State-less) */}
                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden">
                        <TextField
                            variant="outlined"
                            fullWidth

                            sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                }
                            }}
                        />

                        <TextField
                            select
                            defaultValue="dropdown"
                            slotProps={{
                                select: {
                                    IconComponent: () => null,
                                }
                            }}
                            sx={{
                                width: "120px",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    color: "white",
                                    fontSize: "14px",
                                    fontWeight: "medium",
                                    cursor: "pointer",
                                    "& fieldset": { border: "none" },
                                },
                                "& .MuiSelect-select": {
                                    paddingRight: "14px !important",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }
                            }}
                        >
                            <MenuItem value="dropdown" disabled sx={{ display: 'none' }}>
                                Dropdown ▼
                            </MenuItem>
                            <MenuItem value="action" className="!text-[var(--gray-clr)] !text-(size:--text-title)">Action</MenuItem>
                            <MenuItem value="another" className="!text-[var(--gray-clr)] !text-(size:--text-title)">Another action</MenuItem>
                            <MenuItem value="something" className="!text-[var(--gray-clr)] !text-(size:--text-title)">Something else here</MenuItem>
                            <Divider />
                            <MenuItem value="separated" className="!text-[var(--gray-clr)] !text-(size:--text-title)">Separated link</MenuItem>
                        </TextField>
                    </Box>

                </Box>
            </Box>
        </Box>


    )
}

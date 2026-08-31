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
            <Box className="w-full md:!w-[47%] rounded-md bg-white h-auto md:h-[300px] mb-4 md:mb-0" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-[length:var(--text-heading)]' sx={{ color: "var(--black-clr)" }}>Input Style</Typography>
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
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-body)" },
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
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-body)" },
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
            </Box>

            {/* checkbox style */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white h-auto" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-[length:var(--text-heading)]' sx={{ color: "var(--black-clr)" }}>
                        Checkbox
                    </Typography>
                </Box>
                <Divider className='!w-full !p-0' />

                <Box className="!p-5 mt-3 !flex !flex-col !gap-3">
                    <Box className="!flex !flex-col sm:!flex-row !justify-between !items-start sm:!items-center !ms-2 !gap-2 sm:!gap-0">
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
                            className="!w-full sm:!w-1/2"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{ p: 0.5, '&.Mui-checked': { color: "#5086EC" } }}
                                />
                            }
                            label="Checkbox 2"
                            className="!w-full sm:!w-1/2"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                    </Box>

                    <Box className="!flex !flex-col sm:!flex-row !justify-between !items-start sm:!items-center !ms-2 !gap-2 sm:!gap-0">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{ p: 0.5, '&.Mui-checked': { color: "#34C759" } }}
                                />
                            }
                            label="Checkbox 3"
                            className="!w-full sm:!w-1/2"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{ p: 0.5, '&.Mui-checked': { color: "#FF9500" } }}
                                />
                            }
                            label="Checkbox 4"
                            className="!w-full sm:!w-1/2"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                    </Box>

                    <Box className="!flex !flex-row !items-center !ms-2">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{ p: 0.5, '&.Mui-checked': { color: "#FF3B30" } }}
                                />
                            }
                            label="Checkbox 5"
                            sx={{ color: "var(--gray-clr)", '& .MuiFormControlLabel-label': { fontSize: "var(--text-title)" } }}
                        />
                    </Box>

                    <Box className="h-2" />

                    <Box className="!flex !flex-row !items-center !flex-wrap !gap-6 sm:!gap-12 pl-1 !ms-2">
                        <Checkbox
                            defaultChecked
                            sx={{ p: 0.5, '&.Mui-checked': { color: "#3293F4" } }}
                        />
                        <Checkbox
                            defaultChecked
                            sx={{ p: 0.5, '&.Mui-checked': { color: "#6A0DAD" } }}
                        />
                        <Checkbox
                            defaultChecked
                            sx={{ p: 0.5, '&.Mui-checked': { color: "#34C759" } }}
                        />
                        <Checkbox
                            defaultChecked
                            sx={{ p: 0.5, '&.Mui-checked': { color: "#FF9500" } }}
                        />
                    </Box>
                </Box>
            </Box>


            {/* textarea */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto md:h-[300px] mb-4 md:mb-0" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-[length:var(--text-heading)]' sx={{ color: "var(--black-clr)" }}>Textarea</Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 flex justify-center">
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={6}
                        style={{ width: '100%', maxWidth: '400px' }}
                        className="!mx-3 rounded-md !border !border-[var(--border-grey)] text-[var(--gray-clr)] focus:outline focus:outline-1 focus:outline-[var(--blue-clr)] text-base md:text-[length:var(--text-body)] p-2"
                    />
                </Box>
            </Box>

            {/* input size */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto md:h-[300px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-[length:var(--text-heading)]' sx={{ color: "var(--black-clr)" }}>Input Size</Typography>
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
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-body)" },
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
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="input-rounded"
                        sx={{
                            mb: 2, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",
                            },
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-title)" },
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
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="input-rounded"
                        sx={{
                            mb: 2, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "30px",
                                color: "var(--gray-clr)",
                            },
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-body)" },
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
            </Box>

            {/* select size */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto md:h-[300px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-[length:var(--text-heading)]' sx={{ color: "var(--black-clr)" }}>Select Size</Typography>
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
                            },
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-heading)" },
                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            // focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                    >
                        <MenuItem value="option 1" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            Option 1
                        </MenuItem>
                        <MenuItem value="option 2" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            Option 2
                        </MenuItem>
                        <MenuItem value="option 3" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
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
                            },
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-title)" },
                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            // focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                    >
                        <MenuItem value="option 1" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            Option 1
                        </MenuItem>
                        <MenuItem value="option 2" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            Option 2
                        </MenuItem>
                        <MenuItem value="option 3" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
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
                            },
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-body)" },
                            },
                            // hover
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            // focus effect
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                    >
                        <MenuItem value="option 1" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            Option 1
                        </MenuItem>
                        <MenuItem value="option 2" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            Option 2
                        </MenuItem>
                        <MenuItem value="option 3" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            Option 3
                        </MenuItem>
                    </TextField>
                </Box>
            </Box>

            {/* select list */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto md:h-[300px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-[length:var(--text-heading)]' sx={{ color: "var(--black-clr)" }}>Select List</Typography>
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
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-title)" },
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
                        <MenuItem value=" 1" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            1
                        </MenuItem>
                        <MenuItem value=" 2" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            2
                        </MenuItem>
                        <MenuItem value=" 3" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            3
                        </MenuItem>
                        <MenuItem value=" 4" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
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
                            "& .MuiInputBase-input": {
                                fontSize: { xs: "16px", md: "var(--text-title)" },
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
                        <MenuItem value=" 1" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            1
                        </MenuItem>
                        <MenuItem value=" 2" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            2
                        </MenuItem>
                        <MenuItem value=" 3" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            3
                        </MenuItem>
                        <MenuItem value=" 4" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
                            4
                        </MenuItem>
                        <MenuItem value=" 5" className="!text-[var(--gray-clr)] !text-[length:var(--text-title)]">
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
                        <Stack className='!flex !flex-col w-[47%] !justify-start !items-start'>
                            <Typography className='!text-(size:--text-title) !w-24'>Password</Typography>
                            <OutlinedInput
                                id={`${outlinedPasswordId}-input`}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                fullWidth
                                sx={{
                                    bg: "white",
                                    color: "var(--gray-clr)",
                                    height: "40px",
                                    "& .MuiInputBase-input": {
                                        color: "var(--gray-clr)",
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--border-grey)",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px"
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

                                <MenuItem className="!text-(color:--gray-clr) !text-(size:--text-title)">
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
                    <Stack className='!flex !flex-row !justify-center !my-3 !items-center'>
                        <Typography className='!text-(size:--text-title) !w-24'>Password</Typography>
                        <OutlinedInput
                            id={`${outlinedPasswordId}-input`}
                            type={showPassword ? 'text' : 'password'}
                            sx={{
                                bg: "white",
                                color: "var(--gray-clr)",
                                width: "400px",
                                height: "40px",
                                "& .MuiInputBase-input": {
                                    height: "40px",
                                    boxSizing: "border-box",
                                    padding: "0 14px",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--border-grey)",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--blue-clr)",
                                    borderWidth: "1px"
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


            {/* Vertical Checkboxes */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto min-h-[200px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>Checkboxes</Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-3 sm:!p-5 mt-3">
                    <Stack className='!flex !flex-col gap-2'>
                        <FormControlLabel
                            control={<Checkbox sx={{ p: 0.5 }} />}
                            size="small"
                            label="Option 1"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)",
                                    padding: 0,
                                    margin: 0
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox sx={{ p: 0.5 }} />}
                            size="small"
                            label="Option 2"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                        <FormControlLabel
                            disabled
                            control={<Checkbox sx={{ p: 0.5 }} />}
                            size="small"
                            label="Option 3"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                    </Stack>
                </Box>
            </Box>

            {/* Inline Checkboxes */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto min-h-[200px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>Inline Checkboxes</Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-3 sm:!p-5 mt-3">
                    <Stack className='!flex !flex-col sm:!flex-row !gap-4 sm:!gap-7 !p-2 flex-wrap'>
                        <FormControlLabel
                            control={<Checkbox />}
                            size="small"
                            label="Option 1"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            size="small"
                            label="Option 2"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                        <FormControlLabel
                            disabled
                            control={<Checkbox />}
                            size="small"
                            label="Option 3"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                    </Stack>
                </Box>
            </Box>
            {/* Vertical Radio Buttons */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto min-h-[200px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>Radio Buttons</Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-3 sm:!p-5 mt-3 !flex !flex-col">
                    <Stack className='!flex !flex-col gap-2 !p-2'>
                        <FormControlLabel
                            control={<RadioButtonUnchecked />}
                            size="small"
                            label="Option 1"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                        <FormControlLabel
                            control={<RadioButtonUnchecked />}
                            size="small"
                            label="Option 2"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                        <FormControlLabel
                            disabled
                            control={<RadioButtonUnchecked />}
                            size="small"
                            label="Option 3"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                    </Stack>
                </Box>
            </Box>

            {/* Inline Radio Buttons */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto min-h-[200px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>Radio Buttons</Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-3 sm:!p-5 mt-3">
                    <Stack className='!flex !flex-col sm:!flex-row !gap-4 sm:!gap-7 !p-2 flex-wrap'>
                        <FormControlLabel
                            control={<RadioButtonUnchecked />}
                            size="small"
                            label="Option 1"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                        <FormControlLabel
                            control={<RadioButtonUnchecked />}
                            size="small"
                            label="Option 2"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                        <FormControlLabel
                            disabled
                            control={<RadioButtonUnchecked />}
                            size="small"
                            label="Option 3"
                            sx={{
                                color: "var(--gray-clr)",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "var(--text-title)"
                                },
                                "& .MuiSvgIcon-root": { fontSize: "20px" }
                            }}
                        />
                    </Stack>
                </Box>
            </Box>

            {/* Form Grid */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto min-h-[170px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>Form Grid</Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-3 sm:!p-5 mt-3">
                    <Box className="!flex !flex-col sm:!flex-row !flex-wrap gap-4 sm:gap-6">
                        <Stack className='!flex !flex-col sm:!flex-row w-full gap-4 sm:gap-5 !justify-start !items-start'>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="First Name"
                                inputProps={{ style: { fontSize: '16px' } }}
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        fontSize: "var(--text-title)"
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
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="Last Name"
                                inputProps={{ style: { fontSize: '16px' } }}
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        fontSize: "var(--text-title)"
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
                        </Stack>
                    </Box>
                </Box>
            </Box>

            {/* Form Row */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto min-h-[170px]" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>Form Row</Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-3 sm:!p-5 mt-3">
                    <Box className="!flex !flex-col sm:!flex-row !flex-wrap gap-4 sm:gap-6">
                        <Stack className='!flex !flex-col sm:!flex-row w-full gap-4 sm:gap-5 !justify-start !items-start'>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="First Name"
                                inputProps={{ style: { fontSize: '16px' } }}
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        fontSize: "var(--text-title)"
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
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="Last Name"
                                inputProps={{ style: { fontSize: '16px' } }}
                                sx={{
                                    bg: "white", color: "var(--gray-clr)",
                                    "& .MuiInputBase-root": {
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        fontSize: "var(--text-title)"
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
                        </Stack>
                    </Box>
                </Box>
            </Box>

            {/* button addons */}
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>
                        Button Addons
                    </Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 !flex !flex-col !gap-4">

                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden" sx={{ backgroundColor: "var(--bg-header)" }}>
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
                            placeholder="Search..."
                            inputProps={{ style: { fontSize: '16px' } }}
                            sx={{
                                backgroundColor: "transparent",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    backgroundColor: "transparent",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                    backgroundColor: "transparent",
                                }
                            }}
                        />
                    </Box>

                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden" sx={{ backgroundColor: "var(--bg-header)" }}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            placeholder="Recipient's username"
                            inputProps={{ style: { fontSize: '16px' } }}
                            sx={{
                                backgroundColor: "transparent",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    backgroundColor: "transparent",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                    backgroundColor: "transparent",
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

                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden" sx={{ backgroundColor: "var(--bg-header)" }}>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                borderRadius: "0px",
                                boxShadow: "none",
                                borderRight: "1px solid rgba(255, 255, 255, 0.2)",
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
                            placeholder="Username"
                            inputProps={{ style: { fontSize: '16px' } }}
                            sx={{
                                backgroundColor: "transparent",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    backgroundColor: "transparent",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                    backgroundColor: "transparent",
                                }
                            }}
                        />
                    </Box>

                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden" sx={{ backgroundColor: "var(--bg-header)" }}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            placeholder="Recipient's username"
                            inputProps={{ style: { fontSize: '16px' } }}
                            sx={{
                                backgroundColor: "transparent",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    backgroundColor: "transparent",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "var(--text-title)",
                                    padding: "0 14px",
                                    backgroundColor: "transparent",
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
                                borderRight: "1px solid rgba(255, 255, 255, 0.2)",
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
            <Box className="w-full md:!w-[47%] rounded-md bg-white !pb-10 h-auto" sx={{ backgroundColor: "var(--bg-header)" }}>
                <Box className="!p-5">
                    <Typography className='!text-(size:--text-heading) !text-(color:--black-clr)'>
                        Buttons With Dropdowns
                    </Typography>
                </Box>
                <Divider className='!w-full !p-0' />
                <Box className="!p-5 mt-3 !flex !flex-col !gap-4">

                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden" sx={{ backgroundColor: "var(--bg-header)" }}>
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
                                minWidth: "100px",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    color: "white",
                                    fontSize: "16px",
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

                        <TextField
                            variant="outlined"
                            fullWidth
                            inputProps={{ style: { fontSize: '16px' } }}
                            sx={{
                                backgroundColor: "transparent",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    backgroundColor: "transparent",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "16px",
                                    padding: "0 14px",
                                    backgroundColor: "transparent",
                                }
                            }}
                        />
                    </Box>

                    <Box className="!flex !rounded-md !border !border-[var(--border-grey)] h-10 !flex-row !items-center overflow-hidden" sx={{ backgroundColor: "var(--bg-header)" }}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            inputProps={{ style: { fontSize: '16px' } }}
                            sx={{
                                backgroundColor: "transparent",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    backgroundColor: "transparent",
                                    "& fieldset": { border: "none" },
                                },
                                "& input": {
                                    color: "var(--gray-clr)",
                                    fontSize: "16px",
                                    padding: "0 14px",
                                    backgroundColor: "transparent",
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
                                minWidth: "100px",
                                height: "100%",
                                backgroundColor: "var(--blue-clr)",
                                "& .MuiOutlinedInput-root": {
                                    height: "100%",
                                    borderRadius: "0px",
                                    color: "white",
                                    fontSize: "16px",
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

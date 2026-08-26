import React from 'react'
import { Box, Typography, Stack, TextField, MenuItem, Button } from "@mui/material"

export default function Settings() {
    return (
        <Box className="w-full bg-(--bg-header) rounded-md p-2 sm:p-4">
            <Typography variant="h6" className="!font-bold text-(color:--blue-clr) !mb-3">
                Account Setting
            </Typography>

            {/* Email & Password Row */}
            <Stack className="flex flex-col sm:flex-row gap-3 sm:gap-4 my-0">
                {/* Email */}
                <Box className="w-full sm:w-1/2">
                    <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                        Email
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
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

                {/* Password */}
                <Box className="w-full sm:w-1/2">
                    <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                        Password
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        type='password'
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

            {/* Address 1 */}
            <Box className="w-full">
                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                    Address
                </Typography>
                <TextField
                    variant="outlined"
                    fullWidth
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

            {/* Address 2 */}
            <Box className="w-full">
                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                    Address 2
                </Typography>
                <TextField
                    variant="outlined"
                    fullWidth
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

            {/* City & State Row */}
            <Stack className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* City */}
                <Box className="w-full sm:w-1/2">
                    <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                        City
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        select
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
                        <MenuItem value="Krasnodour">Krasnodour</MenuItem>
                        <MenuItem value="Tyumen">Tyumen</MenuItem>
                        <MenuItem value="Chelyabnisk">Chelyabnisk</MenuItem>
                        <MenuItem value="Moscow">Moscow</MenuItem>
                    </TextField>
                </Box>

                {/* State */}
                <Box className="w-full sm:w-1/2">
                    <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                        State
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        select
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
                        <MenuItem value="Krasnodour">Krasnodour</MenuItem>
                        <MenuItem value="Tyumen">Tyumen</MenuItem>
                        <MenuItem value="Chelyabnisk">Chelyabnisk</MenuItem>
                        <MenuItem value="Moscow">Moscow</MenuItem>
                    </TextField>
                </Box>
            </Stack>

            <Button
                variant='contained'
                size='small'
                sx={{ background: "var(--blue-clr)", color: "white", textTransform: "none", marginY: 2 }}
            >
                Sign In
            </Button>
        </Box>
    )
}
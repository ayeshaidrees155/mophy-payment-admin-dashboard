import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    Divider,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import bg from "/src/assets/WhatsApp Image 2026-07-10 at 6.47.11 PM.jpeg";
import { FcGoogle } from "react-icons/fc";

const inputSx = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
        borderRadius: 2,
        height: 46,
    },
};

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        localStorage.setItem("token", "loggedIn");
        if (email.trim() !== "" && password.trim() !== "") {
            navigate("/content");
        } else {
            return;
        }
    };

    return (
        <Box
            className="flex flex-col md:flex-row min-h-screen overflow-y-auto items-center justify-center"
            sx={{ bgcolor: "var(--white)", p: { xs: 2, sm: 4 } }}
        >
            <Box
                className="hidden md:flex flex-col justify-center items-center"
                sx={{
                    width: "50%",
                    height: "calc(100vh - 32px)",
                    borderRadius: "28px",
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    px: 8,
                    textAlign: "center"
                }}
            >
                <Typography sx={{ color: "var(--bg-header)", fontSize: "var(--text-heading)", mb: 3 }}>
                    Log in to your admin dashboard with your credentials
                </Typography>
                <Typography sx={{ color: "var(--bg-header)", lineHeight: 1.05, mb: 3, fontWeight: "bold" }} variant="h2">
                    The Evolution of<br />
                    <span style={{ textDecoration: "underline", textDecorationThickness: "4px" }}>Mophy</span>
                </Typography>
                <Typography sx={{ color: "var(--bg-header)", fontSize: "var(--text-heading)", lineHeight: 1.7, maxWidth: 500 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
            </Box>

            <Box className="w-full md:w-1/2 flex items-center justify-center py-6 md:py-0">
                <Box className="w-full max-w-md px-4 sm:px-0 mx-auto">
                    <Typography sx={{ mb: 1, textAlign: "center", color: "var(--black-clr)", fontWeight: "bold" }} variant="h4">
                        Welcome Back
                    </Typography>
                    <Typography sx={{ color: "var(--gray-clr)", textAlign: "center", mb: 3, fontSize: "var(--text-body)" }}>
                        Login page allows users to enter login credentials for authentication.
                    </Typography>

                    <Divider sx={{ mb: 3, color: "black", fontSize: "var(--text-body)" }}>Login</Divider>

                    <Box className="flex flex-col sm:flex-row gap-4 mb-5">
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<FcGoogle />}
                            sx={{ height: 50, textTransform: "none", color: "#EA4335", borderColor: "#EA4335", borderRadius: 2 }}
                        >
                            Sign in with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<AppleIcon className="!text-(--black-clr)" />}
                            sx={{ height: 50, borderRadius: 2, textTransform: "none", color: "var(--gray-clr)", borderColor: "var(--black-clr)", background: "white" }}
                        >
                            Sign in with Apple
                        </Button>
                    </Box>

                    <Typography sx={{ mb: 1, color: "black", fontSize: "var(--text-body)" }}>
                        Email <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="hello@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            mb: 2, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-body)",
                                ...inputSx
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

                    <Typography sx={{ mb: 1, color: "black", fontSize: "var(--text-body)" }}>
                        Password <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            mb: 2, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-body)",
                                ...inputSx
                            },
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--border-grey)",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "var(--blue-clr)",
                                borderWidth: "1px"
                            }
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    <Box className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Already have an account?"
                            sx={{ color: "var(--gray-clr)", '& .MuiTypography-root': { fontSize: "var(--text-title)" } }}
                        />
                        <Typography component="a" href="#" sx={{ color: "var(--blue-clr)", textDecoration: "none", fontSize: "var(--text-title)" }}>
                            Forgot Password?
                        </Typography>
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleLogin}
                        sx={{ height: 50, borderRadius: 2, backgroundColor: "var(--blue-clr)", color: "var(--bg-header)", textTransform: "none", fontSize: 16 }}
                    >
                        Sign Me Up
                    </Button>

                    <Typography sx={{ textAlign: "center", color: "var(--gray-clr)", my: 2, fontSize: "var(--text-body)" }}>
                        Not registered?{" "}
                        <Typography component="span" onClick={() => navigate("/register")} sx={{ color: "var(--blue-clr)", fontWeight: 700, cursor: "pointer" }}>
                            Register
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
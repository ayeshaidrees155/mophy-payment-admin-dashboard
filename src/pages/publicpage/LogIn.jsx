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
import bg from "/src/assets/bgImg.jpeg";
import { FcGoogle } from "react-icons/fc";

const inputSx = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
        borderRadius: 2,
        height: 46,
        "@media (max-width: 600px)": {
            fontSize: "16px !important",
        },
    },
    "& .MuiInputBase-input": {
        "@media (max-width: 600px)": {
            fontSize: "16px !important",
        },
    },
};

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(val)) {
            setEmailError("");
        }
    };

    const handlePasswordChange = (e) => {
        const val = e.target.value;
        setPassword(val);
        const passwordRegex = /^\d{8}$/;
        if (passwordRegex.test(val)) {
            setPasswordError("");
        }
    };

    const validateForm = () => {
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address");
            isValid = false;
        }

        const passwordRegex = /^\d{8}$/;
        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            setPasswordError("Password must be exactly 8 digits");
            isValid = false;
        }

        return isValid;
    };

    const handleLogin = () => {
        if (validateForm()) {
            localStorage.setItem("token", "loggedIn");
            navigate("/content");
        }
    };

    return (
        <Box
            className="flex flex-col md:flex-row w-screen min-h-screen md:h-screen overflow-y-auto md:overflow-hidden items-center justify-center m-0"
            sx={{ bgcolor: "var(--white)", p: { xs: 1.5, sm: 2 } }}
        >
            <Box
                className="hidden md:flex flex-col justify-center items-center"
                sx={{
                    width: "50%",
                    height: "100%",
                    borderRadius: "20px",
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    px: 6,
                    textAlign: "center"
                }}
            >
                <Typography sx={{ color: "var(--bg-header)", fontSize: "var(--text-heading)", mb: 2 }}>
                    Log in to your admin dashboard with your credentials
                </Typography>
                <Typography sx={{ color: "var(--bg-header)", lineHeight: 1.05, mb: 2, fontWeight: "bold" }} variant="h3">
                    The Evolution of<br />
                    <span style={{ textDecoration: "underline", textDecorationThickness: "4px" }}>Mophy</span>
                </Typography>
                <Typography sx={{ color: "var(--bg-header)", fontSize: "var(--text-heading)", lineHeight: 1.5, maxWidth: 450 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
            </Box>

            <Box className="w-full md:w-1/2 flex items-center justify-center h-full overflow-y-auto py-2">
                <Box className="w-full max-w-md px-3 sm:px-0 mx-auto">
                    <Typography sx={{ mb: 0.5, textAlign: "center", color: "var(--black-clr)", fontWeight: "bold" }} variant="h5">
                        Welcome Back
                    </Typography>
                    <Typography sx={{ color: "var(--gray-clr)", textAlign: "center", mb: 1.5, fontSize: "var(--text-body)" }}>
                        Login page allows users to enter login credentials for authentication.
                    </Typography>

                    <Divider sx={{ mb: 2, color: "black", fontSize: "var(--text-body)" }}>Login</Divider>

                    <Box className="flex flex-col sm:flex-row gap-2.5 mb-3">
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<FcGoogle />}
                            sx={{ height: 40, textTransform: "none", color: "#EA4335", borderColor: "#EA4335", borderRadius: 2, fontSize: "var(--text-body)" }}
                        >
                            Sign in with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<AppleIcon className="!text-(--black-clr)" />}
                            sx={{ height: 40, borderRadius: 2, textTransform: "none", color: "var(--gray-clr)", borderColor: "black", background: "white", fontSize: "var(--text-body)" }}
                        >
                            Sign in with Apple
                        </Button>
                    </Box>

                    <Typography sx={{ mb: 0.5, color: "black", fontSize: "var(--text-body)" }}>
                        Email <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="hello@example.com"
                        value={email}
                        onChange={handleEmailChange}
                        error={Boolean(emailError)}
                        helperText={emailError}
                        sx={{
                            mb: 1.5, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px !important",
                                minHeight: "40px !important",
                                maxHeight: "40px !important",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-body)",
                                ...inputSx["& .MuiOutlinedInput-root"]
                            },
                            "& .MuiInputBase-input": {
                                height: "40px !important",
                                padding: "0 14px !important",
                                boxSizing: "border-box",
                                ...inputSx["& .MuiInputBase-input"],
                                "&:-webkit-autofill": {
                                    WebkitBoxShadow: "0 0 0 1000px white inset !important",
                                    WebkitTextFillColor: "var(--gray-clr) !important",
                                    caretColor: "var(--gray-clr)",
                                    transition: "background-color 9999s ease-in-out 0s",
                                    height: "40px !important",
                                    padding: "0 14px !important",
                                },
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

                    <Typography sx={{ mb: 0.5, color: "black", fontSize: "var(--text-body)" }}>
                        Password <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                        placeholder="8 digits"
                        slotProps={{
                            htmlInput: { maxLength: 8 },
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="small">
                                            {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{
                            mb: 1.5, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px !important",
                                minHeight: "40px !important",
                                maxHeight: "40px !important",
                                color: "var(--gray-clr)",
                                fontSize: "var(--text-body)",
                                ...inputSx["& .MuiOutlinedInput-root"]
                            },
                            "& .MuiInputBase-input": {
                                height: "40px !important",
                                padding: "0 14px !important",
                                boxSizing: "border-box",
                                ...inputSx["& .MuiInputBase-input"],
                                "&:-webkit-autofill": {
                                    WebkitBoxShadow: "0 0 0 1000px white inset !important",
                                    WebkitTextFillColor: "var(--gray-clr) !important",
                                    caretColor: "var(--gray-clr)",
                                    transition: "background-color 9999s ease-in-out 0s",
                                    height: "40px !important",
                                    padding: "0 14px !important",
                                },
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

                    <Box className="flex flex-row justify-between items-center mb-3">
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Already have an account?"
                            sx={{ color: "var(--gray-clr)", margin: 0, '& .MuiTypography-root': { fontSize: "var(--text-title)" } }}
                        />
                        <Typography component="a" href="#" sx={{ color: "var(--blue-clr)", textDecoration: "none", fontSize: "var(--text-title)" }}>
                            Forgot Password?
                        </Typography>
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleLogin}
                        sx={{ height: 42, borderRadius: 2, backgroundColor: "var(--blue-clr)", color: "var(--bg-header)", textTransform: "none", fontSize: "var(--text-body)" }}
                    >
                        Sign Me Up
                    </Button>

                    <Typography sx={{ textAlign: "center", color: "var(--gray-clr)", my: 1.5, fontSize: "var(--text-body)" }}>
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
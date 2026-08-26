import React from "react";
import { Box, Typography, Button, Avatar, Divider, Grid, Card, LinearProgress } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import GetAppIcon from "@mui/icons-material/GetApp";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Img from "/src/assets/WhatsApp Image 2026-07-10 at 6.47.11 PM.jpeg"
import { PieChart, Pie, Cell, BarChart, Bar, ResponsiveContainer } from 'recharts';

const barData = [
    { name: 'Mon', uv: 40 }, { name: 'Tue', uv: 30 }, { name: 'Wed', uv: 20 },
    { name: 'Thu', uv: 27 }, { name: 'Fri', uv: 18 }, { name: 'Sat', uv: 23 },
    { name: 'Sun', uv: 34 }, { name: 'Mon', uv: 41 }, { name: 'Tue', uv: 30 },
];

// progress circle dat
const circleData = [{ value: 85 }, { value: 15 }];
const COLORS = ['#1EAAE7', '#E0E0E0'];
export default function BalanceCard() {
    return (
        <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", gap: 3, }}>

            {/* Main bal card */}
            <Card sx={{ p: 3, borderRadius: "10px", width: "100%", height: "230px", backgroundImage: `url(${Img})`, backgroundSize: "cover", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                <Box>
                    <Typography sx={{ fontSize: "14px", fontWeight: 500, opacity: 0.9, mb: 1 }}>Main Balance</Typography>
                    <Typography sx={{ fontSize: "36px", fontWeight: 700, mt: -1 }}>$673,412.66</Typography>
                    <Typography sx={{ fontSize: "14px", letterSpacing: "1px", fontWeight: 600 }}>* * ***1234</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box><Typography sx={{ fontSize: "12px", opacity: 0.8 }}>Valid Thru</Typography><Typography sx={{ fontSize: "16px", fontWeight: 700 }}>08/12</Typography></Box>
                    <Box sx={{ textAlign: "right" }}><Typography sx={{ fontSize: "12px", opacity: 0.8 }}>Card Holder</Typography><Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Franklin Jr.</Typography></Box>
                </Box>
            </Card>

            {/* Static card */}
            <Card sx={{ p: 3, borderRadius: "10px", width: "100%", flexGrow: 1, background: "var(--bg-header)", color: "var(--black-clr)" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "var(--black-clr)", mb: 1 }}>Statistic</Typography>
                <Typography sx={{ fontSize: "14px", color: "#878E9B", mb: 3 }}>Lorem ipsum dolor sit amet, consectetur</Typography>

                {/* Progress Circle Container */}
                <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "160px", mb: 4 }}>
                    {/* Donut Chart using Recharts */}
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={circleData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={75}
                                fill="#1EAAE7"
                                paddingAngle={5}
                                dataKey="value"
                                startAngle={90}
                                endAngle={450}
                            >
                                {circleData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    {/* text */}
                    <Typography sx={{ position: "absolute", fontSize: "32px", fontWeight: 800, color: "var(--black-clr)" }}>
                        85%
                    </Typography>
                </Box>

                {/* bar chart*/}
                <Box sx={{ height: "60px" }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                            <Bar dataKey="uv" fill="#1EAAE7" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Card>

        </Grid>
    )
}

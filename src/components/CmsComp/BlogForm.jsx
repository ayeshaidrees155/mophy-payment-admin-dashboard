import React, { useState } from "react";
import {
    Box,
    Paper,
    TextField,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    Select,
    MenuItem,
    Divider,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextareaAutosize,
    Stack,
    Button, FormControlLabel, Checkbox,
    Radio,
    FormGroup
    ,
} from "@mui/material";



import {
    FormatBold,
    FormatItalic,
    Link as LinkIcon,
    FormatListBulleted,
    FormatListNumbered,
    FormatAlignLeft,
    FormatAlignCenter,
    MoreVert,


} from "@mui/icons-material";
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EyeIcon from '@mui/icons-material/RemoveRedEyeRounded';
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded';


export default function BlogForm() {

    const [blogData, setBlogData] = useState({
        title: "",
        description: "",
        excerpt: "",
        customfieldTitle: "",
        customfieldValue: "",
        allowComments: false,
        slug: "",
        pageTitle: "",
        keywords: "",
        metaDescription: ""
    })

    const handleBlogChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBlogData({ ...blogData, [name]: type === 'checkbox' ? "checked" : value });

    }

    const handleBlogPublish = () => {
        const finalBlogData = {
            id: Date.now(),
            ...blogData,
            formats: formats,
            alignment: alignment,
            textType: textType,
            status: status,
            visibility: visible,
            publishDate: date
        };

        const existingBlogs = JSON.parse(localStorage.getItem("BlogData")) || [];
        existingBlogs.push(finalBlogData);

        localStorage.setItem("BlogData", JSON.stringify(existingBlogs));
        alert("Blog data saved....")

        setBlogData({
            title: "",
            description: "",
            excerpt: "",
            customfieldTitle: "",
            customfieldValue: "",
            allowComments: false,
            slug: "",
            pageTitle: "",
            keywords: "",
            metaDescription: ""
        });
    }
    const {
        title,
        description,
        excerpt,
        customfieldTitle,
        customfieldValue,
        allowComments,
        slug,
        pageTitle,
        keywords,
        metaDescription
    } = blogData;




    const [formats, setFormats] = useState([]);
    const [alignment, setAlignment] = useState("left");
    const [textType, setTextType] = useState("Paragraph");

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);

    };

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const id = React.useId();
    const ariaLabel = { 'aria-label': 'description' };


    const [status, setStatus] = useState("Published");
    const [tempStatus, setTempStatus] = useState("Published");
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
        setTempStatus(status);

    }

    const handleOkClick = () => {
        setStatus(tempStatus);
        setIsEditing(false);

    }
    const handleCancelClick = () => {
        setIsEditing(false);

    }

    const [visible, setVisible] = useState("Public");
    const [tempVisible, setTempVisible] = useState("Public");
    const [isEditVisible, setIsEditVisible] = useState(false);

    const handleOkVisible = () => {
        setVisible(tempVisible);
        setIsEditVisible(false);
    }
    const handleCancelVisible = () => {
        setIsEditVisible(false)
    }
    const handleEditVisible = () => {
        setIsEditVisible(true);
        setTempVisible(visible);
        console.log("clicked");

    }
    const [date, setDate] = useState(" 2022-04-17");
    const [tempDate, setTempDate] = useState(" 2022-04-17");
    const [isEditDate, setIsEditDate] = useState(false);

    const handleOkdate = () => {
        setDate(tempDate);
        setIsEditDate(false);
    }
    const handleCanceldate = () => {
        setIsEditDate(false)
    }
    const handleEditDate = () => {
        setIsEditDate(true);
        setTempDate(date);
        console.log("clicked");

    }





    return (
        <Box className="flex flex-col md:flex-row w-full gap-6 p-4">
            {/* left side */}
            <Box className="w-full lg:w-[60%] h-auto !rounded-md">

                {/* blog editor */}
                <Box sx={{ maxWidth: 800, mx: "auto", p: { xs: 2, sm: 3 }, backgroundColor: "var(--bg-header)" }} className="rounded-md">
                    {/* Title Input */}
                    <Typography variant="subtitle2" sx={{ mb: 1, fontSize: "var(--text-title)", color: "var(--black-clr)" }}>
                        Title
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Title"
                        variant="outlined"
                        name="title"
                        value={title}
                        onChange={handleBlogChange}
                        sx={{
                            mb: 3, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)"
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

                    {/* Description Label */}
                    <Typography variant="subtitle2" sx={{ mb: 1, fontSize: "var(--text-title)", color: "var(--black-clr)" }}>
                        Description
                    </Typography>

                    {/* Custom Editor Container */}
                    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
                        {/* Toolbar Section */}
                        <Box sx={{ display: "flex", alignItems: "center", p: 1, borderBottom: "1px solid #e0e0e0", flexWrap: "wrap", gap: 1 }}
                            className="bg-(--bg-body)">

                            {/* Text Type Dropdown */}
                            <Select
                                value={textType}
                                onChange={(e) => setTextType(e.target.value)}
                                size="small"
                                sx={{ height: 32, fontSize: 14, bg: "white" }}
                            >
                                <MenuItem value="Paragraph">Paragraph</MenuItem>
                                <MenuItem value="Heading 1">Heading 1</MenuItem>
                                <MenuItem value="Heading 2">Heading 2</MenuItem>
                            </Select>

                            <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

                            {/* Formatting Buttons */}
                            <ToggleButtonGroup value={formats} onChange={handleFormat} size="small" aria-label="text formatting">
                                <ToggleButton value="bold" aria-label="bold">
                                    <FormatBold fontSize="small" />
                                </ToggleButton>
                                <ToggleButton value="italic" aria-label="italic">
                                    <FormatItalic fontSize="small" />
                                </ToggleButton>
                            </ToggleButtonGroup>

                            <IconButton size="small">
                                <LinkIcon fontSize="small" />
                            </IconButton>

                            <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

                            {/* Lists Buttons */}
                            <IconButton size="small"><FormatListBulleted fontSize="small" /></IconButton>
                            <IconButton size="small"><FormatListNumbered fontSize="small" /></IconButton>

                            <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

                            {/* Alignment Buttons */}
                            <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} size="small" aria-label="text alignment">
                                <ToggleButton value="left" aria-label="left aligned">
                                    <FormatAlignLeft fontSize="small" />
                                </ToggleButton>
                                <ToggleButton value="center" aria-label="center aligned">
                                    <FormatAlignCenter fontSize="small" />
                                </ToggleButton>
                            </ToggleButtonGroup>

                            <Box sx={{ flexGrow: 1 }} />

                            <IconButton size="small"><MoreVert fontSize="small" /></IconButton>
                        </Box>

                        {/* Text Input Area */}
                        <TextField
                            fullWidth
                            multiline
                            rows={8}
                            variant="standard"
                            name="description"
                            value={description}
                            onChange={handleBlogChange}
                            slotProps={{
                                input: {
                                    disableUnderline: true,
                                },
                            }}
                            sx={{
                                p: 2,
                                "& .MuiInputBase-root": {
                                    padding: 0,
                                    fontWeight: formats.includes("bold") ? "bold" : "normal",
                                    fontStyle: formats.includes("italic") ? "italic" : "normal",
                                    textAlign: alignment,
                                },
                            }}
                            className="bg-(--bg-body)"
                        />
                    </Paper>
                </Box>

                {/* Excerpt */}
                <Accordion defaultExpanded className="!rounded-md !mt-4" sx={{ backgroundColor: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", minHeight: 48 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                Excerpt
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails className="!px-4 sm:!px-6">
                        <Typography className="!text-(size:--text-body) !mt-2 !mb-2" sx={{ color: "var(--black-clr)" }}>Excerpt</Typography>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={4}
                            name="excerpt"
                            value={excerpt}
                            onChange={handleBlogChange}
                            className="w-full p-2 rounded-md !border !border-(--border-grey) text-(color:--gray-clr) focus:outline focus:!outline-1 focus:!outline-[var(--blue-clr)]"
                        />
                    </AccordionDetails>
                </Accordion>

                {/* Custom Fields */}
                <Accordion defaultExpanded className="!rounded-md !mt-4" sx={{ backgroundColor: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", minHeight: 48 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                Custom Fields
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails className="!px-4 sm:!px-6">
                        <Typography className="!text-(size:--text-title) !mt-2 !mb-3" sx={{ color: "#77799F", fontWeight: 500 }}>Add new custom field:</Typography>

                        <Stack className="!flex !flex-col sm:!flex-row gap-4 w-full">
                            {/* title */}
                            <Box className="w-full sm:w-1/2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Title
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Title"
                                    variant="outlined"
                                    value={customfieldTitle}
                                    name="customfieldTitle"
                                    onChange={handleBlogChange}
                                    sx={{
                                        mt: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)"
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
                            {/* textarea */}
                            <Box className="w-full sm:w-1/2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Value
                                </Typography>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    name="customfieldValue"
                                    value={customfieldValue}
                                    onChange={handleBlogChange}
                                    className="w-full mt-1 p-2 rounded-md !border !border-(--border-grey) text-(color:--gray-clr) focus:outline focus:!outline-1 focus:!outline-[var(--blue-clr)]"
                                />
                            </Box>
                        </Stack>
                        <Button size="medium" variant="contained" className="!bg-(--blue-clr) !text-(size:--text-title) text-white !mt-4" sx={{ textTransform: "none" }}>Add Custom Field</Button>
                    </AccordionDetails>
                </Accordion>

                {/* DISCUSSION */}
                <Accordion defaultExpanded className="!rounded-md !mt-4" sx={{ backgroundColor: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", minHeight: 48 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                Discussion
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails className="!px-4 sm:!px-6">
                        <Box>
                            <FormControlLabel control={
                                <Checkbox
                                    name="allowComments"
                                    checked={Boolean(blogData?.allowComments)}
                                    onChange={handleBlogChange}
                                />} size="small"
                                label="Allow Comments" sx={{
                                    color: "var(--gray-clr)",
                                    "& .MuiFormControlLabel-label": {
                                        fontSize: "var(--text-title)"
                                    },
                                    "& .MuiSvgIcon-root": { fontSize: "20px" }
                                }} />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                {/* Slug */}
                <Accordion defaultExpanded className="!rounded-md !mt-4" sx={{ backgroundColor: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", minHeight: 48 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography sx={{ color: "var(--black-clr)" }} className="!font-bold !text-(size:--text-title) !px-3">
                                Slug
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails className="!px-4 sm:!px-6">
                        <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                            Slug
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={slug}
                            name="slug"
                            onChange={handleBlogChange}
                            sx={{
                                mt: 1, mb: 1, bg: "white", color: "var(--gray-clr)",
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    color: "var(--gray-clr)"
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
                    </AccordionDetails>
                </Accordion>

                {/* SEO */}
                <Accordion defaultExpanded className="!rounded-md !mt-4" sx={{ backgroundColor: "var(--bg-header)", color: "var(--black-clr)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", minHeight: 48 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                SEO
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails className="!px-4 sm:!px-6" sx={{ color: "var(--black-clr)" }}>
                        <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                            Page Title
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Page title"
                            variant="outlined"
                            name="pageTitle"
                            value={pageTitle}
                            onChange={handleBlogChange}
                            sx={{
                                mt: 1, mb: 3, bg: "white", color: "var(--gray-clr)",
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    color: "var(--gray-clr)"
                                },
                                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--border-grey)",
                                },
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--blue-clr)",
                                    borderWidth: "1px",
                                    color: "var(--gray-clr)"
                                }
                            }}
                        />
                        {/* keywords or textarea */}
                        <Stack className="!flex !flex-col sm:!flex-row gap-4 w-full">
                            {/* keywords */}
                            <Box className="w-full sm:w-1/2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Keywords
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter meta keywords"
                                    variant="outlined"
                                    value={keywords}
                                    name="keywords"
                                    onChange={handleBlogChange}
                                    sx={{
                                        mt: 1, bg: "white", color: "var(--gray-clr)",
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)"
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
                            {/* textarea */}
                            <Box className="w-full sm:w-1/2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Descriptions
                                </Typography>
                                <TextareaAutosize
                                    name="meta description"
                                    value={metaDescription}
                                    onChange={handleBlogChange}
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Enter meta description"
                                    className="w-full mt-1 p-2 rounded-md !border !border-(--border-grey) text-(color:--gray-clr) focus:outline focus:!outline-1 focus:!outline-[var(--blue-clr)]"
                                />
                            </Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Box>
            {/* right side */}
            <Box className="w-full md:w-[40%] h-auto">
                <Box className="w-full h-auto px-2 md:px-0">

                    {/* status */}
                    <Accordion defaultExpanded className="!rounded-md" sx={{ backgroundColor: "var(--bg-header)", color: "var(--black-clr)" }}>
                        <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}>
                            <Box>
                                <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                    Published
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails className="!px-4 md:!px-7">

                            {/* status row */}
                            <Box className="!flex !flex-row !flex-wrap !items-center !justify-between sm:!justify-start !border-b !border-dotted !border-(--border-grey) !py-2 gap-y-2">
                                <Box className="!flex !flex-row !items-center">
                                    <KeyRoundedIcon className="!text-(size:--text-title)" />
                                    <Typography className="!text-(size:--text-title) !px-1">Status:</Typography>
                                    <Typography variant="body2" className="!text-(color:--gray-clr) !px-2">{status}</Typography>
                                </Box>
                                {!isEditing && (
                                    <Button onClick={handleEditClick}
                                        className="!text-(color:--blue-clr) !font-bold !rounded-full !h-6 !w-5 !ml-auto sm:!ml-2" sx={{ textTransform: "none", background: "var(--bg-blue)" }}>
                                        Edit
                                    </Button>
                                )}
                            </Box>

                            {/* content type editing toggle */}
                            {isEditing && (
                                <Box className="border border-(--border-grey) my-3 rounded-md !text-(color:--gray-clr) !px-4 md:!px-5 !py-3">
                                    <Typography className="!text-(size:--text-body)">Content Type</Typography>
                                    <Select
                                        fullWidth
                                        size="small"
                                        value={tempStatus}
                                        onChange={(e) => setTempStatus(e.target.value)}
                                        sx={{ color: "var(--gray-clr)", fontSize: "body2", marginY: 2 }}
                                    >
                                        <MenuItem value="Published" className="!text-(color:--gray-clr)">Published</MenuItem>
                                        <MenuItem value="Draft" className="!text-(color:--gray-clr)">Draft</MenuItem>
                                        <MenuItem value="Trash" className="!text-(color:--gray-clr)">Trash</MenuItem>
                                        <MenuItem value="Private" className="!text-(color:--gray-clr)">Private</MenuItem>
                                        <MenuItem value="Pending" className="!text-(color:--gray-clr)">Pending</MenuItem>
                                    </Select>
                                    <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                                        <Button variant="contained" size="small" onClick={handleOkClick} sx={{ bgcolor: "var(--blue-clr)", textTransform: "none" }}>
                                            Ok
                                        </Button>
                                        <Button variant="contained" size="small" onClick={handleCancelClick} sx={{ bgcolor: "#ffebeb", border: "1px solid red", color: "#ff5b5b", textTransform: "none", "&:hover": { bgcolor: "#ffd4d4" } }}>
                                            Cancel
                                        </Button>
                                    </Box>
                                </Box>
                            )}

                            {/* visible row */}
                            <Box className="!flex !flex-row !flex-wrap !items-center !justify-between sm:!justify-start !border-b !border-dotted !border-(--border-grey) !py-2 gap-y-2">
                                <Box className="!flex !flex-row !items-center">
                                    <EyeIcon className="!text-(size:--text-title)" />
                                    <Typography className="!text-(size:--text-title) !px-1">Visible:</Typography>
                                    <Typography variant="body2" className="!text-(color:--gray-clr) !px-2">{visible}</Typography>
                                </Box>
                                {!isEditVisible && (
                                    <Button onClick={handleEditVisible}
                                        className="!text-(color:--blue-clr) !font-bold !rounded-full !h-6 !w-5 !ml-auto sm:!ml-2" sx={{ textTransform: "none", background: "var(--bg-blue)" }}>
                                        Edit
                                    </Button>
                                )}
                            </Box>

                            {/* visibility editing toggle */}
                            {isEditVisible && (
                                <Box className="border border-(--border-grey) my-3 rounded-md !text-(color:--gray-clr) !px-4 md:!px-5 !py-3">
                                    <Typography className="!text-(size:--text-body)">Visibility</Typography>
                                    <Select
                                        fullWidth
                                        size="small"
                                        value={tempVisible}
                                        onChange={(e) => setTempVisible(e.target.value)}
                                        sx={{ color: "var(--gray-clr)", fontSize: "body2", marginY: 2 }}
                                    >
                                        <MenuItem value="Public" className="!text-(color:--gray-clr)">Public</MenuItem>
                                        <MenuItem value="Password Protected" className="!text-(color:--gray-clr)">Password Protected</MenuItem>
                                        <MenuItem value="Private" className="!text-(color:--gray-clr)">Private</MenuItem>
                                    </Select>
                                    <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                                        <Button variant="contained" size="small" onClick={handleOkVisible} sx={{ bgcolor: "var(--blue-clr)", textTransform: "none" }}>
                                            Ok
                                        </Button>
                                        <Button variant="contained" size="small" onClick={handleCancelVisible} sx={{ bgcolor: "#ffebeb", border: "1px solid red", color: "#ff5b5b", textTransform: "none", "&:hover": { bgcolor: "#ffd4d4" } }}>
                                            Cancel
                                        </Button>
                                    </Box>
                                </Box>
                            )}

                            {/* date row */}
                            <Box className="!flex !flex-row !flex-wrap !items-center !justify-between sm:!justify-start !py-2 gap-y-2">
                                <Box className="!flex !flex-row !items-center">
                                    <CalendarIcon className="!text-(size:--text-title)" />
                                    <Typography className="!text-(size:--text-title) !px-1">Published:</Typography>
                                    <Typography variant="body2" className="!text-(color:--gray-clr) !px-2">{date}</Typography>
                                </Box>
                                {!isEditDate && (
                                    <Button onClick={handleEditDate}
                                        className="!text-(color:--blue-clr) !font-bold !rounded-full !h-6 !w-5 !ml-auto sm:!ml-2" sx={{ textTransform: "none", background: "var(--bg-blue)" }}>
                                        Edit
                                    </Button>
                                )}
                            </Box>

                            {/* date toggle */}
                            {isEditDate && (
                                <Box className="border border-(--border-grey) my-3 rounded-md !text-(color:--gray-clr) !px-4 md:!px-5 !py-3">
                                    <TextField
                                        fullWidth
                                        type="date"
                                        defaultValue={date}
                                        value={tempDate}
                                        onChange={(e) => setTempDate(e.target.value)}
                                        slotProps={{
                                            inputLabel: { shrink: true },
                                        }}
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                height: "40px",
                                                color: "var(--gray-clr)"
                                            }
                                        }}
                                    />
                                    <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                                        <Button variant="contained" size="small" onClick={handleOkdate} sx={{ bgcolor: "var(--blue-clr)", textTransform: "none" }}>
                                            Ok
                                        </Button>
                                        <Button variant="contained" size="small" onClick={handleCanceldate} sx={{ bgcolor: "#ffebeb", border: "1px solid red", color: "#ff5b5b", textTransform: "none", "&:hover": { bgcolor: "#ffd4d4" } }}>
                                            Cancel
                                        </Button>
                                    </Box>
                                </Box>
                            )}

                            <Box className="!flex !justify-end !w-full">
                                <Button
                                    onClick={handleBlogPublish}
                                    size="medium" variant="contained"
                                    sx={{ background: "var(--blue-clr)", fontSize: "var(--text-title)", marginY: 2, textTransform: "none" }}>
                                    Publish
                                </Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* category */}
                    <Accordion defaultExpanded className="!rounded-md !mt-4" sx={{ backgroundColor: "var(--bg-header)" }}>
                        <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}>
                            <Box>
                                <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                    Categories
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails className="!px-4 md:!px-7">
                            <Box className="!border !border-(--border-grey) rounded-md !py-2 !px-4">
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox sx={{ padding: "4px", "& .MuiSvgIcon-root": { fontSize: "20px" } }} />}
                                        size="small"
                                        label="Beauty"
                                        sx={{
                                            marginY: "-2px", marginLeft: 0, "& .MuiFormControlLabel-label": {
                                                fontSize: "var(--text-title)",
                                                paddingLeft: "5px"
                                            }
                                        }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ padding: "4px", "& .MuiSvgIcon-root": { fontSize: "20px" } }} />}
                                        size="small"
                                        label="Lifestyle"
                                        sx={{
                                            margin: 0,
                                            marginY: "-2px",
                                            "& .MuiFormControlLabel-label": {
                                                fontSize: "var(--text-title)",
                                                paddingLeft: "5px"
                                            }
                                        }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ padding: "4px", "& .MuiSvgIcon-root": { fontSize: "20px" } }} />}
                                        size="small"
                                        label="Fashion"
                                        sx={{
                                            margin: 0,
                                            marginY: "-2px",
                                            "& .MuiFormControlLabel-label": {
                                                fontSize: "var(--text-title)",
                                                paddingLeft: "5px"
                                            }
                                        }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ padding: "4px", "& .MuiSvgIcon-root": { fontSize: "20px" } }} />}
                                        size="small"
                                        label="Food"
                                        sx={{
                                            marginY: "-2px", marginLeft: 0, "& .MuiFormControlLabel-label": {
                                                fontSize: "var(--text-title)",
                                                paddingLeft: "5px"
                                            }
                                        }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ padding: "4px", "& .MuiSvgIcon-root": { fontSize: "20px" } }} />}
                                        size="small"
                                        label="Technology"
                                        sx={{
                                            marginY: "-2px", marginLeft: 0, "& .MuiFormControlLabel-label": {
                                                fontSize: "var(--text-title)",
                                                paddingLeft: "5px"
                                            }
                                        }}
                                    />
                                </FormGroup>
                            </Box>

                            <Typography className="!text-(size:--text-title) !text-(color:--gray-clr) !my-2">+ Add New Categories</Typography>
                            <Box className="border !border-(--border-grey) !rounded-md !flex !flex-row">
                                <TextField
                                    type="text"
                                    sx={{
                                        flexGrow: 1,
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "var(--blue-clr)",
                                            borderWidth: "1px",
                                        },
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                            color: "var(--gray-clr)",
                                            border: "none"
                                        }
                                    }}
                                />
                                <Button className="!bg-(--bg-body) !text-(size:--text-body) !text-(color:--gray-clr) !w-24 !rounded-none !shrink-0" sx={{ textTransform: "none" }}>Add new</Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>










    )
}






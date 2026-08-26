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


export default function ContentForm() {

    const [contentData, setContentData] = useState({
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

    const handleContentChange = (e) => {
        const { name, value, type, checked } = e.target;
        setContentData({ ...contentData, [name]: type === 'checkbox' ? "checked" : value });

    }

    const handleContentPublish = () => {
        //throug this func other data(statuspublic etx) will also saved 
        const finalContentData = {
            id: Date.now(),//to generate id
            ...contentData,
            formats: formats,
            alignment: alignment,
            textType: textType,
            status: status,
            visibility: visible,
            publishDate: date
        };

        const existingContents = JSON.parse(localStorage.getItem("ContentData")) || [];
        existingContents.push(finalContentData);

        localStorage.setItem("ContentData", JSON.stringify(existingContents));
        alert("Blog data saved....")

        setContentData({
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
    } = contentData;



    //blog editior states

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
        <Box className="h-auto w-full !flex !flex-col lg:!flex-row !my-5 !gap-4">
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
                        onChange={handleContentChange}
                        sx={{
                            mb: 3, bg: "white", color: "var(--gray-clr)",
                            "& .MuiInputBase-root": {
                                height: "40px",
                                color: "var(--gray-clr)"
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

                    {/* Description Label */}
                    <Typography variant="subtitle2" sx={{ mb: 1, fontSize: "var(--text-title)", color: "var(--black-clr)" }}>
                        Description
                    </Typography>

                    {/* Custom Editor Container */}
                    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
                        {/* Toolbar Section */}
                        <Box sx={{ display: "flex", alignItems: "center", p: 1, bg: "var(--bg-body) !important", borderBottom: "1px solid #e0e0e0", flexWrap: "wrap", gap: 1 }}
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
                                <ToggleButton value="italic" aria-label="italic" >
                                    <FormatItalic fontSize="small" />
                                </ToggleButton>
                            </ToggleButtonGroup>

                            <IconButton size="small" >
                                <LinkIcon fontSize="small" />
                            </IconButton>

                            <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

                            {/* Lists Buttons */}
                            <IconButton size="small" ><FormatListBulleted fontSize="small" /></IconButton>
                            <IconButton size="small" ><FormatListNumbered fontSize="small" /></IconButton>

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
                            onChange={handleContentChange}
                            InputProps={{ disableUnderline: true }}
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

                {/* excerpt */}
                <Accordion defaultExpanded className="!rounded-md !my-2" sx={{ backgroundColor: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                Excerpt
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="!text-(size:--text-body) !mt-6 !px-3" sx={{ color: "var(--black-clr)" }}>Excerpt</Typography>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={4}
                            name="excerpt"
                            value={excerpt}
                            onChange={handleContentChange}
                            className="!w-full max-w-[515px] !mx-3 rounded-md !border-1 !border-(--border-grey) text-(color:--gray-clr) !focus:outline focus:!outline-1 focus:!outline-[var(--blue-clr)] p-2"
                        />
                    </AccordionDetails>
                </Accordion>

                {/* custom fields */}
                <Accordion defaultExpanded className="!rounded-md !my-2" sx={{ backgroundColor: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                Custom Fields
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="!text-(size:--text-title) !mt-6 !px-3" sx={{ color: "#77799F", fontWeight: 500 }}>Add new custom field:</Typography>

                        <Stack className="!px-3 !flex !flex-col sm:!flex-row !gap-4">
                            {/* title */}
                            <Box className="!w-full sm:!w-1/2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Title
                                </Typography>
                                <TextField
                                    placeholder="Title"
                                    variant="outlined"
                                    value={customfieldTitle}
                                    name="customfieldTitle"
                                    onChange={handleContentChange}
                                    fullWidth
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
                            </Box>
                            {/* textarea */}
                            <Box className="!w-full sm:!w-1/2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)", px: { sm: 1 } }}>
                                    Value
                                </Typography>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    name="customfieldValue"
                                    value={customfieldValue}
                                    onChange={handleContentChange}
                                    className="!w-full max-w-[240px] !mx-3 rounded-md !border-1 !border-(--border-grey) text-(color:--gray-clr) !focus:outline focus:!outline-1 focus:!outline-[var(--blue-clr)] p-2"
                                />
                            </Box>
                        </Stack>
                        <Button size="medium" variant="contained" className="!bg-(--blue-clr) !text-(size:--text-title) text-white !mx-3 !mt-2" sx={{ textTransform: "none" }}>Add Custom Field</Button>
                    </AccordionDetails>
                </Accordion>

                {/* DISCUSSION */}
                <Accordion defaultExpanded className="!rounded-md !my-2" sx={{ backgroundColor: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                Discussion
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails className="!px-6">
                        <Box>
                            <FormControlLabel control={
                                <Checkbox
                                    name="allowComments"
                                    value={contentData.allowComments}
                                    onChange={handleContentChange}
                                />} size="small"
                                label="Allow Comments" sx={{
                                    color: "var(--gray-clr)",
                                    "& .MuiFormControlLabel-label": {
                                        fontSize: "var(--text-title)"
                                    },
                                    "& .MuiSvgIcon-root": { fontSize: "20px", }
                                }} />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                {/* slug */}
                <Accordion defaultExpanded className="!rounded-md !my-2" sx={{ backgroundColor: "var(--bg-header)" }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                Slug
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails className="!px-6">
                        <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                            Slug
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={slug}
                            name="slug"
                            onChange={handleContentChange}
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
                    </AccordionDetails>
                </Accordion>

                {/* SEO */}
                <Accordion defaultExpanded className="!rounded-md !my-2" sx={{ backgroundColor: "var(--bg-header) " }}>
                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>
                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3" sx={{ color: "var(--black-clr)" }}>
                                SEO
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails className="!px-6">
                        <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                            Page Title
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Page title"
                            variant="outlined"
                            name="pageTitle"
                            value={pageTitle}
                            onChange={handleContentChange}
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
                                    borderWidth: "1px",
                                    color: "var(--gray-clr)"
                                }
                            }}
                        />
                        {/* keywords or textarea */}
                        <Stack className="!flex !flex-col sm:!flex-row !gap-4">
                            {/* keywords */}
                            <Box className="!w-full sm:!w-1/2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)" }}>
                                    Keywords
                                </Typography>
                                <TextField
                                    placeholder="Enter meta keywords"
                                    variant="outlined"
                                    value={keywords}
                                    name="keywords"
                                    onChange={handleContentChange}
                                    fullWidth
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
                            </Box>
                            {/* textarea */}
                            <Box className="!w-full sm:!w-1/2">
                                <Typography variant="subtitle2" sx={{ mt: 1, fontSize: "var(--text-body)", color: "var(--black-clr)", px: { sm: 1 } }}>
                                    Descriptions
                                </Typography>
                                <TextareaAutosize
                                    name="meta description"
                                    value={metaDescription}
                                    onChange={handleContentChange}
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Enter meta keywords"
                                    className="!w-full max-w-[250px] !mx-3 rounded-md !border-1 !border-(--border-grey) text-(color:--gray-clr) !focus:outline focus:!outline-1 focus:!outline-[var(--blue-clr)] p-2"
                                />
                            </Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

            </Box>
            {/* right side */}
            <Box className="w-full lg:w-[40%] h-auto lg:ps-10 mt-5 lg:mt-0">

                {/* status */}
                <Accordion defaultExpanded className="!rounded-md !my-2" sx={{ backgroundColor: "var(--bg-header)" }}>

                    <AccordionSummary sx={{ borderBottom: "1px solid #d7d3d3", height: 10 }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}>

                        <Box>
                            <Typography className="!font-bold !text-(size:--text-title) !px-3 " sx={{ color: "var(--black-clr)" }}>
                                Published
                            </Typography>
                        </Box>

                    </AccordionSummary>
                    <AccordionDetails className="!px-7">

                        {/* status row */}
                        <Box className=" !flex !flex-row !items-center !border-b !border-dotted !border-(--border-grey) !py-2" >
                            <KeyRoundedIcon className="!text-(size:--text-title)" sx={{ color: "var(--black-clr)" }} />
                            <Typography className="!text-(size:--text-title) !px-1" sx={{ color: "var(--black-clr)" }}>Status:</Typography>
                            <Typography variant="body2" className=" !text-(color:--gray-clr) !px-2">{status}</Typography>
                            {/* editing pr hide hjai gaa */}
                            {!isEditing && (

                                <Button onClick={handleEditClick}
                                    className="!text-(color:--blue-clr) !font-bold !rounded-full !h-6 !w-5" sx={{ textTransform: "none", background: "var(--bg-blue)", }}>
                                    Edit
                                </Button>
                            )}
                        </Box >
                        {/* content type */}
                        {isEditing && (

                            <Box className="border-1 border-(--border-grey) my-3 rounded-md !text-(color:--gray-clr) !px-5 !py-3 ">
                                <Typography className="!text-(size:--text-body)" sx={{ color: "var(--black-clr)" }}>Content Type</Typography>

                                <Select
                                    fullWidth
                                    size="small"
                                    value={tempStatus}
                                    onChange={(e) => setTempStatus(e.target.value)}
                                    sx={{ color: "var(--gray-clr)", fontSize: "body2", marginY: "2px" }}
                                >
                                    <MenuItem value="Published" className="!text-(color:--gray-clr)">Published</MenuItem>
                                    <MenuItem value="Draft" className="!text-(color:--gray-clr)">Draft</MenuItem>
                                    <MenuItem value="Trash" className="!text-(color:--gray-clr)">Trash</MenuItem>
                                    <MenuItem value="Private" className="!text-(color:--gray-clr)">Private</MenuItem>
                                    <MenuItem value="Pending" className="!text-(color:--gray-clr)">Pending</MenuItem>
                                </Select>

                                {/* Buttons Row */}
                                <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleOkClick}
                                        sx={{ bgcolor: "var(--blue-clr)", textTransform: "none" }}
                                    >
                                        Ok
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleCancelClick}
                                        sx={{ bgcolor: "#ffebeb", border: "1px solid red", color: "#ff5b5b", textTransform: "none", "&:hover": { bgcolor: "#ffd4d4" } }}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </Box>
                        )}

                        {/* visible row*/}
                        <Box className=" !flex !flex-row !items-center !border-b !border-dotted !border-(--border-grey) !py-2">
                            <EyeIcon className="!text-(size:--text-title)" sx={{ color: "var(--black-clr)" }} />
                            <Typography className="!text-(size:--text-title) !px-1" sx={{ color: "var(--black-clr)" }}>Visible:</Typography>
                            <Typography variant="body2" className=" !text-(color:--gray-clr) !px-2">{visible}</Typography>
                            {/* editing pr hide hjai gaa */}
                            {!isEditVisible && (

                                <Button onClick={handleEditVisible}
                                    className="!text-(color:--blue-clr) !font-bold !rounded-full !h-6 !w-5" sx={{ textTransform: "none", background: "var(--bg-blue)", }}>
                                    Edit
                                </Button>
                            )}
                        </Box >
                        {/* visibilty */}
                        {isEditVisible && (

                            <Box className="border-1 border-(--border-grey) my-3 rounded-md !text-(color:--gray-clr) !px-5 !py-3 " sx={{ color: "var(--black-clr)" }}>
                                <Typography className="!text-(size:--text-body)" sx={{ color: "var(--black-clr)" }}>Visibility</Typography>

                                <Select
                                    fullWidth
                                    size="small"
                                    value={tempVisible}
                                    onChange={(e) => setTempVisible(e.target.value)}
                                    sx={{ color: "var(--gray-clr)", fontSize: "body2", marginY: "2px" }}
                                >
                                    <MenuItem value="Public" className="!text-(color:--gray-clr)">Public</MenuItem>
                                    <MenuItem value="Password Protected" className="!text-(color:--gray-clr)">Password Protected</MenuItem>
                                    <MenuItem value="Private" className="!text-(color:--gray-clr)">Private</MenuItem>
                                </Select>

                                {/* Buttons Row */}
                                <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleOkVisible}
                                        sx={{ bgcolor: "var(--blue-clr)", textTransform: "none" }}
                                    >
                                        Ok
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleCancelVisible}
                                        sx={{ bgcolor: "#ffebeb", border: "1px solid red", color: "#ff5b5b", textTransform: "none", "&:hover": { bgcolor: "#ffd4d4" } }}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </Box>
                        )}

                        {/* date row */}
                        <Box className=" !flex !flex-row !items-center !py-2" sx={{ color: "var(--black-clr)" }}>
                            <CalendarIcon className="!text-(size:--text-title)" />
                            <Typography className="!text-(size:--text-title) !px-1">Published:</Typography>
                            <Typography variant="body2" className=" !text-(color:--gray-clr) !px-2">{date}</Typography>
                            {/* editing pr hide hjai gaa */}
                            {!isEditDate && (

                                <Button onClick={handleEditDate}
                                    className="!text-(color:--blue-clr) !font-bold !rounded-full !h-6 !w-5" sx={{ textTransform: "none", background: "var(--bg-blue)", }}>
                                    Edit
                                </Button>
                            )}
                        </Box >
                        {/* data toggle */}
                        {isEditDate && (

                            <Box className="border-1 border-(--border-grey) my-3 rounded-md !text-(color:--gray-clr) !px-5 !py-3 ">
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

                                {/* Buttons Row */}
                                <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleOkdate}
                                        sx={{ bgcolor: "var(--blue-clr)", textTransform: "none" }}
                                    >
                                        Ok
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleCanceldate}
                                        sx={{ bgcolor: "#ffebeb", border: "1px solid red", color: "#ff5b5b", textTransform: "none", "&:hover": { bgcolor: "#ffd4d4" } }}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </Box>
                        )}

                        <Button
                            onClick={handleContentPublish}
                            size="medium" variant="contained"
                            sx={{ background: "var(--blue-clr)", fontSize: "var(--text-title)", float: "right", marginY: 2, textTransform: "none" }}>
                            Publish
                        </Button>
                    </AccordionDetails>
                </Accordion>

                {/* category */}
                <Accordion defaultExpanded className="!rounded-md !my-2" sx={{ backgroundColor: "var(--bg-header)" }}>

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
                    <AccordionDetails className="!px-7 ">
                        {/* options */}
                        <Box className="!border-1 !border-(--border-grey) rounded-md !py-2 !px-4">
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
                                    className="!text-(size:--text-body) !text-(color:--gray-clr)"
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
                                    className="!text-(size:--text-title) !text-(color:--gray-clr)"
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
                                    className="!text-(size:--text-title) !text-(color:--gray-clr)"
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
                                    className="!text-(size:--text-title) !text-(color:--gray-clr)"
                                />
                            </FormGroup>
                        </Box>

                        <Typography className="!text-(size:--text-title) !text-(color:--gray-clr) !my-2">+ Add New Categories</Typography>
                        <Box className="border-1 !border-(--border-grey) !rounded-md !flex !flex-row">
                            <TextField
                                type="text"
                                sx={{
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "var(--blue-clr)",
                                        borderWidth: "1px",
                                    },
                                    "& .MuiInputBase-root": {
                                        width: "100%",
                                        height: "40px",
                                        color: "var(--gray-clr)",
                                        border: "none"
                                    }
                                }}
                            />
                            <Button className="!bg-(--bg-body) !text-(size:--text-body) !text-(color:--gray-clr) !w-24 !rounded-none " sx={{ textTransform: "none" }}>Add new</Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>

            </Box>
        </Box>










    )
}






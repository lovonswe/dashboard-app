import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { DrawerHeader } from "../components/DrawerHeader";
import { Grid, Input, InputAdornment, TextField, IconButton, Modal, Dialog } from "@mui/material";
import { GridItem } from "../components/Item";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../../src/Dash.css';
import CollapsibleTable from "../components/CollapsibleTable";
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { AccountCircle, Add } from "@material-ui/icons";
import styled from "@emotion/styled";
import Form from "../components/Form";
import Card from "../components/Card";
import { Container, WelcomeMessageContainer, ScrollableContainer } from "../style/Card";
import { useTaskStore } from "../appStore";
import MorningSun from "../components/Sun";
import CardTwo from "../components/CardTwo";



export default function Myday() {
    const [clikedInput, setClikedInput] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const { entries } = useTaskStore();

    const initalTask = {
        taskName: "",
        taskType: null,
        taskPriority: null,
        starCount: 0,
        date: null,
        tags: []
    }
    const [task, setTask] = useState(initalTask);


    const handleInputClick = () => {
        setClikedInput(true);

    }
    const handleInputBlur = () => {
        setClikedInput(false);
    }

    const addTask = (e) => {
        initalTask.taskName = e.target.value;
        console.log(initalTask.taskName);
    }

    const validInput = () => {
        const flag = false;
        const taskName = initalTask.taskName.replace(/\s/g, "");
        if (taskName.length === 0) flag = false;
        return flag;
    }
    const handleButtonClick = () => {
        if (validInput) {
            //do further operations
        }
    }

    const openAddTaskDialog = () => {
        setOpenDialog((currentState) => !currentState);
    }

    return (
        <>
            <Container mode="light">

                <Navbar />
                <Box sx={{ display: "flex" }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 2, height: 100 + "vh" }}>
                        <DrawerHeader />
                        <Stack direction={"row"}>
                        <div style={{ height: '88vh', padding: '10px', width: '50%', margin: 'auto' }}>
                            <WelcomeMessageContainer>
                                Good Night, Nahid

                            </WelcomeMessageContainer>
                            <WelcomeMessageContainer fontColor="#777">

                                Run your day or your day will run you
                            </WelcomeMessageContainer>
                            {
                                entries && <ScrollableContainer>
                                    {
                                        entries.map((task) => {
                                            // return <Card task={task} />
                                            return <CardTwo task={task}/>
                                        })
                                    }
                                </ScrollableContainer>
                            }
                            {/* <MorningSun /> */}
                            <Button
                                fullWidth
                                onClick={openAddTaskDialog}
                                variant="outlined"
                                sx={{
                                    width: '100%', // Make the button span the full width
                                    marginTop: 'auto', // Align the button to the bottom of the flex container
                                    // color: 'red',
                                    
                                  }} >Add Task</Button>
                            <Dialog open={openDialog} >

                                <hi> this is nahid</hi>
                                <Form page="Myday" />
                                <Button onClick={openAddTaskDialog}>Close</Button>
                            </Dialog>
                        </div>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </>
    );
}



{/* <Box sx={{ width: '80%' }}>
                        <Input
                            onChange={(e)=>{addTask(e)}}
                            onClick={handleInputClick}
                            onBlur={handleInputBlur}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconButton>
                                        {
                                            clikedInput ? <AddIcon /> : <ListAltIcon />
                                        }
                                    </IconButton>
                                </InputAdornment>
                            }
                            endAdornment={
                                clikedInput ? (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleButtonClick}>
                                             <ArrowUpwardIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ) : null
                            }
                        />
                        </Box> */}
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { DrawerHeader } from "../components/DrawerHeader";
import { Grid, Input, InputAdornment, TextField, IconButton, Modal, Dialog } from "@mui/material";
import { GridItem } from "../components/Item";
import Card from '@mui/material/Card';
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


export const Container = styled.div`
min-height: 100vh;
background: ${({ mode }) => mode === 'dark' ? '#161616' : '#161616'};
background: linear-gradient(158deg, rgb(224, 224, 224) 0%, rrgb(233, 237, 254)100% );
`
export const WelcomeMessageContainer = styled.div`

  color:${({ fontColor }) => fontColor ? fontColor : 'white'};
  font-family: Arial;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;

`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: none;
`;
export const TaskCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 30px;
  border: 1px solid red;
  background-color: #777; /* Change the color as needed */
  border-radius: 6px; /* Adjust the border radius as needed */
  height: 80px; /* Change the height as needed */
//   width: 200px; /* Change the width as needed */
  margin: 0 auto; /* Center horizontally */
  &:hover {
    background-color: #000000;

    /* Display the IconContainer when hovering */

  }
`;
export const LeftPart = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;
`;

export const RightPart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  margin-bottom: 5px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ScrollableContainer = styled.div`
  max-height: 400px; /* Set max height to enable scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: thin; /* Set scrollbar width */
  scrollbar-height: 10px;
  scrollbar-color: #888 #777; /* Set scrollbar color */
  border: 1px solid red;
  padding: 10px;
`;
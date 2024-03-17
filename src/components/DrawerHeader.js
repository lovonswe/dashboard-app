import { styled } from '@mui/material/styles';

export const DrawerHeader = styled('div')(({ theme }) => { 
  console.log("theme : " , theme)
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }});
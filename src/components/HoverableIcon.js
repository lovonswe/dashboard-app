import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    '&:hover': {
      color: theme.palette.primary.main, // Change color on hover
    },
  },
}));

const HoverableIcon = () => {
  const classes = useStyles();

  return (
    <IconButton className={classes.iconButton}>
      <FavoriteIcon />
    </IconButton>
  );
};

export default HoverableIcon;

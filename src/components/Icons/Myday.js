import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Define styles
const useStyles = makeStyles((theme) => ({
  multiCircleIcon: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
    '& circle': {
      fill: 'none',
      stroke: 'black',
      strokeWidth: 2,
      transition: 'transform 0.3s ease-in-out',
    },
    '&:hover circle': {
      transform: 'scale(1.2)', // Change the scale factor according to your preference
    },
  },
}));

// Custom icon component
const Myday = () => {
  const classes = useStyles();

  return (
    <svg className={classes.multiCircleIcon} viewBox="0 0 130 100">
      <circle cx="50" cy="50" r="40" />
      <circle cx="50" cy="50" r="30" />
      <circle cx="50" cy="50" r="20" />
      <circle cx="50" cy="50" r="10" />
      <circle cx="50" cy="50" r="5" />
    </svg>
  );
};

export default Myday;

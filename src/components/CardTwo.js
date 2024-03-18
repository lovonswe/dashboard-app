import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import {
  Delete,
  Update,
  CheckBoxOutlineBlank,
  ExpandMore,
  ExpandLess,
  Margin,
} from "@mui/icons-material";
import { CheckBox } from "@material-ui/icons";
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles((theme) => ({
  card: {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scaleX(1.00005)',
      backgroundColor: '#f2f2f2',
    },
  },
}));

const CardTwo = ({ task }) => {
  const [expanded, setExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const classes = useStyles();



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Card className={classes.card} sx={{marginBottom: "20px"}}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography>
              {task.taskName}
            </Typography>
            <IconButton aria-label="update">
              <Update />
            </IconButton>
            <IconButton aria-label="update">
              <Update />
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="update">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <Delete />
            </IconButton>
            <IconButton aria-label="checkbox" onClick={handleCheckboxChange}>
            {isChecked ? <CheckBox /> : <CheckBoxOutlineBlank />}
            </IconButton>
            <IconButton aria-label="expand" onClick={handleExpandClick}>
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </div>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body1">
            Description: {task.description}
          </Typography>
          <Typography variant="body1">Time: {task.time}</Typography>
          <Typography variant="body1">Priority: {task.priority}</Typography>
          <Typography variant="body1">Type: {task.type}</Typography>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default CardTwo;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Buttons = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant={props.variant} color={props.color} size={props.medium} className={props.className}>
        <b>{props.children}</b>
      </Button>
    </div>
  );
}

export default Buttons;
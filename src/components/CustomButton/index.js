import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const CustomButton =(props)=>(
    <Button
      onClick={props.onHandle}
      variant="contained"
      color="primary" >
        {props.children}
      </Button>
)


CustomButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomButton);
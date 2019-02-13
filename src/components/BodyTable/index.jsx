import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const  CustomizedTable = (props)   => (
    <TableBody>
        <TableRow>
            <CustomTableCell component="th" scope="row"></CustomTableCell>
            <CustomTableCell align="right"></CustomTableCell>
            <CustomTableCell align="right"></CustomTableCell>
            <CustomTableCell align="right"></CustomTableCell>
            <CustomTableCell align="right"></CustomTableCell>
            <CustomTableCell align="right"></CustomTableCell>
        </TableRow>
    </TableBody>

  );

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);

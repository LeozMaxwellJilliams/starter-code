import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import './BasicTable.scss';

// let ordering = ['Id', 'Teacher', 'Score', 'Paper', 'Wood', 'Glass', 'Aluminum',
//   'Batteries', 'Bottles', 'Cans', 'Cardboard', 'Computer Parts']

/**
 * "Get" specifies a generic return
 * @param {*} object data element; see typing in the PropTypes
 */
const getTableHeaders = (object = {}) => {
  return Object.keys(object).map(
    (header, i) => header[0].toUpperCase() + header.slice(1)
  );
}

/**
 * "render" specifies JSX in the return 
 * @param {*} row data element
 */

const renderRows = (row = {}) => {
  return (
    <tr key={row.id}>
      {Object.values(row).map(
        (value, i) => <td key={i}>{value}</td>
      )}
    </tr>
  )
}

const renderMaterialRows = (row = {}) => {
  return (
    <TableRow key={row.id}>
      {Object.values(row).map(
        (value, i) => <TableCell align="right" key={i}>{value}</TableCell>
      )}
    </TableRow>
  )
}

// const BasicTable = ({ data }) => {
//   return (
//     <table className="basic-table">
//       <tbody>
//         <tr>
//           {getTableHeaders(data[0]).map(
//             headerName => <th key={headerName}>{headerName}</th>
//             )}
//         </tr>
//         {data.map(renderRows)}
//       </tbody>
//     </table>
//   )
// }

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class BasicTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.data,
    } 
  }

  render(){

    const { classes, data} = this.props;

    console.log(classes);
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper} overflowX="auto">
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {getTableHeaders(data[0]).map(
                  headerName => <TableCell key={headerName}>{headerName}</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(renderMaterialRows)}
            </TableBody>
          </Table>
        </div>
      </Paper>
    )
  }
}
// const BasicTable = ({ data}) => {
//     // const { classes } = props;
//     console.log("data", data)
    // return (
    //   <Paper className={styles.root}>
    //     <div className={styles.tableWrapper} overflowX="auto">
    //       <Table className={styles.table}>
    //         <TableHead>
    //           <TableRow>
    //             {getTableHeaders(data[0]).map(
    //               headerName => <TableCell key={headerName}>{headerName}</TableCell>
    //             )}
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {data.map(renderMaterialRows)}
    //         </TableBody>
    //       </Table>
    //     </div>
        
    //   </Paper>

    // )
// }

export default withStyles(styles)(BasicTable);

/**
 * Much more substantial example of typing properties. If the data does not align to the type, an error will occur.
 */
BasicTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      aluminum: PropTypes.number,
      batteries: PropTypes.number,
      bottles: PropTypes.number,
      cans: PropTypes.number,
      cardboard: PropTypes.number,
      computer_parts: PropTypes.number,
      glass: PropTypes.number,
      id: PropTypes.number,
      paper: PropTypes.number,
      teacher: PropTypes.string,
      wood: PropTypes.number
    })
  )
};

BasicTable.defaultProps = {
  data: [],
  classes: PropTypes.object.isRequired
};

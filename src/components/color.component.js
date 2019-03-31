import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ModeleAction,ColorAction } from '../_actions';

const drawerWidth = 240;
  
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },

            root: {
                flexGrow: 1,
            },
            appFrame: {
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            width: '100%',
            },
            appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            },
            'appBar-left': {
                marginLeft: drawerWidth,
            },
            'appBar-right': {
                marginRight: drawerWidth,
            },
            drawerPaper: {
                position: 'relative',
                width: drawerWidth,
            },
            toolbar: theme.mixins.toolbar,
            content: {
                flexGrow: 1,
                backgroundColor: theme.palette.background.default,
                padding: theme.spacing.unit * 3,
            },
            paper: {
                position: 'absolute',
                width: theme.spacing.unit * 50,
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[5],
                padding: theme.spacing.unit * 4,
            },
            table: {
                minWidth: 700,
            },
        });

class Color extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      age: '',
      value: '',
      text:''
    }
    this.handleChange = this.handleChange.bind(this);

  }
  props = {
    value: '',
    label: '',
    elements: [],
    labelWidth: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
dispatch(ColorAction.getColors());
  }

  handleChange (event){    
    const { dispatch } = this.props;
   this.setState ({text:event.target.Colors[event.target.selectedIndex].text});

    this.setState({ value: event.target.value }  ,  dispatch(ColorAction.getColors(this.state.value))
);
    console.log("value",this.state.value)

  };
  
  render() {
    const { classes } = this.props;
    const {Color} = this.props.Color;

    return (
      <div className={classes.root}>

         <div className={classes.appFrame}>
                        <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                <Typography>{'Color'}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                                <Button variant="contained" color="primary" className={classes.button} 
                                component={Link} to={`/add-Color`}>Add Color</Button>
                        
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container >
                            <Paper className={classes.root}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Code Color</TableCell>
                                        <TableCell>Nom Color</TableCell>
                                        <TableCell>Action</TableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {Color.map(n => {
                                    return (
                                        <TableRow key={n.codeCouleur}>
                                        <TableCell component="th" scope="row">
                                            {n.codeCouleur}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                            {n.nomCouleur}
                                            </TableCell>

                                            <TableCell>
                                                <IconButton className={classes.button} aria-label="Edit" component={Link} to={`/edit-Color/${n.idColor}`}>
                                                <EditIcon />
                                                </IconButton>
                                                <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n.idColor)}>
                                                <DeleteIcon /> 
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </main>
            </div>
      </div>
    );
  }
}

Color.propTypes = {
  classes: PropTypes.object.isRequired,
};

;
const mapStateToProps = (state) => {
  return {
    Color: state.Color,
  };
}
const connectedColorPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(Color)));
export { connectedColorPage as Color };
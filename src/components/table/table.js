import { connect } from 'react-redux';
import { ModeleAction } from '../../_actions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputBase from '@material-ui/core/InputBase';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Chip from '@material-ui/core/Chip';
import {MultipleSelect} from '../../components/simuler/dropdownlist/dropdownlist.component';

const drawerWidth = 240;
const styles = theme => ({
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
    buttonEdit: {
        color: '#6bd098',
    },
    buttonDelete: {
        color: '#6bd098'
    },
    buttonAdd: {
        fontStyle: "Bold",
        backgroundColor: '#51bcda',
        "&:hover": {
            width: '200px',
            color: 'white',
            backgroundColor: '#6bd098',
        }
    }


});

class Table extends Component {
    state = {
        open: false,
        idModele: ''
    };


    render() {
        const { classes } = this.props;
        const { Modele } = this.props.Modele;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
              
                            <Paper className={classes.root}>

                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" noWrap>
                                                    Code Modele
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="h6" noWrap>
                                                    Nom Modele 
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="h6" noWrap>
                                                    Action 
                                                </Typography> 
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Modele.map(n => {
                                            return (
                                                <TableRow key={n.pk}>
                                                    <TableCell component="th" scope="row">
                                                        {n.code}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        {n.ref}
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton className={classes.buttonEdit} aria-label="Edit" component={Link} to={`/edit-Modele/${n.pk}`}>
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton className={classes.buttonDelete} aria-label="Delete" onClick={(event) => this.handleClickOpen(event, n.pk)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Paper>
                </div>
              
                    </div>
        );
    }
}

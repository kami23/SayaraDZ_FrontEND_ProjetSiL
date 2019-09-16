import { connect } from 'react-redux';
import { CommandeAction } from '../../_actions';
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
import Modal from './Modal';

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

class Commande extends Component {
    state = {
        open: false,
        idCommande: '',
        isOpen:false,
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(CommandeAction.getCommande());
        
    }
    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };

    handleClickOpen = (event, id) => {
        const { dispatch } = this.props;
        this.setState({ open: true, idCommande: id })
        //   dispatch(CommandeAction.deleteCommandeById(id))
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick = (event) => {
        const { dispatch } = this.props;
        dispatch(CommandeAction.deleteCommandeById(this.state.idCommande))
        this.handleClose();
    };

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      
    handleValider(pk){
        //this.handleClickOpen(pk)
      return(  <div>
        <Dialog
            open={true}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">

            <DialogTitle id="alert-dialog-title">
            {"Attention!"}
            </DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Voulez-Vous vraiment supprimer ce modèle ? 
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Annuler
                </Button>
                <Button onClick={this.handleClick} color="primary" autoFocus>
                    Confirmer           
                </Button>
            </DialogActions>
        </Dialog>
    </div>)
    }
    render() {
        const { classes } = this.props;
        const { Commande } = this.props.Commande;
        
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                <Typography variant="h6" color="inherit" noWrap>
                                    Gestion des Modèles
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                        

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container >

                            <Paper className={classes.root}>

                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" noWrap>
                                                    Code 
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="h6" noWrap>
                                                    Véhicule
                                                </Typography>
                                            </TableCell>

                                            <TableCell>
                                                <Typography variant="h6" noWrap>
                                                    Statut
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
                                        {Commande.map(n => {
                                            return (
                                                <TableRow key={n.pk}>
                                                    <TableCell component="th" scope="row">
                                                        {n.id}
                                                    </TableCell>

                                                    <TableCell component="th" scope="row">
                                                        Modèle : {}
                                                        Nom Version : {n.version.nom}
                                                        Couleur: {n.couleur.nom}
                                                        Options :  {n.options.map(n => {return (n.nom)})}
                                                    </TableCell>
                                                    <TableCell>
                                                <Typography variant="h6" noWrap>
                                                    {
                                                        n.confirmation ?  "Confirmée" : "non Confirmée"
                                                    }
                                                </Typography>
                                                </TableCell>

                                                    <TableCell>
                                                        {!n.confirmation ? <Button className={classes.buttonEdit} aria-label="Edit" onClick={this.handleValider(n.pk)}>
valider                                                      
  </Button> : null}
                                                        <Button className={classes.buttonDelete} aria-label="Delete" onClick={(event) => this.handleClickOpen(event, n.pk)}>
Annuler                                                        </Button>
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
Commande.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        Commande: state.Commande,
    };
}
const connectedCommandePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Commande)));
export { connectedCommandePage as Commande };
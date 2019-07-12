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
import Chip from '@material-ui/core/Chip';
import {MultipleSelect} from '../../components/simuler/dropdownlist/dropdownlist.component';
import Slider from '../../components/simuler/slider/Slider'

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
    buttonEdit:{
        color:'#6bd098',
    },
    buttonDelete:{
        color:'#6bd098'
    },
    buttonAdd:{
        fontStyle:"Bold",
        backgroundColor:'#51bcda',
        "&:hover":{
            width:'200px',
            color:'white',
            backgroundColor:'#6bd098',
        }
    }
});
const chipColors=[];

class Modele extends Component {
    state = {
        open: false,
        idModele: ''
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(ModeleAction.getModele());        
    }
    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };

    handleDelete=(color)=>{
        const chipToDelete = chipColors.indexOf(color);
        chipColors.splice(chipToDelete, 1);
console.log("chips"+chipColors);
    }

    handleClickOpen = (event, id) => {
        const { dispatch } = this.props;
        this.setState({ open: true, idModele: id })
        //   dispatch(ModeleAction.deleteModeleById(id))
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick = (event) => {
        const { dispatch } = this.props;
        dispatch(ModeleAction.deleteModeleById(this.state.idModele))
        this.handleClose();
    };
    render() {
        const { classes } = this.props;
        const { Modele } = this.props.Modele;
        return (
            
        <MultipleSelect/>)}

       
        /*return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                <Typography>{'Modele'}</Typography>
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
                                <Button variant="contained" color="primary" className={classes.buttonAdd}
                                    component={Link} to={`/add-Modele`}>Ajouter un Modèle</Button>
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container >
                            <Paper className={classes.root}>
                                <Table>
                                    <TableHead>
                                        <TableRow>

                                            <TableCell>Code Modele</TableCell>
                                            <TableCell>Nom Modele</TableCell>
                                            <TableCell>Couleur Compatible</TableCell>

                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Modele.map(n => {
                                            return (
                                                <TableRow key={n.pk}>
                                                    <TableCell component="th" scope="row">
                                                        {n.codeModele}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        {n.nom}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        {n.couleur_set.map(couleur => {
                                                            chipColors.push(couleur)
                                                            return (

                                                                <Chip
                                                                    key={couleur.pk}
                                                                    label={couleur.codeCouleur+"  "+couleur.nomCouleur}
                                                                    className={classes.chip}
                                                                />
                                                            );
                                                        })}
                                                    </TableCell>

                                                    <TableCell>
                                                        <IconButton className={classes.buttonEdit} aria-label="Edit" component={Link} to={`/edit-Modele/${n.pk}`}>
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton className={classes.buttonDelete} aria-label="Delete" onClick={(event) => this.handleClickOpen(event, n.idModele)}>
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
                <div>

                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"  >
                        <DialogTitle id="alert-dialog-title">{"Attention!"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Voulez-Vous vraiment supprimer ce modèle ? </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Annuler
                    </Button>
                            <Button onClick={this.handleClick} color="primary" autoFocus>
                                Confirmer            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        );
    }*/
}
Modele.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        Modele: state.Modele
    };
}
const connectedModelePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Modele)));
export { connectedModelePage as Modele };
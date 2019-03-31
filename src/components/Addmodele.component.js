import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { ModeleAction } from '../_actions';
import { withRouter, Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    contentRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
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
});

class AddModele extends Component {

    state={
       chipColors : [        
       ],

    }
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(ModeleAction.onChangeProps(prop, event));
    };

    handleDelete = (color) => {
        this.setState(state => {
        const chipColors = [...state.chipColors];
            
        const chipToDelete = chipColors.indexOf(color);
        this.props.couleurCompatible.splice(chipToDelete, 1);
        console.log("chips" + chipColors);
        return { chipColors};
        });

    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params.id) {
            const { dispatch } = this.props;
            dispatch(ModeleAction.getModeleById(params.id));
            this.setState({chipColors:this.props.couleurCompatible})
        }
    }
    handleClick(event) {
        const { match: { params } } = this.props;
        const { dispatch } = this.props;
        let payload = {
            nomModele: this.props.nomModele,
            marqueModele: JSON.parse(localStorage.getItem('user')).marqueid,
            couleurCompatible: this.props.couleurCompatible,
            codeModele: this.props.codeModele
        }
        if (params.id) {
            dispatch(ModeleAction.editModeleInfo(params.id, payload));
        } else {
            dispatch(ModeleAction.createModele(payload));
        }
    }
    render() {
        const { classes } = this.props;
        const { match: { params } } = this.props;
        function InsertText(props) {
            return <Typography>{'Add New modele'}</Typography>;
        }

        function EditText(props) {
            return <Typography>{'Edit modele'}</Typography>;
        }
        function SegHeader() {
            if (params.id) {
                return <EditText />;
            }
            return <InsertText />;
        }
        const nomModele = this.props.nomModele;
        return (

            <div className={classes.root}>

                <div className={classes.appFrame}>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                <SegHeader />
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <div>
                                    <Paper className={classes.contentRoot} elevation={1}>
                                        <form className={classes.container}>
                                            <Grid container spacing={24}>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        id="codeModele"
                                                        label="Code Modele"
                                                        className={classes.textField}
                                                        value={this.props.codeModele}
                                                        margin="normal"
                                                        onChange={this.handleChange('codeModele')}
                                                    >
                                                    </TextField>
                                                    <TextField
                                                        id="nomModele"
                                                        label="Name"
                                                        className={classes.textField}
                                                        value={nomModele}
                                                        margin="normal"
                                                        onChange={this.handleChange('nomModele')}
                                                    >
                                                    </TextField>
                                                    <br /><br /><br />
                                                    <label> Couleurs Compatibles</label>
                                                    <br /><br />
                                                    {this.props.couleurCompatible.map(couleur => {
                                                        console.log(couleur)
                                                        return (

                                                            <Chip
                                                                key={couleur}
                                                                label={couleur}
                                                                onDelete={this.handleDelete.bind(couleur)}

                                                                className={classes.chip}
                                                            />
                                                        );
                                                    })}
                                                    <br/>
<label> Add couleur</label>
                                                    <Fab size="small" color="secondary" onClick={this.addColorClick} aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>

                                                </Grid>

                                            </Grid>
                                            <br />
                                            <Grid container spacing={24}>
                                                <Grid item xs={3}>
                                                </Grid>
                                                <Grid item xs={6}>
                                                </Grid>
                                                <Grid item xs={3} container justify="center">
                                                    <Grid container spacing={24}>
                                                        <Grid item xs={6} container justify="center">
                                                            <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/modeles">Cancel</Button>
                                                        </Grid>
                                                        <Grid item xs={6} container justify="flex-start">
                                                            <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>Save</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Paper>
                                </div>
                            </Grid>
                        </Grid>
                    </main>
                </div>


            </div>
        );
    }
}
AddModele.propTypes = {
    classes: PropTypes.object.isRequired,
};

AddModele.defaultProps = {
    nomModele: 'blue'
};
const mapStateToProps = (state) => {

    return {
        idModele: state.Modele.idModele,
        nomModele: state.Modele.nomModele,
        codeModele: state.Modele.codeModele,
        couleurCompatible: state.Modele.couleurCompatible
    }
}

const connectedAddModelePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddModele)));
export { connectedAddModelePage as AddModele };
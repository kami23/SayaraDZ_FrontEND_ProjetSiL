import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { ModeleAction,ColorAction } from '../../_actions';
import { withRouter,Link } from 'react-router-dom';
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
    buttonCancel:{
        backgroundColor:"#f17e5d",
        "&:hover":{
            color:'white',
            backgroundColor:'#51bcda',
        }
    },
    buttonSave:{
        fontStyle:"Bold",
        backgroundColor:'#51bcda',
        "&:hover":{
            color:'white',
            backgroundColor:'#f17e5d',
        }
    }
});
class AddColor extends Component {
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(ColorAction.onChangeProps(prop, event));
    };
    componentDidMount() {
        const { match : { params } } = this.props;
        
        if(params.id){
            const { dispatch } = this.props;
            dispatch(ColorAction.getColorById(params.id));
        }
    }
    handleClick(event){
        const { match : { params } } = this.props;
        const { dispatch } = this.props;
        let payload={
            nomModele: this.props.nomModele,
            marqueModele:JSON.parse(localStorage.getItem('user')).marqueid,
            idModele:12222,
        }
        if(params.id){
            dispatch(ColorAction.editColorInfo(params.id, payload));
        }else{
            dispatch(ColorAction.createColor(payload));
        }
    }
    render() {
        const { classes } = this.props;
        const { match : { params } } = this.props;
        function InsertText(props) {
            return <Typography>{'Ajouter une couleur'}</Typography>;
        }

        function EditText(props) {
            return <Typography>{'Editer ue couleur '}</Typography>;
        }
        function SegHeader() {
            if(params.id){
                return <EditText />;
            }
            return <InsertText />;
        }
    
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
                        <div>
                        <Paper className={classes.contentRoot} elevation={1}>
                            <form className={classes.container}>
                                <Grid container spacing={24}>
                                <Grid item xs={3}>
                                    <TextField
                                    id="nom"
                                    label="Nom"
                                    className={classes.textField}
                                    value={this.props.nom}
                                    margin="normal"
                                    onChange = {this.handleChange('nom')}
                                    >
                                    </TextField>

                                    <TextField
                                    id="code"
                                    label="code"
                                    className={classes.textField}
                                    value={this.props.code}
                                    margin="normal"
                                    onChange = {this.handleChange('code')}
                                    >
                                    </TextField>
                                    
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
                                            <Button variant="contained" color="secondary" className={classes.buttonCancel} component={Link} to="/couleurs">Annuler</Button>
                                        </Grid>
                                        <Grid item xs={6} container justify="flex-start">
                                            <Button variant="contained" color="primary" className={classes.buttonSave} onClick={(event) => this.handleClick(event)}>Enregistrer</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </form>
                        </Paper>
                        </div>
                </main>
                </div>
            </div>
        );
    }
}
AddColor.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) =>{
    console.log("nameModele")
    return {           
        pk : state.Color.pk,
        code:state.Color.code,
        nom:state.Color.nom,
    }
}

const connectedAddColorPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddColor)));
export { connectedAddColorPage as AddColor };
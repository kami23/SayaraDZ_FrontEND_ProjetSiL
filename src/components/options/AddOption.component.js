import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { OptionAction,ModeleAction } from '../../_actions';
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
});
class AddOption extends Component {
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(OptionAction.onChangeProps(prop, event));
    };
    componentDidMount() {
        const { match : { params } } = this.props;
        
        if(params.id){
            const { dispatch } = this.props;
            dispatch(OptionAction.getOptionById(params.id));
        }
    }
    handleClick(event){
        const { match : { params } } = this.props;
        const { dispatch } = this.props;
        let payload={
            nomOption: this.props.nomOption,
            marqueOption:JSON.parse(localStorage.getItem('user')).marqueid,
            idOption:12222,
        }
        if(params.id){
            dispatch(OptionAction.editOptionInfo(params.id, payload));
        }else{
            dispatch(OptionAction.createOption(payload));
        }
    }
    render() {
        const { classes } = this.props;
        const { match : { params } } = this.props;
        function InsertText(props) {
            return <Typography>{'Ajouer une nouvelle Option'}</Typography>;
        }

        function EditText(props) {
            return <Typography>{'Modifer Option'}</Typography>;
        }
        function SegHeader() {
            if(params.id){
                return <EditText />;
            }
            return <InsertText />;
        }
        const  nomOption  = this.props.nomOption;

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
                                    id="nom"
                                    label="Nom"
                                    className={classes.textField}
                                    value={this.props.option}
                                margin="normal"
                                onChange = {this.handleChange('nom')}
                                    >
                                    </TextField>

                                     <TextField
                                    id="code"
                                    label="Name"
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
                                            <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/Options">Annuler</Button>
                                        </Grid>
                                        <Grid item xs={6} container justify="flex-start">
                                            <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>Enregistrer</Button>
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
AddOption.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) =>{
    console.log("nameOption")
    return {           
        idOption : state.Option.idOption,
        nomOption:state.Option.nomOption
    }
}

const connectedAddOptionPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddOption)));
export { connectedAddOptionPage as AddOption };
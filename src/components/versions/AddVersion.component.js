import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { VersionAction } from '../../_actions';
import { withRouter, Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { ModeleAction } from '../../_actions';
//import { isNullOrUndefined } from 'util';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'inline'
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

    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },

    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
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

const chipOptions =[]
class AddVersion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            value: '',
            text: ''
        }
        this.handleChangeSelect = this.handleChangeSelect.bind(this);

    }
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(VersionAction.onChangeProps(prop, event));
    };

    handleChangeSelect(event) {
        const { dispatch } = this.props;
        this.setState({ text: event.target.options[event.target.selectedIndex].text });

        this.setState({ value: event.target.value }, dispatch(VersionAction.getVersions(this.state.value))
        );
    };
    componentDidMount() {
        const { match: { params } } = this.props;
        const { dispatch } = this.props;
        this.setState({value:params.value})
        if (params.id) {
            dispatch(VersionAction.getVersionById(params.id));
        }
        else {
            dispatch(ModeleAction.getModele());
        }
    }
    handleClick(event) {
        const { match: { params } } = this.props;
        const { dispatch } = this.props;
        let payload = {
            nomVersion: this.props.nomVersion,
            modeleVersion: '',
            idModele: 12222,
        }
        if (params.id) {
            dispatch(VersionAction.editVersionInfo(params.id, payload));
        } else {
            dispatch(VersionAction.createVersion(payload));
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

                                                <FormControl required >
                                                        <InputLabel htmlFor="Modele">Modele</InputLabel>
                                                        <Select
                                                            native
                                                            value={this.state.value}
                                                            onChange={this.handleChangeSelect}
                                                            name="value"
                                                            inputProps={{
                                                                id: "Modele",
                                                            }}
                                                        >
                                                            <option value="" />
                                                            {this.props.Modele.map(element => {
                                                                return (
                                                                    <option value={element.pk}>{element.nom}</option>
                                                                )
                                                            })}

                                                        </Select>
                                                    </FormControl>
                                                    <br></br>
                                        
                                                    <TextField
                                                        required
                                                        id="nomVersion"
                                                        label="Nom Version"
                                                        className={classes.textField}
                                                        value={this.props.nom}
                                                        margin="normal"
                                                        onChange={this.handleChange('nomVersion')}
                                                    >
                                                    </TextField>

                                                    <TextField
                                                        id="codeVersion"
                                                        label="Code Version"
                                                        className={classes.textField}
                                                        value={this.props.code}
                                                        margin="normal"
                                                        onChange={this.handleChange('codeVersion')}
                                                    >
                                                    </TextField>

                                             <TextField>

                                                    {this.props.options.map(option => {
                                                            chipOptions.push(option)
                                                            return (

                                                                <Chip
                                                                    key={option.code}
                                                                    label={option.nom}
                                                                    className={classes.chip}
                                                                />
                                                            );
                                                        })}

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
                                                            <Button variant="contained" color="secondary" className={classes.buttonCancel} component={Link} to="/versions">Annuler</Button>
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
                            </Grid>
                        </Grid>
                    </main>
                </div>
            </div>
        );
    }
}
AddVersion.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        pk: state.Version.id,
        nom: state.Version.nom,
        code: state.Version.code,
        modele: state.Version.modele,
        options:state.Version.options,
        Modele: state.Modele.Modele
    }
}

const connectedAddVersionPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddVersion)));
export { connectedAddVersionPage as AddVersion };
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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Slider } from '../slider/Slider.js';
import { ModeleAction, VersionAction, OptionAction, ColorAction } from '../../../_actions';

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
  select: {
    minWidth: 100,

  }, buttonEdit: {
    color: '#6bd098',
  },
  buttonDelete: {
    color: '#6bd098'
  },
  buttonAdd: {
    color: "white",
    fontStyle: "Bold",
    backgroundColor: '#51bcda',
    "&:hover": {
      width: '200px',
      color: 'white',
      backgroundColor: '#6bd098',
    }
  }
});

const chipOptions = [];
class MultipleSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: '',
      value: '',
      version: '',
      label: [],
      couleurs: [],
      options: [],
      text: ''
    }
    this.handleChangeModele = this.handleChangeModele.bind(this);
    this.handleChangeVersion = this.handleChangeVersion.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);

  }
  props = {
    value: '',
    color:'',
    modele:'',
    version:'',
    versionPrix:0,
    couleurPrix:0,
    optionPrix:0,
    label: [],
    modeles: [],
    versions: [],
    couleurs: [],
    options: [],
    labelWidth: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ModeleAction.getModele());
    //dispatch(VersionAction.get());

  }

  handleChangeModele(event) {
    const { dispatch } = this.props;
    this.setState({ text: event.target.options[event.target.selectedIndex].text });

    this.setState({ modele: event.target.value }, dispatch(VersionAction.getVersions(event.target.value)));

  };


  handleChangeVersion(event) {
    const { dispatch } = this.props;
    this.setState({ text: event.target.options[event.target.selectedIndex].text });

    this.setState({ version: event.target.value }, dispatch(VersionAction.getVersionById(event.target.value))
    );
    console.log("You version Id is : ", event.target.value)

  };

  handleChangeColor(event) {
    const { dispatch } = this.props;
   this.setState({ text: event.target.options[event.target.selectedIndex].text });
   this.setState({ color: event.target.value });
  };
   
  handleChangeOption(event) {
    const { dispatch } = this.props;
    this.setState({ text: event.target.options[event.target.selectedIndex].text });
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <main className={classes.content}>

            <div className={classes.toolbar} />

            <Grid container spacing={3}>
              <Grid item xs={3}>
                <FormControl required >
                  {/* Modeles */}
                  <InputLabel htmlFor="Modele">Modele</InputLabel>
                  <Select
                    native
                    value={this.state.modele}
                    onChange={this.handleChangeModele}
                    name="value"
                    inputProps={{
                      id: "Modele",
                    }}
                    className={classes.select}>
                    <option value="" />
                    {this.props.Modele.map(modeles => {
                      return (
                        <option value={modeles.pk}>{modeles.nom}</option>
                      )
                    })}

                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl>
                  {/* Versions */}
                  <InputLabel htmlFor="Version ">Version</InputLabel>
                  <Select
                    native
                    value={this.state.version}
                    onChange={this.handleChangeVersion}
                    name="version"
                    inputProps={{
                      id: "Version",
                    }}
                    className={classes.select}
                  >
                    <option value="" />

                    {this.props.Versions.map(versions => {
                      return (
                        <option value={versions.pk}>{versions.nom}</option>
                      )
                    })}

                  </Select>
                </FormControl>
              </Grid>


              {/*Couleurs*/}
              <Grid item xs={3}>
                <FormControl>
                  <InputLabel htmlFor="Couleur">Couleur</InputLabel>
                  <Select
                    native
                    value={this.state.color}
                    onChange={this.handleChangeColor}
                    name="color"
                    inputProps={{
                      id: "Couleur",
                    }}
                    className={classes.select}
                  >
                                      <option value="" />

                    {this.props.Modele.map(element => {
                      return (
                        element.couleur_set.map((color) => {
                          return (<option value={color.pk}>{color.nom}</option>)
                        })

                        
                      )
                    })}

                  </Select>
                </FormControl>
              </Grid>
              {/*Options*/}
              <Grid xs={3}>
                <FormControl>
                  <InputLabel htmlFor="Options">Options</InputLabel>
                  <Select
                    native
                    value={this.state.value}
                    //onChange={this.handleChangeVersion}
                    name="value"
                    inputProps={{
                      id: "Options",
                    }}
                    className={classes.select}
                  >
                    <option value="" />

 
                    {/* this.props.Versions.options.map(option => {
               // options.optionsVersion.map((option) =>

                  { console.log(option, "je suis la");
                    console.log("HIIIIIIIIIIIIIIIIIIII");
                    return (<option> 
                      {option} 
                      </option>) }
            //    )
            })*/}

                    {/**          
        {n.couleur_set.map(couleur => {
           chipColors.push(couleur)
              return (
               <Chip
                 key=""
                 label={couleur.codeCouleur+"  "+couleur.nomCouleur}
                 className={classes.chip}
                />
                  );
                   })}
                  */}
                  </Select>
                </FormControl>

              </Grid>
<Paper> 
<Typography variant="h6" color="inherit" noWrap>
Modèle : {this.state.modele}
</Typography> 
<Typography variant="h6" color="inherit" noWrap>
Version : {this.state.version}
</Typography> 
<Typography variant="h6" color="inherit" noWrap>
Version : {this.state.color}
</Typography> 
</Paper>


            </Grid>
          </main>
        </div>
        {/**  <Slider /> */}
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

;
const mapStateToProps = (state) => {
  return {
    Versions: state.Version.Versions,
    Modele: state.Modele.Modele
  };
}
const connectedSimulerPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(MultipleSelect)));
export { connectedSimulerPage as MultipleSelect };




import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ModeleAction, VersionAction, OptionAction, ColorAction } from '../../../_actions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];


const styles = theme => ({
  paperShow:{
    paddingLeft:"19%",
    width:"50px",
  },
  text:{
  },
  title:{
    marginTop:"5%",
    marginLeft:"2%",
    color:"#51bcda",
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  form:{
    display:'flex',
  },
  
  formControlModele: {
    margin: theme.spacing.unit,
    marginLeft:0,
    minWidth: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft:"7%",
    minWidth: 200,
    maxWidth:300,
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
 
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
 
  select: {
    minWidth: 100,
  },
  
  buttonSimulate: {
    margin: theme.spacing.unit,
    marginTop:"5%",
    marginLeft:"10%",
    width:'20%',
    color: 'white',
    fontStyle: "Bold",
    backgroundColor: '#51bcda',
    "&:hover": {
      width: '25%',
      color: 'white',
      backgroundColor: '#6bd098',
    }
  },
  buttonVerifier:{
    margin: theme.spacing.unit,
    marginTop:"5%",
    marginLeft:"5%",
    width:'20%',
    color: 'white',
    fontStyle: "Bold",
    backgroundColor: '#51bcda',
    "&:hover": {
      width: '25%',
      color: 'white',
      backgroundColor: '#6bd098',
    }
  },
  formulaire:{
    marginLeft:'1%',
  },
  checkBox:{
    width:"50%",
  }

});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
 
class MultipleSelect extends React.Component {

 
  constructor(props) {
    super(props);
  
    this.state = {
      open: false,
      age: '',
      value: '',
      version: '',
      label: [],
      couleurs: [],
      options: [],
      text: '',
      personName: [],
      indice:0,
      selectedValue: [],
      name: [],
      prixTotal:0,
      lastUpdate:0,
      affichPrix:false,
      response:'',
      color:'',

    }
    props = {
      response:'',
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
    this.handleChangeModele = this.handleChangeModele.bind(this);
    this.handleChangeVersion = this.handleChangeVersion.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleClickSimulate=this.handleClickSimulate.bind(this);
    this.handleVerifier=this.handleVerifier.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleClickOpen=this.handleClickOpen.bind(this);
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ModeleAction.getModele());

  }

  handleChangeModele(event) {
    const { dispatch } = this.props;
    this.setState({ text: event.target.options[event.target.selectedIndex].text });
    this.setState({options:[]});
    this.setState({ couleurs: this.props.Color }, dispatch(ColorAction.getColorbyModeleId(event.target.value)));
    this.setState({ modele: event.target.value }, dispatch(VersionAction.getVersions(event.target.value)));
  };
  addingPriceVersion(value){
   this.setState({prixTotal:this.state.prixTotal+value})
  }

  handleChangeVersion(event) {
    const { dispatch } = this.props;
    this.setState({ text: event.target.options[event.target.selectedIndex].text });
    this.setState({ version: event.target.value , versionPrix:this.props.Versions[0].prix_base,
      options:this.props.Versions[0].options},
    this.addingPriceVersion(this.props.Versions[0].prix_base),
    dispatch(VersionAction.getVersionById(event.target.value)));
  };

 addingPriceColor(value){
  this.setState({prixTotal:this.state.prixTotal+value})
}
  handleChangeColor(event) { 
   const { dispatch } = this.props;
   this.setState({ text: event.target.options[event.target.selectedIndex].text });
   this.setState({ color: event.target.value,couleurPrix:this.props.Color[0].prix },
    this.addingPriceColor(this.props.Color[0].prix)
    ,dispatch(ColorAction.getColorById(event.target.value)));
   };
   /*H*/
  handleChangeOption(event) {
    const { dispatch } = this.props;
    this.setState({ text: event.target.options[event.target.selectedIndex].text });
  };

  handleChange(event){
    console.log("event.valie"+event.target.value);
    this.setState(state => {
      const personName =state.personName.concat(event.target.value);
      return {
        personName,
      };
    });     
  }

  handleClickSimulate(event){
    this.setState({affichPrix:true})
  }

  addingPricOptions(){
    let price=0;
    this.state.name.map( code=> {
    let result = this.state.options.find(option=> (option.code === code));
    console.log("price"+ price + this.state.name+ result.prix)
    this.setState({lastUpdate:this.state.lastUpdate+result.prix})
    })

    this.setState({prixTotal:this.state.prixTotal+this.state.lastUpdate});
 }
 
  handleChange3 = event => {
    this.setState({ name: event.target.value });
    this.addingPricOptions()
      
  };

  handleVerifier(){
      this.setState({response: axios.get(`http://sayaradz-ee-backend.herokuapp.com/api/vehiculeneuf/?version=`+this.state.version+`&couleur=`+this.state.color, 
      { headers: { "Authorization":'Token '+JSON.parse(localStorage.getItem('user')).key  }})
          .then((response) => {
              return response;
          }).catch((err) => {
              console.log(err);
          })
    },this.handleClickOpen())
  }

    handleClose = () => {
      this.setState({ open: false });
  };

  handleClickOpen = (event) => {
    const { dispatch } = this.props;
    this.setState({ open: true})
    //   dispatch(ModeleAction.deleteModeleById(id))
};
 
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <main className={classes.content}>
            <div className={classes.toolbar} />  
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <Typography variant="h6" color="inherit" noWrap>
                        Simuler le Prix d'un véhicule
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h6" color="inherit" noWrap>
                        et verifier le stock 
                    </Typography>
                </Grid>
                <Grid item xs={3} container justify="flex-end">
                </Grid>
            </Grid>
            <Grid container className={classes.formulaire}>
              <div className={classes.form}>
                {/*DropsDowns for choosing Model , version , color and options to sipmulate the price 
                to select model or version or color we used FormControm with simple select from react-material-ui
                for options we used FormControl with multipleSelect*/}
                {/*Modèles*/}
                <FormControl required className={classes.formControlModele}>
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
                <br/>
                {/*Versions*/}
                <FormControl className={classes.formControl}>
                  {/* Versions */}
                  <InputLabel htmlFor="Version ">Version</InputLabel>
                  <Select native  value={this.state.version}
                                  onChange={this.handleChangeVersion}
                                  name="version"
                                  inputProps={{
                                  id: "Version",}}

                    className={classes.select}>

                    <option value="" />

                    {this.props.Versions.map(versions => {
                      return (
                        <option value={versions.code}>{versions.nom}</option>
                      )
                    })}

                  </Select>
                  </FormControl>
                <br/>
                {/*Couleurs*/}
                <FormControl className={classes.formControl}>
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

                    {this.props.Color.map(color => {
                        return (<option value={color.pk}>{color.nom}</option>)
                      
                    })}

                  </Select>
                </FormControl>
                <br/> 
                </div> 
                <Grid item xs={4}>
                </Grid>
                <br/> <br/> <br/> <br/> <br/>
                </Grid>


                <Grid container spacing={24}>
                <Grid item xs={3}>
                    {/*Options*/}
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="select-multiple-checkbox">Options</InputLabel>
                      <Select
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange3}
                        input={<Input id="select-multiple" />}
                        MenuProps={MenuProps}
                        >
                        {this.state.options.map(option=> (
                        <MenuItem key={option.code} value={option.code}>
                        {option.nom}
                        </MenuItem>
                            ))}
                    </Select>
                    </FormControl>  
                </Grid>
                <Grid item xs={6}>                     
                </Grid>

                <Grid item xs={3} container justify="flex-end">
                </Grid>
            </Grid>
            <div className="paperShow">
            <br/> <br/>
            {this.state.affichPrix?
            
              <Paper> 
                <div className={classes.title}>

                  <Typography variant="h5" color="inherit" noWrap>
                    Prix totale : {this.state.prixTotal} ,00 DA
                  </Typography> 
                </div>
              </Paper>
            : null }
            </div>
            
            <Button className={classes.buttonSimulate} size="large" onClick={this.handleClickSimulate}> Simuler Prix </Button>

            <Button className={classes.buttonVerifier} size="large" onClick={this.handleVerifier}> Vérifier Stock </Button>
            

          </main>
        </div>
        <div> 
        <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">

                        <DialogTitle id="alert-dialog-title">
                        {"Vérification de stock"}
                        </DialogTitle>
                        {this.state.response.data ? 
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
{ JSON.stringify(this.state.response.data)}                       
     </DialogContentText>
                        </DialogContent>
                        :
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Il n'existe pas un véhicule avec ces caratéristiques
                        </DialogContentText>
                    </DialogContent>
                        }

                          <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                              Quitter
                            </Button>
                        </DialogActions>
                    </Dialog>

        </div>
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
    Modele: state.Modele.Modele,
    Color:state.Color.Color
  };
}
const connectedSimulerPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(MultipleSelect)));
export { connectedSimulerPage as MultipleSelect };




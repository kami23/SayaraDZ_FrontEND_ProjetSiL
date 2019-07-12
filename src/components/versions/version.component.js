import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Input from '@material-ui/core/Input';
//import OutlinedInput from '@material-ui/core/OutlinedInput';
//import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import NativeSelect from '@material-ui/core/NativeSelect';
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
import { ModeleAction,VersionAction } from '../../_actions';

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
            select:{
              minWidth: 100,

            }, buttonEdit:{
              color:'#6bd098',
          },
          buttonDelete:{
              color:'#6bd098'
          },
          buttonAdd:{
            color:"white",
              fontStyle:"Bold",
              backgroundColor:'#51bcda',
              "&:hover":{
                  width:'200px',
                  color:'white',
                  backgroundColor:'#6bd098',
              }
          }
        });

class Version extends React.Component {

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
    label: '',
    elements: [],
    tarif1:"1000000 DA ",
     tarif2 : "1800000 DA" , 
     tarif3:"5000000 DA",
  i:0,
    labelWidth: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
 dispatch(ModeleAction.getModele());

  }

  handleChange (event){    
    const { dispatch } = this.props;

 this.setState ({text:event.target.options[event.target.selectedIndex].text});

    this.setState({ value: event.target.value }  );
   dispatch(VersionAction.getVersions(event.target.value))    
  

  

console.log("value",this.state.value)

  };
  tarifs = ["1000000 da ","1600000 da " , "2100000 da"]
  i=0;
  render() {
    const { classes } = this.props;
  //  const { elements } = this.props.Modele;
   
    return (
      <div className={classes.root}>

        


         <div className={classes.appFrame}>
                        <main className={classes.content}>

                        <div className={classes.toolbar} />

                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                            <Typography variant="h6" color="inherit" noWrap>
                            Gestion des versions
                </Typography>                          
                        
                        
                            <FormControl required >
          <InputLabel htmlFor="Modele">Modele</InputLabel>
          <Select
            native
            value={this.state.value}
            onChange={this.handleChange}
            name="value"
            inputProps={{
              id: "Modele",
            }}
            className={classes.select}
          >
            <option value ="kami"> </option>
            {this.props.Modele.map(element => {
              return (
                <option value={element.pk}>{element.nom}</option>
              )
            })}

          </Select>
        </FormControl>
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
                                <Button variant="contained" className={classes.buttonAdd} 
                                component={Link} to={`/add-version`}>Ajouter une version</Button>
                        
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container >
                            <Paper className={classes.root}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell> 
                                        <Typography variant="h6">
                                        Code Version
                                    </Typography>  
                                      </TableCell>
                                        <TableCell>                                         <Typography variant="h6">
 Nom Version                                     </Typography>  
 </TableCell>
                                       
                                        <TableCell> <Typography variant="h6"> Tarif Version </Typography> </TableCell> 
                                        <TableCell> <Typography variant="h6"> Action </Typography> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.props.Versions.map(n => {
                                    return (
                                        <TableRow key={n.idModele}>
                                        <TableCell component="th" scope="row">
                                            {n.code}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                            {n.nom}
                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                            {n.modele_name}
                                            </TableCell>
                                            
                                            <TableCell component="th" scope="row">
                                            {this.tarifs[this.i++]}
                                            </TableCell>
                                         
                                            <TableCell>
                                                <IconButton className={classes.buttonEdit} aria-label="Modifier" component={Link} to={`/edit-version/${n.idVersion}`}>
                                                <EditIcon/>
                                                </IconButton>
                                                <IconButton className={classes.buttonDelete} aria-label="Supprimer" onClick={(event) => this.handleClick(event, n.idVersion)}>
                                                <DeleteIcon/> 
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

Version.propTypes = {
  classes: PropTypes.object.isRequired,
};

;
const mapStateToProps = (state) => {
  return {
    Versions: state.Version.Versions,
    Modele: state.Modele.Modele
  };
}
const connectedVersionPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(Version)));
export { connectedVersionPage as Version };
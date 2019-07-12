import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
       
            buttonAdd:{
                color:"white",
                  fontStyle:"Bold",
                  backgroundColor:'#51bcda',
                  "&:hover":{
                      width:'300px',
                      color:'white',
                      backgroundColor:'#6bd098',
                  }
              },
              title : {
                color:'#51bcda'
              }
        });

class Fichier extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      age: '',
      value: '',
      text:''
    }

  };
  
  render() {
    const { classes } = this.props;
  //  const {Color} = this.props.Color;

    return (
      <div className={classes.root}>

         <div className={classes.appFrame}>
                        <main className={classes.content}>
                        <div className={classes.toolbar} />

                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                            <Typography variant="h6" color="inherit" noWrap>
                                    Gestion des fichier
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <br/> <br/>
                        <Grid container spacing={24}>
                        <Grid item xs={3}>
                         <Paper> 
                           <Typography variant="h6" className={classes.title} > Stock </Typography>
                           <Typography> Dernier fichier télécharger  </Typography>
                           <Typography>Nom du fichier : </Typography> 
                           <Typography>Date du téléchargement : </Typography>   
                         </Paper>
                         </Grid>
                         <Grid item xs={3}>
                         <Paper> 
                           <Typography variant="h6" className={classes.title} > Tarifs </Typography>
                           <Typography> Dernier fichier télécharger  </Typography>
                           <Typography>Nom du fichier : </Typography> 
                           <Typography>Date du téléchargement : </Typography>   
                         </Paper>
                            </Grid>
                         
                         </Grid>
                         <br/> 
                         <br/> 
                         <br/> 
                        
                         <br/> 
                        
                         <br/> 
                        
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                            <Button variant="contained" color="primary" className={classes.buttonAdd}
                                    component={Link} to={`/add-Modele`}>Ajouter un fichier stock</Button>
                            </Grid>
                            <Grid item xs={6}>
                            <Button variant="contained" color="primary" className={classes.buttonAdd}
                                    component={Link} to={`/add-Modele`}>Ajouter un fichier tarifs</Button>
                      
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
               </main>
            </div>
      </div>
    );
  }
}

Fichier.propTypes = {
  classes: PropTypes.object.isRequired,
};

;
const mapStateToProps = (state) => {
  return {
    Color: state.Color,
    Modele: state.Modele.Modele

  };
}
const connectedFichierPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(Fichier)));
export { connectedFichierPage as Fichier };
import { connect } from 'react-redux';
import { ModeleAction } from '../../_actions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Papa from 'papaparse';
import axios from 'axios';
import AlertDialogSlide,{handleClickOpen,handleClose} from './Dialog'
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';
import { Input } from 'react-input-component';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import sayara from "../../images/sayaradz.png"

const drawerWidth = 240;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//const [open, setOpen] = React.useState(false);

const styles = theme => ({
  card: {
    width : 800,
    minWidth: 350,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },





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
    



class UploadCSV extends React.Component {


 // const [open, setOpen] = React.useState(false)
    props = {
      value: '',
      label: []
    };
    
/*
  handleClickOpen() {
    setOpen(true);
  }

  handleClose() {
    setOpen(false);
  }*/
    componentDidMount() {
      const { dispatch } = this.props;
    }

    handleChange = (event) => {
        this.setState({
          csv: event.target.files[0]
          
        })
     //   console.log(event.target.files[0])
      };

      handleChangeFile = (event) => {
        this.setState({
          csv: event.target.files[0]
        })
        console.log(event.target.files[0])
       const filepar = Papa.parse(event.target.files[0], {hearder:true , complete: this.showData })
     //  console.log(filepar)
      };
      handleChangeFileStock = (event) => {
        this.setState({
          csv: event.target.files[0]
        })
        console.log(event.target.files[0])
       const filepar = Papa.parse(event.target.files[0], {hearder:true , complete: this.stockUpload })
     //  console.log(filepar)
      };




    showData (result) {
        var Colorrow = function (prix,debut,fin,base,couleur)
        {
        
         this.debut = debut;
         this.fin = fin;
         this.prix = prix;
         this.base = base;
         this.couleur = couleur;
        }
        var Versionrow = function (prix,debut,fin,base,version)
        {
         
         this.debut = debut;
         this.fin = fin;
         this.prix = prix;
         this.base = base;
         this.version = version;
        }
        var Optionrow = function (prix,debut,fin,base,option)
        {
         
         this.debut = debut;
         this.fin = fin;
         this.prix = prix;
         this.base = base;
         this.option = option;
        }
      const data =  result.data;
      var objctC ={
      
          debut:"",
          fin:"",
          prix :"",
          base :"",
          couleur :""
      };
      var objctV ={
       
          debut:"",
          fin:"",
          prix :"",
          base :"",
          version :""
      };
      var objctO ={
       
          debut:"",
          fin:"",
          prix :"",
          base :"",
          option :""
      };
      

    
    var listCouleur = [] 
    var listOptions = []
    var listVersion = []
    var listStockk = []

      data.map((element) =>
      {console.log(element[0])
       switch (element[0]) {
        
        case "0" : 
        console.log("Hi from Version")
        var objctV = new Versionrow (element[3],element[1],element[2],element[4],element[5])
        listVersion.push(objctV); 
        break;
        case "1" :
        
        console.log("Hi from Couleur")
        var objctC = new Colorrow (element[3],element[1],element[2],element[4],element[5])
        listCouleur.push(objctC); 
        break; 
        case "2" : 
        console.log("Hi from Option")
        var objctO = new Optionrow (element[3],element[1],element[2],element[4],element[5])
        listOptions.push(objctO);
        break; }



     });
     var payloadCouleur = JSON.stringify(listCouleur);
     console.log( "the payload color", payloadCouleur)

     var payloadOption = JSON.stringify(listOptions);
     console.log( "the payload option", payloadOption)

     var payloadVersion = JSON.stringify(listVersion);
     console.log( "the payload version", payloadVersion)

     var token = '7cb992a13c4cd110c521d482d54e9f9b9c56b2a7'

        axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/tarifoption/create/`, listOptions,
        { headers: { "Authorization":'Token '+ token  }})
        .then((response) => {
          alert("Fichier envoyé")  
            return response;
        }).catch((err) => {
            alert("Erreur ! Verifiez le format de votre fichier")
            console.log(err);
            
        })

        axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/tarifversion/create/`, listVersion,
        { headers: { "Authorization":'Token '+ token  }})
        .then((response) => {
            return response;
        }).catch((err) => {
          alert("Erreur ! Verifiez le format de votre fichier")  
          console.log(err);
        })

        axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/tarifcouleur/create/`, listCouleur,
        { headers: { "Authorization":'Token '+ token  }})
        .then((response) => {  
            return response;
        }).catch((err) => {
          alert("Erreur ! Verifiez le format de votre fichier")
            console.log(err);
        })


    };
    
    stockUpload (result) {
      
      var list = []
      var objctStock ={
        num:"",
        disponible:"",
        reserve:"",
        concessionnaire:"",
        version:"",
        couleur:"",
        options:[]
     }
     var Stockrow = function (num,disponible,reserve,concessionnaire,version,couleur,options)
     {
     
      this.num = num;
      this.disponible = disponible;
      this.reserve = reserve;
      this.concessionnaire = concessionnaire ;
      this.version = version;
      this.couleur = couleur;
      this.options = options;
     }

     const data =  result.data;
     
     data.map((element) =>
      { 
        console.log("Hi i am element 6",element[6])
        switch (element[1]) {
        case "true":
        var objctStock = new Stockrow (element[0],element[1],element[2],element[3],element[4],element[5],element[6].split(","))
        list.push(objctStock); 
        break;
        case "false":
        var objctStock = new Stockrow (element[0],element[1],element[2],element[3],element[4],element[5],element[6].split(","))
        list.push(objctStock); 
        break; 
        console.log("this is the object Stock",objctStock)}
      });

      var token = '7cb992a13c4cd110c521d482d54e9f9b9c56b2a7'
      axios.post(` https://sayaradz-ee-backend.herokuapp.com/api/vehiculeneuf/create`, list
   ,{ headers: { "Authorization":'Token '+ token  }})
      .then((response) => {
        alert("Fichier envoyé")  

        return response;
          
          
      }).catch((err) => {
         alert("Erreur ! Verifiez le format de votre fichier")
          console.log(err);
      
      })
     
    console.log(list)
    }  
    render() {
      const { classes } = this.props;
     
      return (
        <div className={classes.root}>
        <div className={classes.appFrame}>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                    <Card className={classes.card}>
                      <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
         Article du jour
                      </Typography>
                      <Typography variant="h5" component="h2">
    La voiture la plus rapide !
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
          30.09.2019
                      </Typography>
                      <Typography variant="body2" component="p">
                      Enregistré dans le Guinness Book of Records, ce chiffre représente une vitesse moyenne. Pour voir leur record homologué, les véhicules doivent rouler dans un sens et puis dans l’autre. Cette mesure permet d’annuler l’influence du vent. Le record a été établi à Pahrump dans le Nevada (Etats-Unis), sur une route fermée pour l’occasion. Le pilote Niklas Lilja a d’abord roulé à 436 km/h, avant d’atteindre les 458 km/h dans l’autre sens.

Le jeune homme conduisait une Agera RS du constructeur suédois Koenigsegg. Ce modèle embarque un moteur V8 biturbo 5.0 litres, qui développe 1 360 chevaux pour 1.371 Nm de couple (vitesse de rotation du moteur). La voiture ne pèse que 1 295 kilos à vide. Koenigsegg avait déjà publié le 5 octobre dernier une vidéo des performances de l’Agera RS sur YouTube. Le petit film de 3 minutes enregistre plus de 4,7 millions de vues.
          <br />
        
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Afficher plus</Button>
                            </CardActions>
                          </Card>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">
                    </Grid>
                    <Card>
                    Decouvrez SayaraDz mobile !
                    
                     <Typography variant="h5" component="h2">
                     {/**  Decouvrez SayaraDz mobile !*/}
                      </Typography>
                      <Typography variant="body2" component="p">
                      {/** Vous pouvez maintenant commander votre voiture de rêve avec un simple click*
                      <img src ="https://higherlogicdownload.s3.amazonaws.com/CSIA/224cd936-6d46-4006-99fc-1675c024fac3/UploadedImages/phone_in_hand.png" width ="25%" height ="25%"></img>
                      */}
                      </Typography>
                      <CardMedia
                      className={classes.media}
                      image="https://t4.ftcdn.net/jpg/00/69/97/85/500_F_69978567_4gzUwTrXGikGUHRzdAvxrAhxDIqnX9QR.jpg"

                      title="SayaraDZmobile"
                        />
                       
                    </Card>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>  
                    <Card className={classes.card}>
                      <CardContent>   
                      <Typography variant="h5" component="h2">
    Uploader votre fichier Tarif 
                      </Typography>  
                      <br/> <br/>  
                     <Input
                      type="file"
                      ref={(input) => { this.filesInput = input }}
                      name="file"
                      icon='file text outline'
                      iconPosition='left'
                      label='Upload CSV'
                      labelPosition='right'
                      placeholder='UploadCSV...'
                      onChange={this.handleChangeFile}
                                                        />
                                                        </CardContent>   
                                                        </Card>
                                                        
               


               {/** */}
               <Card className={classes.card}>
                      <CardContent>   
                      <Typography variant="h5" component="h2">
    Uploader votre fichier Stock 
                      </Typography>  
                      <br/> <br/>  
                     <Input
                      type="file"
                      ref={(input) => { this.filesInput = input }}
                      name="file"
                      icon='file text outline'
                      iconPosition='left'
                      label='Upload CSV'
                      labelPosition='right'
                      placeholder='UploadCSV...'
                      onChange={this.handleChangeFileStock}
                                                        />
                                                        </CardContent>   
                                                        </Card>
               {/**/ }
                </Grid>
                <br /><br />
                <Grid container >
                    <Paper className={classes.root}>
                    </Paper>
                        </Grid>
                    </main>
                </div>
              {/*

              <Dialog
        //open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={this.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
            {/**   */}

                </div>
      );
    }
  }

  const connectedModelePage = withRouter(connect(null, null, null, {
    pure: false
})(withStyles(styles)(UploadCSV)));
export { connectedModelePage as UploadCSV };
 


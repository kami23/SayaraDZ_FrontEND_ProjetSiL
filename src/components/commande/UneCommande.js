import React from "react"
import { Paper, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
    cmd: {
        margin: "4px",
        padding: "10px"
    },
    cmdTitle: {
        color: "#51bcda",

    },
    buttonDone:{
        marginLeft:"10px",
        color:'#6bd098',
    },
    
    buttonClose:{
        marginLeft:"240px",
        color:'#f17e5d',
    },
});
class Commande extends React.Component {


    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.cmd} >
                    <Typography variant="h6" className={classes.cmdTitle}> Commande N° {this.props.numCmd}</Typography>
                    <Typography> Client: </Typography>
                    <Typography> Date:  {this.props.date}</Typography>
                    <Typography> Informations: {this.props.corps}</Typography>
                    <IconButton className={classes.buttonClose} aria-label="close" >
                        <CloseIcon />
                    </IconButton>
                    <IconButton className={classes.buttonDone} aria-label="done">
                        <DoneIcon />
                    </IconButton>

                </Paper>
                <br />
            </div>
        );
    }
}

export default withStyles(styles)(Commande);

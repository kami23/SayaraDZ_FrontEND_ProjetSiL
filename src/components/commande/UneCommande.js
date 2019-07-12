import React from "react"
import { Paper, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    cmd: {
        margin: "4px",
        padding: "10px"
    },
    cmdTitle: {
        color: "#51bcda",

    }
});
class Commande extends React.Component {


    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.cmd} >
                    <Typography variant="h6" className={classes.cmdTitle}> Commande N° {this.props.numCmd}</Typography>
                    <Typography> Client: </Typography> <Typography> {this.props.date}</Typography>
                    <Typography> Date:  {this.props.date}</Typography>
                    <Typography> Informations: {this.props.corps}</Typography>
                </Paper>
                <br />
            </div>
        );
    }
}

export default withStyles(styles)(Commande);

import React from "react"
import Paper, { Typography } from '@material-ui/core';
const styles = theme => ({
});
class Commande extends React.Component {


    render() {

        return (
            <Paper>
                <Typography> Commande N° {this.props.numCmd}</Typography>
                <Typography> Date:  {this.props.date}</Typography>
                <Typography>  {this.props.corps}</Typography>
                
            </Paper>
        );
    }
}

export default withStyles(styles)(Commande);

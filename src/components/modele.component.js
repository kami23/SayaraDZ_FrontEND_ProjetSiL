        import { connect } from 'react-redux';
        import { ModeleAction } from '../_actions';
        import React, { Component } from 'react';
        import PropTypes from 'prop-types';
        import { withStyles } from '@material-ui/core/styles';
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
        import { withRouter,Link } from 'react-router-dom';
        const drawerWidth = 240;
        const styles = theme => ({
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
        });

        class Modele extends Component {
            componentDidMount() {
                const { dispatch } = this.props;
                dispatch(ModeleAction.getModele());
            }
            handleChange = event => {
                this.setState({
                    anchor: event.target.value,
                });
            };
            handleClick = (event, id) => {
                const { dispatch } = this.props;
                dispatch(ModeleAction.deleteModeleById(id))
            };
            render() {
                const { classes } = this.props;
                const { Modele } = this.props.Modele;
                return (
                    <div className={classes.root}>
                    
                    <div className={classes.appFrame}>
                        <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                <Typography>{'Modele'}</Typography>
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
                                <Button variant="contained" color="primary" className={classes.button} 
                                component={Link} to={`/add-Modele`}>Add Modele</Button>
                        
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container >
                            <Paper className={classes.root}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nom Modele</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {Modele.map(n => {
                                    return (
                                        <TableRow key={n.idModele}>
                                            <TableCell component="th" scope="row">
                                            {n.nomModele}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton className={classes.button} aria-label="Edit" component={Link} to={`/edit-Modele/${n.idModele}`}>
                                                <EditIcon />
                                                </IconButton>
                                                <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n.idModele)}>
                                                <DeleteIcon /> 
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
        Modele.propTypes = {
            classes: PropTypes.object.isRequired,
        };
        const mapStateToProps = (state) =>{
            return {
            Modele : state.Modele
            };
        }
        const connectedModelePage = withRouter(connect(mapStateToProps, null, null, {
            pure: false
        })(withStyles(styles)(Modele)));
        export { connectedModelePage as Modele };
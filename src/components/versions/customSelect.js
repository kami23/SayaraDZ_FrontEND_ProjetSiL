    import React from 'react';
    import PropTypes from 'prop-types';
    import ReactDOM from 'react-dom';
    import { withStyles } from '@material-ui/core/styles';
    import Input from '@material-ui/core/Input';
    import OutlinedInput from '@material-ui/core/OutlinedInput';
    import FilledInput from '@material-ui/core/FilledInput';
    import InputLabel from '@material-ui/core/InputLabel';
    import FormHelperText from '@material-ui/core/FormHelperText';
    import FormControl from '@material-ui/core/FormControl';
    import Select from '@material-ui/core/Select';
    import NativeSelect from '@material-ui/core/NativeSelect';

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
    });

    class CustomSelect extends React.Component {
    props= {
        value:'',
        label: '',
        elements:[],
        labelWidth: 0,
    };

    componentDidMount() {
    
    }

    handleChange = name => event => {
    this.setState({ [name]: event.target.value });
        
    };
state={
    age:'',
    value:''
}
    render() {
        const { classes } = this.props;

        return (
        <div className={classes.root}>
    
    <FormControl required >
          <InputLabel htmlFor={this.props.label}>{this.props.label}</InputLabel>
          <Select
            native
            value={this.state.value}
            onChange={this.handleChange('value')}
            name="value"
            inputProps={{
                id:this.props.label,
            }}
          >
            <option value="" />
            {this.props.elements.map(element => {
                return(
                <option value={element.idModele}>{element.nom}</option>
                )
            })}
            
          </Select>
         </FormControl>
    
        </div>
        );
    }
    }

    CustomSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(CustomSelect);
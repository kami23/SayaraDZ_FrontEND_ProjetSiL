import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./LoginPage.css";
import { userActions } from '../../_actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
//import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
//import loginImage from '../../assets/img-01.png'

//import PropTypes from 'prop-types';
//import Tabs from '@material-ui/core/Tabs';
//import Tab from '@material-ui/core/Tab';
//import Typography from '@material-ui/core/Typography';



  
class LoginPage extends React.Component {
    constructor(props) {
    super(props);
        // reset login status
        this.props.dispatch(userActions.logout());
        this.state = {
            username: '',
            password: '',
            submitted: false,
            showPassword: false,
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
    
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    
    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
       // const value=0,
   //     const setValue=0;

  /*function handleChange(event, newValue) {
    setValue(newValue);
  }*/

        return (
            <Fragment class="frag">   
               <div class="containerLogin">
               <img class="logo" src={require('../../assets/SayaraDzLogo.png')}/>
  
   <div class="form">
<form name="form" onSubmit={this.handleSubmit} className="formLogin">
  
    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
        <h3>Connecter comme un utilisateur fabricant </h3>

<TextField
required
id="outlined-textarea"
label="Nom d'utilisateur ou Email"
placeholder="Nom d'utilisateur ou Email"
multiline
margin="normal"
variant="outlined"
fullWidth
name="username" value={username} onChange={this.handleChange}
/>
</div>


<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>


<TextField
required
fullWidth
name="password" 
id="outlined-adornment-password"
variant="outlined"
type={this.state.showPassword ? 'text' : 'password'}
label="Password"
value={this.state.password}
onChange={this.handleChange}
InputProps={{
endAdornment: (
<InputAdornment id ="iconContainer" position="end">
<IconButton id="icon"

aria-label="Toggle password visibility"
onClick={this.handleClickShowPassword}
>
{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
</IconButton>
</InputAdornment>
),
}}
/>
</div>
<div className="form-group">
Mot de passe oublié ? Contacter l'administrateur
  <Button id="buttonSubmit"  variant="contained" color="primary" type="submit" className="btn btn-primary">Connecter</Button>
  {loggingIn}
  
</div>
</form>


</div>
       

            </div>
            <img src = {require('../../assets/bg12.svg')}/>

            </Fragment>

        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
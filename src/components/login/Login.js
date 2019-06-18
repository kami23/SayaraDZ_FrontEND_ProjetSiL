import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }


  render() {

    function TabContainer(props) {
      return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
          {props.children}
        </Typography>
      );
    }
    
    TabContainer.propTypes = {
      children: PropTypes.node.isRequired,
    };
    
    function LinkTab(props) {
      return (
        <Tab
          component="a"
          onClick={event => {
            event.preventDefault();
          }}
          {...props}
        />
      );
    }
    
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    }));
    
    function NavTabs() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);
    
      function handleChange(event, newValue) {
        setValue(newValue);
      }
    }
    return (

        
      <div class="login-page">
      <div class="form">
        
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Page One" href="/drafts" />
          <LinkTab label="Page Two" href="/trash" />
          </Tabs>
       
          {value === 0 && <TabContainer>
            <p> Connecter au temps que fabricant </p>
            <form class="login-form">
          <input type="text" placeholder="Email d'utilisateur"/>
          <input type="password" placeholder="mot de passe"/>
          <button>Connecter</button>
        </form>
        </TabContainer>}

          {value === 1 && <TabContainer>      
          <p> Connecter au temps qu'un admin </p>
          <form class="login-form">
          <input type="text" placeholder="Email d'utilisateur"/>
          <input type="password" placeholder="mot de passe"/>
          <button>Connecter</button>
          </form></TabContainer>}
          
         
      </div>
    </div>
    );
  }
}

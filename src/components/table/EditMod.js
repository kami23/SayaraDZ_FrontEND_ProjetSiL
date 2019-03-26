import React from "react";
import './Tables.css'
import "react-bootstrap";
import axios from 'axios'

  class EditMod extends React.Component {
    
    state = {
        marqueModele :"",
        idModele: "",
        nomModele :"",
        price:""
        };
     constructor () {
      let tokenStr = 'Token 2615184885246160c19d33ffd2f8ea6b6e11eb29';
      super();}
     handleChange = event => {
         this.setState ({nameModele : event.target.value});
     };

     handleSubmit = event => {
         event.preventDefault();
         const MOD = {
            nomModele : this.state.name,
            idModele : "16",
            marqueModele :"8"

         };
         let tokenStr = 'Token 2615184885246160c19d33ffd2f8ea6b6e11eb29';
           /* axios({
                method: 'put',
                url :https://sayaradz-ee-backend.herokuapp.com/api/modele/update/13/,
                headers:{
                   "Authorization" : ` ${tokenStr}`
                  },
                data: MOD

            })*/
     }

     submitEdit() {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text" id="ename" name="modele" placeholder="modele" className ="inputname" onChange= {this.handleChange}></input>
            <input type="text" id="eprice" name="prix" placeholder="prix" className ="inputprice"></input>
            <button id="esubmit" type ="submit" onClick={this.submitEdit}>submit</button>
            </form>
        );
  }

}

export default EditMod
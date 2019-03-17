import React from "react";
import deletee from "../../assets/icons/delete.png";
import edit from "../../assets/icons/edit.png";
import ajout from "../../assets/icons/ajout.png";
import loop from "../../assets/icons/search.png";
import Tables from './Tables';
import './Tables.css'
import "react-bootstrap";
import axios from 'axios'

import {
    Row,
    Col
  } from "reactstrap";
  import { thead, tbody } from "../../variables/general";
  /*axios.defaults.headers.common['Authorization'] = "2615184885246160c19d33ffd2f8ea6b6e11eb29";*/

  class AddMod extends React.Component {
    
    state = {
        pk :"",
        name :"" };
     constructor () {
      let tokenStr = 'Token 2615184885246160c19d33ffd2f8ea6b6e11eb29';
      super();}
     handleChange = event => {
         this.setState ({name : event.target.value});
     };

     handleSubmit = event => {
         event.preventDefault();
         const USER = {
            nomModele : this.state.name,
            idModele : "16",
            marqueModele :"8"

         };
         let tokenStr = 'Token 2615184885246160c19d33ffd2f8ea6b6e11eb29';
            axios({
                method: 'post',
               /// url :'http://7806af8b.ngrok.io/api/marque/create/',
                url: 'https://sayaradz-ee-backend.herokuapp.com/api/modele/create/',
                
                headers:{
                   "Authorization" : ` ${tokenStr}`
                  },
                data: USER

            })
         //}

         //)
         
     }

     submitAdd() {
        document.getElementById("fname").style.visibility="hidden";
        document.getElementById("fprice").style.visibility="hidden";
        document.getElementById("fsubmit").style.visibility="hidden";}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text" id="fname" name="modele" placeholder="modele" className ="inputname" onChange= {this.handleChange}></input>
            <input type="text" id="fprice" name="prix" placeholder="prix" className ="inputprice"></input>
            <button id="fsubmit" type ="submit" onClick={this.submitAdd}>submit</button>
            </form>
        );
  }

}

export default AddMod
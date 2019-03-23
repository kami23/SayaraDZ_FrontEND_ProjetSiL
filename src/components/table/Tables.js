import React from "react";
import deletee from "../../assets/icons/delete.png";
import edit from "../../assets/icons/edit.png";
import ajout from "../../assets/icons/ajout.png";
import loop from "../../assets/icons/search.png";
import "react-bootstrap";
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import axios from 'axios'
import './Tables.css'
import {
    Row,
    Col
  } from "reactstrap";
  import { thead, tbody } from "../../variables/general";
import AddMod from "./AddMod";
import EditMod from "./EditMod";
  /*axios.defaults.headers.common['Authorization'] = "2615184885246160c19d33ffd2f8ea6b6e11eb29";*/
  class RegularTables extends React.Component {
    
    state = {modele : [] };
    constructor () {
      let tokenStr = 'Token 2615184885246160c19d33ffd2f8ea6b6e11eb29';
      axios.get('https://sayaradz-ee-backend.herokuapp.com/api/modele',{ headers: {"Authorization" : ` ${tokenStr}`} }).then(response => {console.log(response);
      this.setState({modele: response.data}); });
      super();
      this.DelMod = this.DelMod.bind(this);
      this.clickAdd = this.clickAdd.bind(this);}
 
  clickAdd () {
    document.getElementById("fname").style.visibility="visible";
    document.getElementById("fprice").style.visibility="visible";
    document.getElementById("fsubmit").style.visibility="visible";

  }

  submitAdd() {
    document.getElementById("fname").style.visibility="hidden";
    document.getElementById("fprice").style.visibility="hidden";
    document.getElementById("fsubmit").style.visibility="hidden";
  }
   DelMod(event, x) {
    
    axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/modele/delete/`+x+`/`).then(
    )
  }  
  handleClick(event, x,y,z) {
    document.getElementById("ename").style.visibility="visible";
    document.getElementById("eprice").style.visibility="visible";
    document.getElementById("esubmit").style.visibility="visible";

  }
  render() {
    return (
        <div>
        <a href="#"><img className="Tabicons" src={ajout} onClick={this.clickAdd} /></a>
        <AddMod id ="addMod"/>
        <EditMod id ="EditMod"/>
        {/*<a href="#" className="linkImg"  onClick={this.clickAdd}><img className="Ajout" src={ajout} /></a>*/}
        <center>
        <div className="content">
        <Row>
          <Col xs={12}>     
               {/*<Table responsive>*/ }
              <table className="Table">         
                  <thead className="text-primary">
                    <tr>
                      {//Row du head
                        thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })
                      }
                    <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.modele.map (modele => {
                      return (
                        <tr>
                         { console.log (modele)}
                           {/* this.state.modele.map */}
                          {
                           <td key ={modele.idModele} className="modClass"> {modele.nomModele } </td>
                          }
                          <td  className="priceClass"> 20.000.000 DA</td>
                        <td><a href="#" onClick={(event)=> this.handleClick(event,modele.idModele,modele.nomModele,modele.marqueModele)} ><img className="TabiconsMod" src={edit} onclick={this.handleClick}  /></a> </td>                       
                        {/*<Router>
                        <Link to={"./EditMod.js"+modele} className="btn btn-primary">Edit</Link>
                        </Router>*/}
                        <td> <a href="#" onClick={(event)=> this.DelMod(event,modele.idModele)} value= {modele.idModele}><img className="TabiconsDel" src={deletee} /></a></td>
                        </tr>
                      );
                    })}
                  </tbody>
                
                {/*</Table>*/}
                </table>

          </Col>
        </Row>
      </div>
      </center>
      </div>);
  }

}

export default RegularTables
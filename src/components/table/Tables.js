import React from "react";
import deletee from "../../assets/icons/delete.png";
import edit from "../../assets/icons/edit.png";
import ajout from "../../assets/icons/ajout.png";
import loop from "../../assets/icons/search.png";
import "react-bootstrap";
import './Tables.css'
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col
  } from "reactstrap";
  import { thead, tbody } from "../../variables/general";
  
  class RegularTables extends React.Component {
    
  render() {
    return (
        <div>
        <center>
        <div className="content">
        <Row>
          <Col xs={12}>     
          <a href=""><img className="Ajout" src={ajout} /></a>  
    
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


                    </tr>
                  </thead>


                  <tbody>
                    {tbody.map((prop, key) => {
                      return (
                        
                        <tr key={key}>
                          
                          
                          {prop.data.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-right">
                                  {prop} </td>
                               
                                
                            );
                            
                            return <td key={key}>{prop}</td>;
                            
                          })}
                        <td><a href=""><img className="Tabicons" src={edit} /></a> </td>
                        <td> <a href=""><img className="Tabicons" src={deletee} /></a></td>
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
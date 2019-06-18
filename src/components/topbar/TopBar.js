import React, { Component } from 'react'
//import loop from "../../assets/icons/search.png";
import next from "../../assets/icons/next.png";
import loggs from "../../assets/icons/loggs.png";
import alarm from "../../assets/icons/alarm.png";
import './TopBar.css'



class TopBar extends React.Component {
<<<<<<< HEAD

    activateLasers() {
      
    } 

=======
    
>>>>>>> 514921f4929e96356c531dc45e23cb324c0a632a
    render() {
      return (
          <div className="topbar">
           <div className="borderDiv">
<<<<<<< HEAD
            <ul className="topnav">
            <li>HoudaAB</li>
            <li><a href="#news"><img className="TabiconsBell" src ={alarm}/></a></li>
            <li><a href="#news"><img className="Tabiconslogg" src ={loggs}/></a></li>
            <li><a href="#contact" onClick="activateLasers()"><img className="rotate90" src ={next}/></a></li>
=======
>>>>>>> 514921f4929e96356c531dc45e23cb324c0a632a
            <ul class="topnav">
            <li>HoudaAB</li>
            <li><a href="#news"><img className="Tabicons" src ={alarm}/></a></li>
            <li><a href="#news"><img className="Tabiconslogg" src ={loggs}/></a></li>
            <li><a href="#contact" onclick="activateLasers()"><img className="rotate90" src ={next}/></a></li>

</ul>

</div>
          </div>
      )
    }
    }

      
export default TopBar
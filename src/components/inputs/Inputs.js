import React from "react";
import loop from "../../assets/icons/search.png";
import './Inputs.css'

class InputsBar extends React.Component {
render () 
{
return (
<div>
<center>
<input type="text" id="fname1" name="firstname" placeholder="Rechercher" className ="myinput1"></input>
<button className ="Boutonloop"> <img  src={loop} /> </button>
<input type="text" id="fname2" name="firstname" placeholder="Afficher par" className ="myinput2"></input>
<input type="text" id="fname3" name="firstname" placeholder="Trier par" className ="myinput3"></input>
<input type="text" id="fname4" name="firstname" placeholder="Par page" className ="myinput4"></input> 
</center>
</div>
) 
}
}
export default InputsBar
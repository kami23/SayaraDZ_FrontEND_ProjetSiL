import React from 'react'
import ModeleList from '../../components/modeleList/ModeleList'
import {connect} from 'react-redux'

class ModeleView extends React.Component {

    render(){
      return(
         <div>
            <h1>Modeles </h1>
            <ModeleList modeles={this.props.modeles}/>
         </div>
     );    
    }
}

ModeleView.prototype={
    modeles:React.prototype.array.isRequired
}

function mapStateToPtops(state){
    return {
        modeles:state.modeles
    }
}
export default connect(mapStateToPtops)(ModeleView);
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../_actions/settings.actions'
/*import Switch from 'react-toggle-switch'
require('../style.scss')
*/
class Settings extends Component {
  render() {
    const {
      visible,
      showDots,
      coolButtons,
      autoplay,
      toggleSetting
    } = this.props

    if(!visible) return null

    return (
      <div className="settings">
      </div>
    )
  }
}


const mapStateToProps = ({ settings }) => {
  return {
    showDots: settings.showDots,
    coolButtons: settings.coolButtons
  }
}

export default connect(mapStateToProps, actions)(Settings)
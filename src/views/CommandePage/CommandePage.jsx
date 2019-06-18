import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CommandePage extends React.Component {
    
    render() {
        return (
            <Fragment>
            
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    
}

const connectedCommandePage = connect(mapStateToProps)(CommandePage);
export { connectedCommandePage as CommandePage }; 
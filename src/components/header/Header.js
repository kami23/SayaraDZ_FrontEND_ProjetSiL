import React, { Component } from 'react'
import './Header.css'
import Social from '../social/Social'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>WTM Algiers Debates</h1>
                <Social/>
            </header>
        )
    }
}

export default Header
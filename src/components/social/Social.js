import React, { Component } from 'react'
import './Social.css'
import Me from '../../assets/icons/facebook-logo.png'
import Me1 from '../../assets/icons/twitter-logo.png'
import Me2 from '../../assets/icons/instagram-logo.png'

import fbLogo from '../../assets/icons/facebook-logo.png'
import isLogo from '../../assets/icons/instagram-logo.png'
import twLogo from '../../assets/icons/twitter-logo.png'
class Social extends Component {
    render() {
        return (
            <nav className="social">
                <ul>
                    <li>
                        <a target="_blanc" href="https://web.facebook.com/GDGAlgiers/">
                           <img src={Me}/>

                        </a>
                    </li>
                    <li>
                        <a target="_blanc" href="https://instagram.com/gdg_algiers">
                           <img src={Me2}/>
                        </a>
                        </li>
                    <li>
                 
                     
                 
                        <a target="_blanc" href="https://twitter.com/gdg_algiers">
                            <img src={Me1}/>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Social
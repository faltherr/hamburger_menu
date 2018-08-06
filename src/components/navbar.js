import React, { Component } from 'react'
import MainCSS from '../main.css'

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            openMenu: false
        }
    }

    burgerOnOff = () => {
        const currentState = this.state.openMenu
        this.setState({
            openMenu: !currentState
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        let menuCollapser = ''
        if (this.state.openMenu === true) {
            menuCollapser = "menu-open"
        } else {
            menuCollapser = "menu-closed"
        }
        console.log("value passed as class name:", menuCollapser)
        return (
            <nav className="websiteHeader">
                <div className='navContainer'>
                    <div className="nav-text-l"> Start Bootstrap </div>
                {/* Nav Bar for wide */}
                    <div className="nav-text-r-wide">
                        <p className="wide-header-text"> Services </p>
                        <p className="wide-header-text"> Portfolio</p>
                        <p className="wide-header-text"> About </p>
                        <p className="wide-header-text"> Team </p>
                        <p className="wide-header-text"> Contact </p>
                    </div>
                {/* Nav Bar for narrow */}
                    <button class="header-menu-button" type="button" onClick={this.burgerOnOff}> <p> Menu </p>
                    <i className="fas fa-bars"></i>
                    </button>
                </div>
            <div className={menuCollapser}>
                <p className="menu-text-narrow"> Services </p>
                <p className="menu-text-narrow"> Portfolio</p>
                <p className="menu-text-narrow"> About </p>
                <p className="menu-text-narrow"> Team </p>
                <p className="menu-text-narrow"> Contact </p>
            </div>
            </nav>

        )
    }
}
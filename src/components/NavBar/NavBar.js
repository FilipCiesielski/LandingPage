import React, {Component} from 'react';
import logo from "../../assets/logo__eagle.png"
import './NavBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/fontawesome-free-solid';

class NavBar extends Component {

    state = {
        showMenu: false,
        mobileDisplayMenu: {}

    };

    handleOnClick = () => {
        (!this.state.showMenu) ? this.setState({
            showMenu: true,
            mobileDisplayMenu: {display: "flex"}
        }) : this.setState({showMenu: false, mobileDisplayMenu: {visilibity: "hidden"}})

    };

    render() {

        return (
            <div className={"navBar__wrap"}>
                <span><FontAwesomeIcon className='fontAwesome' icon={faBars} onClick={this.handleOnClick}/></span>
                <nav style={this.state.mobileDisplayMenu} className={"navBar__box"}>
                    <div className={"navBar__box__logo"}>
                        <img src={logo} alt={"logo eagle"}></img>
                    </div>
                    <div className={"navBar__box__menu"}>
                        <li><a href="">I stopnia</a></li>
                        <li><a href="">II stopnia</a></li>
                        <li><a href="">Podyplomowe</a></li>
                        <li><a href="">Szkolenia</a></li>
                        <li><a href="">Usługi</a></li>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
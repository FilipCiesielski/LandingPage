import React, {Component} from 'react';
import logo from "../../assets/Logo.png"
import './NavBar.scss';


class NavBar extends Component {
    render() {
        return (
            <div className={"navBar__wrap"}>
                <nav className={"navBar__box"}>
                    <div className={"navBar__box__logo"}>
                        <img src={logo} alt={"logo orzeł"}></img>
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
import React, {Component} from 'react';
import './Header.scss';
import {faArrowRight, faArrowLeft, faCircle} from '@fortawesome/fontawesome-free-solid';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Header extends Component {
    state = {
        activeIndex: 0,
        slider: {}

    }
    onNextClick = this.onNextClick.bind(this);
    onPrevClick = this.onPrevClick.bind(this);

    onNextClick() {
        if (this.state.activeIndex < 3) {
            this.setState({activeIndex: this.state.activeIndex + 1,});
        } else {
            this.setState({activeIndex: 0})
        }
        this.setState({
            slider: {
                "WebkitAnimation": "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                " animation": " slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            },
        })

    }

    onPrevClick() {

        if (this.state.activeIndex > 0) {
            this.setState({activeIndex: this.state.activeIndex - 1});
        } else {
            this.setState({activeIndex: 3})
        }
        this.setState({
            slider: {
                "WebkitAnimation": "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                "animation": "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            }
        })
    }

    render() {

        const sliderElement0 = <>
            <div className={"active "} style={this.state.slider}>
                <p>Będziesz się uczył z ciekawością.</p>
                <p>Obiecujemy.</p>

                <div className={"slider__box__content__buttons"}>
                    <button>zobacz więcej</button>
                    <button>umów się z aniołem</button>
                </div>
            </div>
        </>;
        const sliderElement1 = <>
            <div className={"active "} style={this.state.slider}>
                <p>SliderElement1</p>
                <p>Obiecujemy.</p>

                <div className={"slider__box__content__buttons"}>
                    <button>zobacz więcej</button>
                    <button>umów się z aniołem</button>
                </div>
            </div>
        </>;
        const sliderElement2 = <>
            <div className={"active "} style={this.state.slider}>
                <p>SliderElement2</p>
                <p>Obiecujemy.</p>

                <div className={"slider__box__content__buttons"}>
                    <button>zobacz więcej</button>
                    <button>umów się z aniołem</button>
                </div>
            </div>
        </>;
        const sliderElement3 = <>
            <div className={"active "} style={this.state.slider}>
                <p>SliderElement3</p>
                <p>Obiecujemy.</p>

                <div className={"slider__box__content__buttons"}>
                    <button>zobacz więcej</button>
                    <button>umów się z aniołem</button>
                </div>
            </div>
        </>
        let circle1
        let circle2
        let circle3
        let circle4
        (this.state.activeIndex === 0) ? circle1 = "yellow" : circle1 = "white";
        (this.state.activeIndex === 1) ? circle2 = "yellow" : circle2 = "white";
        (this.state.activeIndex === 2) ? circle3 = "yellow" : circle3 = "white";
        (this.state.activeIndex === 3) ? circle4 = "yellow" : circle4 = "white";

        return (
            <header>
                <div className="slider__box">
                    <div className={"slider__box__left"}>
                        {this.state.activeIndex === 0 && sliderElement0}
                        {this.state.activeIndex === 1 && sliderElement1}
                        {this.state.activeIndex === 2 && sliderElement2}
                        {this.state.activeIndex === 3 && sliderElement3}
                        <div className={"slider__box__buttons"}>
                            <span onClick={this.onPrevClick}><FontAwesomeIcon className='fontAwesome'
                                                                              icon={faArrowLeft}/> </span>
                            <span onClick={this.onNextClick}> <FontAwesomeIcon className='fontAwesome'
                                                                               icon={faArrowRight}/> </span>

                        </div>
                    </div>
                    <div className={"slider__box__right"}>
                        <div className={"slider__box__left__circle"}>
                            <FontAwesomeIcon color={circle1} className='fontAwesome' icon={faCircle}/>
                            <FontAwesomeIcon color={circle2} className='fontAwesome' icon={faCircle}/>
                            <FontAwesomeIcon color={circle3} className='fontAwesome' icon={faCircle}/>
                            <FontAwesomeIcon color={circle4} className='fontAwesome' icon={faCircle}/>
                        </div>

                    </div>
                </div>

            </header>
        );

    }
}


export default Header;
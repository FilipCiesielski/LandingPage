import React, {Component} from 'react';
import './Header.scss';
import {faArrowRight, faArrowLeft,faCircle} from '@fortawesome/fontawesome-free-solid';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Header extends Component {
    state = {
        activeIndex: 0,
        addClass:"active",
        hidden:"hidden"
    }
   onNextClick = this.onNextClick.bind(this);
    onPrevClick = this.onPrevClick.bind(this);

    onNextClick() {
        if (this.state.activeIndex < 2 ) {
            this.setState({activeIndex: this.state.activeIndex + 1,});
        } else {
            this.setState({activeIndex: 0})
        }
    }

    onPrevClick() {
        if (this.state.activeIndex > 0) {
            this.setState({activeIndex: this.state.activeIndex - 1});
        } else {
            this.setState({activeIndex: 2})
        }
    }


    render() {
        let sliderStyle = {
            transform: `translateX(${this.state.activeIndex * -100}%)`,
            transition: '0.2s'
        }
        return (
            <header>
            <div className="slider__box">
                             <div className={"slider__box__left"}>
                    <div className={"active "} style={sliderStyle}>
                        <p>Będziesz się uczył z ciekawością.</p>
                        <p>Obiecujemy.</p>

                        <div className={"slider__box__content__buttons"} >
                            <button>zobacz więcej</button>
                            <button>umów się z aniołem</button>
                        </div>
                    </div>
                               <div className={"slider__box__buttons"}>
                    <span onClick={this.onPrevClick}><FontAwesomeIcon  className='fontAwesome' icon={faArrowLeft} /> </span>
                    <span onClick={this.onNextClick}> <FontAwesomeIcon  className='fontAwesome' icon={faArrowRight} /> </span>

                </div>
                </div>
                <div className={"slider__box__right"}>
                    <div className={"slider__box__left__circle"}>
                        <FontAwesomeIcon  className='fontAwesome' icon={faCircle} />
                        <FontAwesomeIcon  className='fontAwesome' icon={faCircle} />
                        <FontAwesomeIcon  className='fontAwesome' icon={faCircle} />
                        <FontAwesomeIcon  className='fontAwesome' icon={faCircle} />
                    </div>

                </div>



                </div>
            {/*    <ol className='slide-container' style={sliderStyle}>*/}
            {/*        <li key={0}>{1}</li>*/}
            {/*        <li key={1}>{2}</li>*/}
            {/*        <li key={2}>{3}</li>*/}
            {/*        <li key={3}>{4}</li>*/}
            {/*        <li key={4}>{5}</li>*/}
            {/*    </ol>*/}
            {/*</div>*/}
            </header>
        );

    }
}


export default Header;
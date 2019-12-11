import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/fontawesome-free-solid';
import "../AboutForWho/AboutForWho.scss"


class AboutForWho extends Component {
    render() {
        return (
            <div className={"about__wrap"}>
                <section className={"about__box"}>
                    <div className={"about__box__article"}>
                        <h1>Dla kogo?</h1>
                            <p>Lorem ipsum dolor sit amet felis. Quisque nunc. Donec est. Duis ornare egestas mi, id
                                nisl. Nulla.</p>
                            <p>Lorem ipsum dolor sit amet quam. Phasellus in augue turpis, accumsan tincidunt.
                                Pellentesque habitant morbi tristique in, ipsum. Fusce suscipit sed, dui. In neque
                                lorem, iaculis scelerisque. Duis vel metus. Donec mauris rhoncus eget, dui. Suspendisse
                                justo iaculis augue. Duis luctus, nisl sit amet augue id sapien. Pellentesque habitant morbi tristique in, ipsum. Fusce suscipit sed, dui. In neque
                                lorem, iaculis scelerisque. Duis vel metus. Donec adipiscing elit.
                                Sed pulvinar risus. Sed sit amet, consectetuer <a href={"#"} target={"_blank"}> (felis non)</a>.</p>
                            <p>Wymagane od kandydata:</p>
                        <p> <FontAwesomeIcon  className='fontAwesome' icon={faArrowRight} />Ukończone studia wyższe</p>
                        <p><FontAwesomeIcon className='fontAwesome' icon={faArrowRight}/>Przygotowanie pedagogiczne</p>

                    </div>
                    <div className={"about__box__media"}>
                        <div className={"about__box__media--image"}>
                            <img src={"https://image.freepik.com/free-photo/close-up-hand-holding-globe_23-2147817185.jpg"}>
                            </img>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}


export default AboutForWho;
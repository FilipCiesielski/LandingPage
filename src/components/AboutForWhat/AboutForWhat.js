import React, {Component} from 'react';
import "./AboutForWhat.scss"


class AboutForWhat extends Component {
    render() {
        return (
            <div className={"about2__wrap"}>
                <section className={"about2__box"}>
                    <div className={"about2__box__media"}>
                        <div className={"about2__box__media--photo"}><span>Nowość</span><img
                            src={"https://image.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg"}></img>
                        </div>
                    </div>
                    <div className={"about2__box__article"}>
                        <h1>Po co?</h1>
                        <p>Lorem ipsum dolor sit amet quam. Phasellus in augue turpis, accumsan tincidunt.
                            Pellentesque habitant morbi tristique in, ipsum. Fusce suscipit sed, dui. In neque
                            lorem, iaculis scelerisque. Duis vel metus. Donec mauris rhoncus eget, dui. Suspendisse
                            justo iaculis augue. Duis luctus, nisl sit amet augue id sapien. Donec adipiscing elit.
                            Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non. Donec adipiscing elit.
                            Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non.</p>

                    </div>

                </section>
            </div>
        )
    }
}


export default AboutForWhat;
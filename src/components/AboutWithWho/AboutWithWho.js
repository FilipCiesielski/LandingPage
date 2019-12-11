import React, {Component} from 'react';
import "../AboutForWho/AboutForWho.scss"


class AboutWithWho extends Component {
    render() {
        return (
            <div className={"about__wrap"}>
                <section className={"about__box"}>
                    <div className={"about__box__article"}>
                        <h1>Z kim?</h1>
                        <p>Lorem ipsum dolor sit amet quam. Phasellus in augue turpis, accumsan tincidunt.
                             Donec mauris rhoncus eget, dui. Suspendisse
                            justo iaculis augue. Duis luctus, nisl sit amet augue id sapien. Donec adipiscing elit.
                            Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non.  Donec adipiscing elit.
                            Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non.</p>
                        <p>  Fusce suscipit sed, dui. In neque
                            lorem, iaculis scelerisque. Duis vel metus. Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non.  Donec adipiscing elit.
                            Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non. Pellentesque habitant morbi tristique in, ipsum.</p>
                    </div>
                    <div className={"about__box__media"}>
                        <div className={"about__box__media--clip"}>
                        </div>
                    </div>
                     </section>
            </div>
        )
    }
}


export default AboutWithWho;
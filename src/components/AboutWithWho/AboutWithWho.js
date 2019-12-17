import React, {Component} from 'react';
import "./AboutWithWho.scss"


class AboutWithWho extends Component {
    state = {
        divClassName: "hidden",
        movieOn: false
    };


    handleOnClick = () => {

        if (this.state.divClassName === "hidden") {

            this.setState({divClassName: "popup", movieOn: true})

        } else {
            this.setState({divClassName: "hidden", movieOn: false})
        }

    };


    render() {

        return (
            <div className={"about3__wrap"}>
                <div className={this.state.divClassName}>
                    <div onClick={this.handleOnClick} className={"close"}>close</div>
                    <div className={"popup__content"}>

                        {this.state.movieOn && <iframe id="ytplayer" type="text/html" width="90%" height="50%"
                                                       src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                                                       frameBorder="0"></iframe>}
                    </div>
                </div>
                <section className={"about3__box"}>

                    <div className={"about3__box__article"}>
                        <h1>Z kim?</h1>
                        <p>Lorem ipsum dolor sit amet quam. Phasellus in augue turpis, accumsan tincidunt.
                            Donec mauris rhoncus eget, dui. Suspendisse
                            justo iaculis augue. Duis luctus, nisl sit amet augue id sapien. Donec adipiscing elit.
                            Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non. Donec adipiscing elit.
                            Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non.</p>
                        <p> Fusce suscipit sed, dui. In neque
                            lorem, iaculis scelerisque. Duis vel metus. Sed pulvinar risus. Sed sit amet, consectetuer
                            adipiscing felis non. Donec adipiscing elit.
                            Sed pulvinar risus. Sed sit amet, consectetuer adipiscing felis non. Pellentesque habitant
                            morbi tristique in, ipsum.</p>
                    </div>
                    <div className={"about3__box__media"}>
                        <div className={"about3__box__media__clip"}>
                            <span onClick={this.handleOnClick}></span>
                            <img alt="globe in hand"
                                 src={"https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}></img>


                        </div>
                    </div>

                </section>

            </div>
        )
    }
}


export default AboutWithWho;
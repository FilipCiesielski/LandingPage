import React, {Component} from 'react';
import "./Footer.scss"

import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

class Footer extends Component {

    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={17}
                defaultCenter={{lat: 52.4232, lng: 16.9100}}>
                {props.isMarkerShown && <Marker position={{lat: 52.4232, lng: 16.9100}} icon={{
                    url: "https://www.laco.eu/wp-content/themes/laco/assets/img/icons/google-maps-icons/icon-map-marker.svg",
                    scaledSize: new window.google.maps.Size(25, 25)
                }}/>}
            </GoogleMap>
        ));

        let googleURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key`;
        return (

            <div className={"footer__wrap"}>

                <section className={"footer__box"}>

                    <div className={"footer__box__localisation"}>
                        <div>
                            <span>ul.Głogowska 10 <br/>61-719 Poznań<br/>tel.61 27 11 000</span>
                            <div className={"google__maps"}>
                                <MyMapComponent
                                    isMarkerShown
                                    googleMapURL={googleURL}
                                    loadingElement={<div/>}
                                    containerElement={<div/>}
                                    mapElement={<div/>}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"footer__box__columns"}>
                        <ul>
                            <li><span><a href={"#"}>O nas</a> </span></li>
                            <li><a href={"#"}>Dlaczego CDV</a></li>
                            <li><a href={"#"}>Kadra naukowa</a></li>
                            <li><a href={"#"}>Dla mediów</a></li>
                            <li><a href={"#"}>Kontakt</a></li>
                        </ul>
                        <ul>
                            <li><span><a href={"#"}>Dla kandydata</a></span></li>
                            <li><a href={"#"}>Poradnik maturzysty</a></li>
                            <li><a href={"#"}>Rekrutacja</a></li>
                            <li><a href={"#"}>Kredyt studencki</a></li>
                            <li><a href={"#"}>Studia dla cudzoziemców</a></li>
                        </ul>
                        <ul>
                            <li><span><a href={"#"}>Dla studenta</a></span></li>
                            <li><a href={"#"}>Wirtualna uczelnia</a></li>
                            <li><a href={"#"}>Stypendia</a></li>
                            <li><a href={"#"}>Biuro Karier</a></li>
                            <li><a href={"#"}>Studiuj dalej</a></li>
                        </ul>
                        <ul>
                            <li><span><a href={"#"}>Dla biznesu</a></span></li>
                            <li><a href={"#"}>Współpraca z biznesem</a></li>
                            <li><a href={"#"}>EmotionsLAB</a></li>
                            <li><a href={"#"}>Wynajem sal</a></li>
                            <li><a href={"#"}>Znajdź pracownika</a></li>
                        </ul>
                        <ul>
                            <li><span><a href={"#"}>Na skróty</a></span></li>
                            <li><a href={"#"}>Aktualności</a></li>
                            <li><a href={"#"}>Wydarzenia</a></li>
                            <li><a href={"#"}>Konferencje</a></li>
                            <li><a href={"#"}>Blog</a></li>
                        </ul>
                    </div>

                </section>
                <div className={"footer__author"}>
                    <div>Projekt i realizacja: Nazwa</div>
                </div>
            </div>
        )
    }
}

export default Footer;
import React, {Component} from 'react';
import './Contact.scss';


class Contact extends Component {
    render() {
        return (
            <div className={"contact__wrap"}>

                <section className={"contact__box"}>
                    <div className={"contact__box__form"}>
                        <span>Nie znalazłeś odpowiedniego kontaktu?</span>
                        <span>Skorzystaj z formularza.</span>
                        <form>
                            <div className={"form__inputs"}>
                                <div>
                                    <input type={"name"} required=" "/>
                                    <label>Imię</label>
                                </div>
                                <div>
                                    <input type={"name"} required=" "/>
                                    <label>Nazwisko</label>
                                </div>
                            </div>
                            <div className={"form__inputs"}>
                                <div>
                                    <input type={"email"} required=" "/>
                                    <label>Adres e-mail</label>
                                </div>

                                <div>
                                    <textarea required={" "}/>
                                    <label>Treść Wiadomośći</label>
                                </div>
                            </div>

                            <div className={"contact__box__checkBox"}>
                                <div className="custom__checkbox">
                                    <input type="checkbox" value="None" id="custom__checkbox" name="check"/>

                                    <label htmlFor="custom__checkbox"></label>
                                </div>

                                <p>Wyrażam zgodę na przetwarzanie moich danych osobowych dla
                                    potrzeb
                                    niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu
                                    Europejskiego
                                    i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                                    związku
                                    z
                                    przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz
                                    uchylenia
                                    dyrektywy 95/46/WE (RODO).</p>
                            </div>
                            <input className={"submit"} type={"submit"} value={"wyślij"}/>
                        </form>

                    </div>

                </section>

            </div>
        )

    }
}


export default Contact;
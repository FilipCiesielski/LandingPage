import React, {Component} from 'react';
import './Contact.scss';


class Contact extends Component {
    render() {
        return (
            <div className={"contact__wrap"}>
                <section className={"contact__box"}>
                    <div className={"contact__box__invitationToContact"}>
                        <h3>Nie znalazłeś odpowiedniego kontaktu?</h3>
                        <h4>Skorzystaj z formularza.</h4>
                    </div>
                    <div>
                        <form onSubmit={"#"}>

                        </form>
                        <button></button>
                        <input type={"checkbox"}/><p>Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
                        niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego
                        i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
                        przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia
                        dyrektywy 95/46/WE (RODO).</p>

                    </div>

                </section>
            </div>
        )

    }
}


export default Contact;
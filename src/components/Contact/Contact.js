import React, {Component} from 'react';
import './Contact.scss';


class Contact extends Component {
    constructor(props) {
        super(props);

       this.state = {
            nameInput: "",
            surnameInput: "",
            emailInput: "",
            messageInput: "",
            checkBox: false,
            formSend: false,
            errName: false,
            errSurname: false,
            errEmail: false,

        };
        this.myRef = React.createRef();

    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value })
        console.log(this.myRef.current.style.color="red")


    };

    handleChangeBox = e => {
        this.setState({checkBox: !this.state.checkBox});


    };

    handleOnSubmit = e => {
        this.setState({
            formSend: false, errName: false, errSurname: false, errEmail: false, errMessage: false
        });

        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

        let {nameInput, surnameInput, emailInput, checkBox,formSend} = this.state;


        e.preventDefault();
        if(nameInput!==""&& nameInput.length>1 && nameInput!==""&& nameInput.length>1 && mailReg.test(emailInput) && checkBox  ) {
            this.setState({formSend: true})
        }


// const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
//
// fetch(url, {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name, email, message
//     })
// })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//     });

    }

    render() {

        return (
            <div className={"contact__wrap"}>

                <section className={"contact__box"}>
                    <div className={"contact__box__form"}>
                        <span>Nie znalazłeś odpowiedniego kontaktu?</span>
                        <span>Skorzystaj z formularza.</span>
                        <form onSubmit={this.handleOnSubmit}>
                            <div className={"form__inputs"}>
                                <div>
                                    <input type="name" name="nameInput" ref={this.myRef} required=" " value={this.state.nameInput}
                                           onChange={this.handleOnChange}/>
                                    <label>Imię</label>
                                </div>
                                <div>
                                    <input type="name" name="surnameInput"  required=" "  value={this.state.surnameInput}
                                           onChange={this.handleOnChange}/>
                                    <label>Nazwisko</label>
                                </div>
                            </div>
                            <div className={"form__inputs"}>
                                <div>
                                    <input type="email"  name="emailInput" required=" " value={this.state.emailInput}
                                           onChange={this.handleOnChange}/>
                                    <label>Adres e-mail</label>
                                </div>

                                <div>
                                    <textarea name="messageInput" required=" "  maxLength="2000" value={this.state.messageInput}
                                              onChange={this.handleOnChange}/>
                                    <label>Treść Wiadomośći</label>
                                </div>
                            </div>

                            <div className={"contact__box__checkBox"}>
                                <div className="custom__checkbox">
                                    <input type="checkbox" name="check" value="None" id="custom__checkbox"
                                           onChange={this.handleChangeBox}/>

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
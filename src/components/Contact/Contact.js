import React, {Component} from 'react';
import './Contact.scss';

class Contact extends Component {


    state = {
        name: "",
        surname: "",
        email: "",
        message: "",

        colorName: "black",
        colorSurname: "black",
        colorEmail: "black",
        colorMessage: "black",

        borderName: "none",
        borderSurname: "none",
        borderEmail: "none",
        borderMessage: "none",

        checkBox: false,
        errCheckBox: false,
        formSend: false,
        clickEffect: "null"
    };


    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.validationForm(e.target.name));

    };

    validationForm = (inputName) => {

        let {name, surname, email, message} = this.state;
        const mail = email;
        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{1,3}$/i;

        if (inputName === "name" && name === "" && name.length < 2) {
            this.setState({borderName: "1px solid red", colorName: "red"});

        } else if (inputName === "name") {
            this.setState({borderName: "none", colorName: "black"})
        }
        if (inputName === "surname" && surname === "" && surname.length < 2) {
            this.setState({borderSurname: "1px solid red", colorSurname: "red"})
        } else if (inputName === "surname") {
            this.setState({borderSurname: "none", colorSurname: "black"})
        }
        if (inputName === "email" && !mailReg.test(mail)) {
            this.setState({borderEmail: "1px solid red", colorEmail: "red"})

        } else if (inputName === "email") {
            this.setState({borderEmail: "none", colorEmail: "black"});
        }
        if (inputName === "message" && message === "" && message.length < 1) {
            this.setState({borderMessage: "1px solid red", colorMessage: "red"})
        } else if (inputName === "message") {
            this.setState({borderMessage: "none", colorMessage: "black"})
        }

    };

    handleChangeBox = () => {
        this.setState({checkBox: !this.state.checkBox});
        {
            this.state.checkBox ? this.setState({borderCheckBox: "1px solid red"}) : this.setState({borderCheckBox: "none"})
        }

    };

    handleOnSubmit = e => {

        this.setState({clickEffect: "pressButton"});
        this.setState({formSend: false});
        this.validationForm();

        let {name, surname, email, checkBox, message,} = this.state;
        const mail = email;
        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{1,3}$/i;

        e.preventDefault();


        async function makePostRequest() {
            let url;
            await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    name: name,
                    surname: surname,
                    email: email,
                    message: message
                }

            }).then(response => console.log(response))
                .catch(error => console.log(error));

        }

        if (name !== "" && name.length > 2 && name.length < 50 && surname !== "" && surname.length > 2 && surname.length < 50 && mailReg.test(mail) && message.length > 0 && checkBox) {
            this.setState({formSend: true});
            makePostRequest()
        } else {
            if (!checkBox) {
                this.setState({borderCheckBox: "1px solid red"})
            }
        }

        if (name === "" && name.length < 2) {
            this.setState({borderName: "1px solid red", colorName: "red"});

        }
        if (surname === "" && surname.length < 2) {
            this.setState({borderSurname: "1px solid red", colorSurname: "red"})
        }
        if (!mailReg.test(mail)) {
            this.setState({borderEmail: "1px solid red", colorEmail: "red"})

        }
        if (message === "" && message.length < 1) {
            this.setState({borderMessage: "1px solid red", colorMessage: "red"})
        }

    };

    render() {
        return (
            <div className={"contact__wrap"}>

                <section className={"contact__box"}>
                    <div className={"contact__box__form"}>
                        <span>Nie znalazłeś odpowiedniego kontaktu?</span>
                        <span>Skorzystaj z formularza.</span>
                        {this.state.formSend &&
                        <span style={{color: "#4D9EEA"}}>Twoja wiadomość zosłała wysłana.</span>}
                        <form onSubmit={this.handleOnSubmit}>
                            <div className={"form__inputs"}>

                                <div className="floating-label" style={{border: this.state.borderName}}>
                                    <input className="floating-input" placeholder=" " type="text" name="name"
                                           style={{color: this.state.colorName}}
                                           value={this.state.name}
                                           onChange={this.handleOnChange}/>

                                    <label>Imię</label>
                                </div>

                                <div className="floating-label" style={{border: this.state.borderSurname}}>
                                    <input className="floating-input"
                                           placeholder=" " type="name" name="surname"
                                           style={{color: this.state.colorSurname}}
                                           value={this.state.surname}
                                           onChange={this.handleOnChange}/>

                                    <label>Nazwisko</label>
                                </div>
                            </div>
                            <div className={"form__inputs"}>

                                <div className="floating-label" style={{border: this.state.borderEmail}}>
                                    <input className="floating-input" placeholder=" " type="text"
                                           name="email" style={{color: this.state.colorEmail}}
                                           value={this.state.email}
                                           onChange={this.handleOnChange}/>
                                    <label>Adres e-mail</label>
                                </div>

                                <div className="floating-label" style={{border: this.state.borderMessage}}>
                                    <textarea className="floating-input floating-textarea" placeholder=" "
                                              name="message" style={{color: this.state.colorMessage}}
                                              value={this.state.message}
                                              onChange={this.handleOnChange}/>

                                    <label>Treść Wiadomośći</label>
                                </div>
                            </div>
                            <div className={"contact__box__checkBox"} style={{border: this.state.borderCheckBox}}>
                                <div className="custom__checkbox">
                                    <input type="checkbox" name="check" value="None" id="custom__checkbox"
                                           onChange={this.handleChangeBox}/>
                                    <label htmlFor="custom__checkbox"></label>
                                </div>
                                <p>Wyrażam zgodę na przetwarzanie moich danych osobowych dla
                                    potrzeb
                                    niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem
                                    Parlamentu
                                    Europejskiego
                                    w sprawie ochrony osób
                                    fizycznych w
                                    związku
                                    z
                                    przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych
                                    (RODO).</p>
                            </div>
                            <input className={this.state.clickEffect} type={"submit"} value={"wyślij"}/>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}


export default Contact;
import React, { useRef } from 'react'
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Map from '../Map/Map';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        console.log("Pozivam se");
        e.preventDefault();

        emailjs.sendForm('service_hdkrryu', 'template_wcw299c', form.current, 'Z_0-Cs6CmcZEESvvj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div>

            <h3>Napišite što Vas zanima</h3>

            <form action="" id="contact_form" ref={form}>

                <input type="text" name="name" placeholder='Ime' />
                <br />
                <input type="text" name="surname" placeholder='Prezime' />
                <br />
                <input type="email" name="user_email" placeholder='Email adresa' />
                <br />
                <textarea name="description" id="description" cols="30" rows="15" placeholder='Opišite što Vas zanima'></textarea>
                <br />
                <input type="button" id="send_button" value="Pošalji" onClick={sendEmail}></input>


            </form>

            <br /><br />

            <h3>Želite nas kontaktirati uživo? Posjetite nas na lokaciji:</h3>


            <Map />

        </div>
    )
}

export default Contact
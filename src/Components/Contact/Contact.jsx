import React, { useRef } from 'react'
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Map from '../Map/Map';
import Footer from "../Footer/Footer"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        //console.log("Pozivam se");
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

        <div className='text_decoration_div'>

            <h3>Napišite što Vas zanima</h3>

            </div>

            <form action="" id="contact_form" ref={form}>

                <input type="text" name="name" placeholder='Ime' />
               
                <input type="text" name="surname" placeholder='Prezime' />
              
                <input type="email" name="user_email" placeholder='Email adresa' />
               
                <textarea name="description" id="description" cols="30" rows="15" placeholder='Opišite što Vas zanima'></textarea>
            
                <input type="button" id="send_button" value="Pošalji" onClick={sendEmail}></input>


            </form>

            <br /><br />
            <br />

            <div className='text_decoration_div'>

            <h3>Želite nas kontaktirati uživo? Posjetite nas na lokaciji:</h3>

            <br />

            </div>


            <Map />

            <Footer/>

        </div>
    )
}

export default Contact
import React, { useRef, useState } from 'react'
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Map from '../Map/Map';
import Footer from "../Footer/Footer"
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

    const [mail, setMail] = useState('');
    const [description, setDescription] = useState('');


    const form = useRef();

    async function sendEmail(e) {
        e.preventDefault();

        if (mail === '' || description === '') {
            toast.error("Molim ispunite podatke za mail i opis");
            return;

        }


        try {

            await emailjs.sendForm('service_hdkrryu', 'template_wcw299c', form.current, 'Z_0-Cs6CmcZEESvvj')
            toast.success("Uspješno poslano");
            console.log("Uspjesno poslano");


        }

        catch (err) {
            console.log("Doslo je do pogreske");
            toast.error("Nešto je pošlo po krivu");
        }

    };


    return (
        <div>

            <div className='text_decoration_div'>

                <h3>Napišite što Vas zanima</h3>

            </div>

            <form action="" id="contact_form" ref={form}>

                <input type="text" name="name" placeholder='Ime' />

                <input type="text" name="surname" placeholder='Prezime' />

                <input type="email" name="user_email" placeholder='Email adresa' id="mail_input" required value={mail} onChange={(e) => setMail(e.target.value)} />

                <textarea name="description" id="description" cols="30" rows="15" placeholder='Opišite što Vas zanima' value={description}
                    onChange={(e) => setDescription(e.target.value)}

                ></textarea>

                <input type="button" id="send_button" value="Pošalji" onClick={sendEmail}></input>




            </form>

            <div>

                <Toaster position='top-center' />

            </div>

            <br /><br />
            <br />

            <div className='text_decoration_div'>

                <h3>Želite nas kontaktirati uživo? Posjetite nas na lokaciji:</h3>

                <br />

            </div>


            <Map />

            <Footer />

        </div>
    )
}

export default Contact
import React , {useRef, useState,useContext} from "react";
import "../Contact/Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

const Contact = () => {
  const form = useRef();
  const [done ,setDone] =useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vzgv3it', 'template_wla95wa', form.current, 'Fcr0OPbtj8HiToCx5')
    e.target.reset()
    setDone(true)
      
  };

  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode
  return (
    <div className="contact-form" id = "contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color:darkMode? 'white':''}}>Get in Touch</span>
          <span> Contact me</span>
          <div className="blur s-blur1"
           style={{background:"#ABF1FF94"}}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" className="user" placeholder="Name" />
            <input type="email" name="email" className="user" placeholder="Email" />
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Send" className="button" />
            <span>{done && 'Thanks for contacting me!'}</span>
            <div className="blur c-blur1"
            style={{background:"var(--purple)"}}
            ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

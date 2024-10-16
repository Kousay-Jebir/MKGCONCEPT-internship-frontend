import ContactForm from "./ContactForm";
import theme from "../../theme";
import "./contact.css"
import ContactInformation from "./ContactInformation";
import SocialBlue from "../../assets/socialBlue.svg"
import { useState,useEffect } from "react";
import { useIsMobile } from "../../hooks/useMobile";

export default function Contact(){

    const isMobile = useIsMobile()


    return(
        <section style={{
            padding:'0 2%',
            backgroundColor:theme.palette.background.light,
            marginBottom:'5em'
            }}>
            
            <div className="contact-header" style={{fontWeight:theme.typography.fontWeight.regular,textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',padding:'2em'}}>
                <h2 style={{fontWeight:'inherit'}}>Contact Us</h2>
                <h4 style={{fontWeight:'inherit', maxWidth:'400px'}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
            </div>

            {
                isMobile? <div style={{display:'flex',justifyContent:'center'}}>
                 <img src={SocialBlue} alt="" />
                </div>:null
            }
            { isMobile? <div style={{padding:'5em'}}><ContactInformation/></div>:null}
            
            <div style={{maxWidth:'300px',margin:'auto'}}>
                <ContactForm/>
            </div>

            { isMobile? null:<div style={{padding:'5em'}}><ContactInformation/></div>}

    

        </section>
    );
}
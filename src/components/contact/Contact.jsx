import ContactForm from "./ContactForm";
import theme from "../../theme";
import "./contact.css"

export default function Contact(){
    return(
        <section style={{
            padding:'0 2%',
            backgroundColor:theme.palette.background.light
            }}>
            
            <div className="contact-header" style={{fontWeight:theme.typography.fontWeight.regular,textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',padding:'2em'}}>
                <h2 style={{fontWeight:'inherit'}}>Contact Us</h2>
                <h4 style={{fontWeight:'inherit', maxWidth:'400px'}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
            </div>
            
            <div style={{maxWidth:'300px',margin:'auto'}}>
                <ContactForm/>
            </div>


        </section>
    );
}
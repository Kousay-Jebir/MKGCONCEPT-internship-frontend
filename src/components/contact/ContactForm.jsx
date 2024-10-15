import theme from "../../theme";
import Box from "../utility/Box";
import ContactButton from "./ContactButton";

export default function ContactForm(){

    const inputStyles = {
        boxSizing:'border-box',
        border: `1px solid ${theme.palette.neutral.dark}`,
        backgroundColor: theme.palette.neutral.light,
        paddingInline:'1.5em',
        paddingBlock:'0.7em',
        borderRadius:'100px',
        width:'100%',
        overflow:'hidden',
        display:'block',
    }



    return(
        <Box element="form" styles={{
            border: `1px solid ${theme.palette.neutral.dark}`,
            borderRadius: '1em',
            textAlign: 'center',
            paddingInline:'3em'
        }}>
            <h3>Contact Us</h3>

            <div style={{textAlign:'start'}}>
                <input type="text" name="contact-name" id="contact-name" style={inputStyles} placeholder="Your Name"/>
                <input type="email" name="contact-email" id="contact-email" style={inputStyles} placeholder="Your Email"/>
                <textarea name="contact-message" id="contact-message" style={{...inputStyles,borderRadius:'none',resize:'none',minWidth: '100%'}} placeholder="Your Message"></textarea>
            </div>
            <ContactButton/>
        </Box>
    );
}
import theme from "../../theme";
import NewsLetterButton from "./NewsletterButton";

export default function NewsLetterForm(){
    const emailInputStyles = {
        border: `1px solid ${theme.palette.neutral.dark}`,
        backgroundColor: theme.palette.neutral.light,
        paddingInline:'2em',
        paddingBlock:'0.7em',
        borderRadius:'100px'
    }
    return(
        <form style={{
            display:'inline-flex',
            gap:'10px'
        }}>
            <input type="email" name="email" id="email" placeholder="Your email" style={emailInputStyles}/>
            <NewsLetterButton>Subscribe</NewsLetterButton>
        </form>
    );
}
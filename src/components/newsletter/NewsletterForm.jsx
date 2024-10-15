import React, { useState, useEffect } from "react";
import theme from "../../theme";
import NewsLetterButton from "./NewsletterButton";

export default function NewsLetterForm() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const emailInputStyles = {
        border: `1px solid ${theme.palette.neutral.dark}`,
        backgroundColor: theme.palette.neutral.light,
        paddingInline: '2em',
        paddingBlock: '0.7em',
        width: isMobile ? '100%' : 'auto',
        boxSizing: 'border-box',
        borderRadius: '100px',
        marginBottom: isMobile? '0.75em' : 0
    };

    return (
        <form style={{
            display: isMobile? 'inline' : 'inline-flex',
            gap:  isMobile? '0' : '10px',
            flexDirection: isMobile ? 'column' : 'row', 
            width: isMobile ? '100%' : 'auto'
        }}>
            <input type="email" name="email" id="email" placeholder="Your email" style={emailInputStyles} />
            <NewsLetterButton mobileStyles={{
                display: 'block',
                width: isMobile ? '100%' : 'auto', 
            }}>Subscribe</NewsLetterButton>
        </form>
    );
}

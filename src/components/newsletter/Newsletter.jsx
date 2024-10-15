import React, { useState, useEffect } from "react";
import illustration from '../../assets/newsletter.svg'
import theme from '../../theme'
import NewsLetterForm from './NewsletterForm'
export default function Newsletter(){

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

    const additionalContentForMobile =
    <div className="newsletter-header" style={{fontWeight:theme.typography.fontWeight.regular,textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',padding:'2em'}}>
                <h2 style={{fontWeight:'inherit'}}>Newsletter</h2>
                <h4 style={{fontWeight:'inherit', maxWidth:'400px'}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
    </div>



    return(
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>
            { isMobile? null :<div><img style={{width:'75%',height:'75%'}} src={illustration} alt="" /></div>}
            <div>
                <div>
                    <h3>At your fingertips</h3>
                   { isMobile? additionalContentForMobile :  <h2 style={{fontWeight:theme.typography.fontWeight.regular}}>Lorem, ipsum dolor.</h2>}
                </div>
                { isMobile?  <div><img style={{width:'75%',height:'75%'}} src={illustration} alt="" /></div>:null}
                <div>
                    <h3>Subscribe to our Newsletter</h3>
                    <p>Available exclusivery on Logoland</p>

                    <NewsLetterForm />
                </div>
            </div>

        </div>
    )
}
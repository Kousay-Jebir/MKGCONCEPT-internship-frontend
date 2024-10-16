import theme from "../../theme";
import facebookIcon from "../../assets/facebook.svg"
import linkedinIcon from "../../assets/linkedin.svg"
import twitterIcon from "../../assets/twitter.svg"
import mapWhite from "../../assets/mapWhite.svg"
import phoneWhite from "../../assets/phoneWhite.svg"

import "./footer.css"

export default function Footer(){
    const titles = ['Pages','Tomothy','Jane Black']

    const footerLinks=[
        {   
            Home:'#',
            Product:'#',
            Pricing:'#',
            About:'#',
            Contact:'#'
        },

        {   
            'Eleanor Edwards':'#',
            'Ted Robertson':'#',
            'Annette Russell':'#',
            'Jennie Mckinney':'#',
            'Gloria Richards':'#'
        },

        {
            'Philip Jones':'#',
            'Product':'#',
            'Colleen Russell':'#',
            'Marvin Hawkins':'#',
            'Bruce Simmmons':'#',
        }

    ]

    const FooterSection = ({ title, list }) => {
        return (
            <div className="footer-section">
                <h2>{title}</h2>
                <ul className="footer-section-ul">
                    {Object.entries(list).map((item, index) => (
                        <li key={index}>
                            <a href={item[1]}>{item[0]}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const Social = ({icon,href="#"})=>{
        return(
            <a href="">
                <img src={icon}/>
            </a>
        )
    }
    
    

    return(
        <footer style={{background:theme.palette.background.dark}}>
            
            <div className="footer-section-container">
                {
                    footerLinks.map((item,index)=>{
                        return(<FooterSection  key={index} title={titles[index]} list={item}/>)
                    })
                }
            </div>

        <div className="footer-icons">
            <div className="footer-contact-icons-container">
                <div className="footer-contact-social-icons">
                    <div className="footer-contact-icons">
                        <img src={mapWhite} />
                        <span>7480 Mockingbird Hill undefined </span>
                    </div>
                    
                    <div className="footer-contact-icons">
                        <img src={phoneWhite}/>
                        <span>(239) 555-0108</span>
                    </div>
                </div>

                <div className="footer-nav-icons">
                        <Social icon={twitterIcon}/>
                        <Social icon={facebookIcon}/>
                        <Social icon={linkedinIcon}/>
                </div>

            </div>

        </div>

        </footer>
    );
}
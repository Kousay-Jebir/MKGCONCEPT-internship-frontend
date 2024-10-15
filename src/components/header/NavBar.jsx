import theme from "../../theme";
import "./navbar.css"
import facebookIcon from "../../assets/facebook.svg"
import linkedinIcon from "../../assets/linkedin.svg"
import twitterIcon from "../../assets/twitter.svg"
import menuIcon from "../../assets/menuIcon.svg"
import { useState } from "react";


const NavLink = ({children,href='#'})=>{
    return(
        <a href={href}>{children}</a>
    );
}

const Logo = <span style={{fontWeight:theme.typography.fontWeight.bolder,fontSize:'1.5em'}}>LOGO LAND</span>

const Social = ({icon,href="#"})=>{
    return(
        <a href="">
            <img src={icon}/>
        </a>
    )
}

const Menu = <div className="menu">
    <div className="menu-nav-links">
        <NavLink>Home</NavLink>
        <NavLink>Product</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
    </div>
    <div style={{display:'flex'}}>
            <Social icon={twitterIcon}/>
            <Social icon={facebookIcon}/>
            <Social icon={linkedinIcon}/>
    </div>

</div>



export default function NavBar(){

    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen((current)=>!current);
        console.log(isMenuOpen)
    }

    return(
        <nav>
            <div className="nav-links-container">
                <NavLink>Home</NavLink>
                <NavLink>Product</NavLink>
                <NavLink>Pricing</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Contact</NavLink>
            </div>

            <div className="nav-icons-container">
                {Logo}

                <div><button className="menu-icon" onClick={toggleMenu}><img src={menuIcon} alt="" /></button>
                    {isMenuOpen? Menu:null}
                </div>
                
                <div className="nav-icons">
                    <Social icon={twitterIcon}/>
                    <Social icon={facebookIcon}/>
                    <Social icon={linkedinIcon}/>
                </div>
            </div>

        </nav>

    )
}




import Button from "../utility/Button";
import "./header.css"
import { useEffect,useState } from "react";
import NavBar from "./NavBar";

export default function Header(){

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

    const HeaderTag = isMobile? 'h2':'h1'

    return(
        <header className="header">
            {/* <div>Navbar</div> */}
            <NavBar/>
            <div className="header-content" style={{display:'flex',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                <HeaderTag style={{maxWidth: isMobile? '50%':'25%'}}>The best products start with an idea</HeaderTag>
                <h4 style={{minWidth:'27%'}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
            </div>
            {/* <Button styles={{padding:'1em 4em'}}>Try for free</Button> */}
        </header>
    );
}
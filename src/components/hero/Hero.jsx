import { useState,useEffect } from "react";
import theme from "../../theme";
import Box from "../utility/Box";
import HeroButton from "./HeroButton";
import computerScreenImage from "/src/assets/laptop.svg"
import { useIsMobile } from "../../hooks/useMobile";
export default function Hero(){
    const isMobile = useIsMobile()
    return(
        <Box styles={{
            display: isMobile? 'block':'flex',
            justifyContent:'center'
        }}>
            <div style={{textAlign: isMobile? 'center' : 'initial'}}>
                <h2 style={{fontWeight:theme.typography.fontWeight.regular}}>Lorem, ipsum dolor.</h2>
                <h4 style={{fontWeight:theme.typography.fontWeight.regular}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
                <HeroButton>Try For Free</HeroButton>
            </div>
            <img style={{width:'100%',height:'100%',display:'block',maxWidth:'350px',maxHeight:'350px',margin: isMobile?'auto':'0'}} src={computerScreenImage} alt="computer screen image" />
        </Box>
    )
}
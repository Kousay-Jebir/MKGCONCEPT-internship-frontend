import theme from "../../theme";
import Box from "../utility/Box";
import HeroButton from "./HeroButton";
import computerScreenImage from "/src/assets/laptop.svg"

export default function Hero(){
    return(
        <Box>
            <div>
                <h2 style={{fontWeight:theme.typography.fontWeight.regular}}>Lorem, ipsum dolor.</h2>
                <h4 style={{fontWeight:theme.typography.fontWeight.regular}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
                <HeroButton>Try For Free</HeroButton>
            </div>
            <img src={computerScreenImage} alt="computer screen image" />
        </Box>
    )
}
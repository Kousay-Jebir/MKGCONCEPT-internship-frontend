import theme from "../../theme"
import Box from "../utility/Box"

export default function FeaturCard({svgIcon,title,description}){
    return(
        <Box styles={{
            textAlign:'center',
            color:theme.palette.text.secondary
        }}>
            <img src={svgIcon}></img>
            <h3>{title}</h3>
            <p style={{color:theme.palette.text.primary}}>{description}</p>
        </Box>
    )
}
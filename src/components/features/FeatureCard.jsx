import Box from "../utility/Box"

export default function FeaturCard({svgIcon,title,description}){
    return(
        <Box styles={{
            textAlign:'center',
        }}>
            <img src={svgIcon}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </Box>
    )
}
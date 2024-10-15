import featureVector from '../assets/featureVector.svg'
import Box from './utility/Box'

export default function FeaturCard({svgIcon,title,description}){
    return(
        <Box styles={{
            textAlign:'center',
        }}>
            <img src={featureVector}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </Box>
    )
}
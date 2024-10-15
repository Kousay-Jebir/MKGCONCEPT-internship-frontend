import featureVector from '../assets/featureVector.svg'
import Box from './utility/Box'

export default function Feature({svgIcon,title,description}){
    return(
        <Box styles={{
            textAlign:'center',
        }}>
            <img src={featureVector}></img>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</p>
        </Box>
    )
}
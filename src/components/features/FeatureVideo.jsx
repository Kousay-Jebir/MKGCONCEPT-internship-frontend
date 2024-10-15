import featuresVideo from "../../assets/featuresVideo.svg"

export default function FeatureVideo({isMobile}){

    return(
        <div style={{padding: isMobile? '0' : '0 20%'}}>
            <img src={featuresVideo} alt=""  style={{display:'block',width:'100%',height:'100%'}}/>
        </div>
    )
}
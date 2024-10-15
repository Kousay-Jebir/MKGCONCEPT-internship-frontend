import theme from "../../theme";
import FeaturCard from "./FeatureCard";

import featureIcon from "../../assets/featureVector.svg"
import FeatureVideo from "./FeatureVideo";
import { useEffect,useState } from "react";

export default function Feature(){

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
    return(
        <section style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <div className="features-header" style={{fontWeight:theme.typography.fontWeight.regular,textAlign:'center'}}>
                    <h2 style={{fontWeight:'inherit'}}>Features</h2>
                    <h4 style={{fontWeight:'inherit'}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
            </div>
            { isMobile? <FeatureVideo isMobile={isMobile} />:null}
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat( auto-fit, minmax(200px, 1fr)',
                gap:'1em'
            }}>
                <FeaturCard svgIcon={featureIcon} title="Lorem ipsum dolor sit amet." description="Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat."/>
                <FeaturCard svgIcon={featureIcon} title="Lorem ipsum dolor sit amet." description="Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat."/>
                <FeaturCard svgIcon={featureIcon} title="Lorem ipsum dolor sit amet." description="Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat."/>
            </div>
            { isMobile? null:<FeatureVideo isMobile={isMobile} />}
        </section>
    );
}
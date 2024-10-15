import theme from "../../theme";
import FeaturCard from "./FeatureCard";

import featureIcon from "../../assets/featureVector.svg"

export default function Feature(){
    return(
        <section>
            <div className="features-header" style={{fontWeight:theme.typography.fontWeight.regular,textAlign:'center'}}>
                    <h2 style={{fontWeight:'inherit'}}>Features</h2>
                    <h4 style={{fontWeight:'inherit'}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
            </div>

            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat( auto-fit, minmax(200px, 1fr)'
            }}>
                <FeaturCard svgIcon={featureIcon} title="Lorem ipsum dolor sit amet." description="Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat."/>
                <FeaturCard svgIcon={featureIcon} title="Lorem ipsum dolor sit amet." description="Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat."/>
                <FeaturCard svgIcon={featureIcon} title="Lorem ipsum dolor sit amet." description="Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat."/>
            </div>
        </section>
    );
}
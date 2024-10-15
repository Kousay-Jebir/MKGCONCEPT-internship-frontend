import theme from "../../theme";
import Box from "../utility/Box";
import OrderButton from "./OrderButton";
import Price from "./Price";
import './pricing.css'

export default function PricingCard({cardHeader,priceValue,pricingFeatures,invert=false}){
    const mappedFeatures = pricingFeatures.map((pricingFeature,index)=>{
        let margin=0;
        if(index!==pricingFeatures.length -1 ){
            margin = '2em'
        }
        return(
            <p key={index} style={{marginBottom:margin}}>{pricingFeature}</p>
        );

    })
    return(
        <Box styles={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center',
            border : `1px solid ${theme.palette.neutral.main}`,
            backgroundColor : invert? theme.palette.primary : theme.palette.secondary,
            color: invert? theme.palette.text.accent2:theme.palette.text.primary,
            borderRadius:'0.5em',
            padding:'2em 0',
            gap:'1.5em'

        }}>
            <section className="price-card">
                <h3>{cardHeader.title}</h3>
                <h6 style={{fontWeight:theme.typography.fontWeight.regular}}>{cardHeader.description}</h6>
            </section>
            <Price  value={priceValue}/>
            <section className="price-card">{mappedFeatures}</section>
            <OrderButton invert={invert}>Order Now</OrderButton>
        </Box>
    );
}
import theme from "../../theme";
import PricingCard from "./PricingCard";

export default function Pricing(){
    return(
        <section style={{
            padding:'0 20%',
            backgroundColor:theme.palette.background.dark
        }}>
            <div className="price-header" style={{fontWeight:theme.typography.fontWeight.regular,textAlign:'center'}}>
                <h2 style={{fontWeight:'inherit'}}>Pricing</h2>
                <h4 style={{fontWeight:'inherit'}}>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</h4>
            </div>

            <div style={{
                display:'grid',
                gap:'1em',
                gridTemplateColumns: 'repeat( auto-fit, minmax(200px, 1fr)',
                paddingBlock:'2.5em'
            }}>
                <PricingCard pricingFeatures={[
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ]} priceValue={0} cardHeader={{
        title:'FREE',
        description:'Organize across all apps by hand'
    }} />
                <PricingCard pricingFeatures={[
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ]} priceValue={10} cardHeader={{
        title:'STANDARD',
        description:'Organize across all apps by hand'
    }} invert/>
                <PricingCard  pricingFeatures={[
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ]}  priceValue={99} cardHeader={{
        title:'BUSINESS',
        description:'Organize across all apps by hand'
    }}/>
            </div>
        </section>
    )
}
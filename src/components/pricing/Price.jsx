import theme from "../../theme";
import "./pricing.css"

export default function Price({value,currency='$'}){

    return(
        <div style={{
            display:'flex',
            gap:'0.4em'
        }} className="price-tag">
            <h1>{value}</h1>
            <div>
                <h3>{currency}</h3>
                <h6 style={{fontWeight:theme.typography.fontWeight.regular}}>Per Month</h6>
            </div>
        </div>
    );
}
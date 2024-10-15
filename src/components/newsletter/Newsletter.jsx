import illustration from '../../assets/newsletter.svg'
import theme from '../../theme'
import NewsLetterForm from './NewsletterForm'
export default function Newsletter(){
    return(
        <div>
            <div>
                <div>
                    <h3>At your fingertips</h3>
                    <h2 style={{fontWeight:theme.typography.fontWeight.regular}}>Lorem, ipsum dolor.</h2>
                </div>
                <div>
                    <h3>Subscribe to our Newsletter</h3>
                    <p>Available exclusivery on Logoland</p>

                    <NewsLetterForm />
                </div>
            </div>
            <img src={illustration} alt="" />
        </div>
    )
}
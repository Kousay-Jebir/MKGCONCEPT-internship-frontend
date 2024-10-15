import Feature from "./components/FeatureCard"
import "./app.css"
import Button from "./components/utility/Button"
import OrderButton from "./components/pricing/OrderButton"
import ContactButton from "./components/contact/ContactButton"
import HeroButton from "./components/hero/HeroButton"
import Hero from "./components/hero/Hero"
import NewsLetterForm from "./components/newsletter/NewsletterForm"
import Newsletter from "./components/newsletter/Newsletter"
import ContactForm from "./components/contact/ContactForm"
import Price from "./components/pricing/Price"
import PricingCard from "./components/pricing/PricingCard"
import Pricing from "./components/pricing/Pricing"
import Contact from "./components/contact/Contact"
import ContactInformation from "./components/contact/ContactInformation"
function App() {

  return (
    <>
   {/*  <Feature title={'dzidiqdqizdijoIi'}/>
    <OrderButton>I'm button</OrderButton>
    <ContactButton>Send</ContactButton>
    <HeroButton>Try For Free</HeroButton>
    <Hero></Hero>
    <Newsletter/>
    <ContactForm></ContactForm> */}
    <Contact />
    <ContactInformation />
    </>
  )
}

export default App

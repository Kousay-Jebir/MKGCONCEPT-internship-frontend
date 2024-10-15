import Feature from "./components/FeatureCard"
import "./app.css"
import Button from "./components/utility/Button"
import OrderButton from "./components/pricing/OrderButton"
import ContactButton from "./components/contact/ContactButton"
import HeroButton from "./components/hero/HeroButton"
import Hero from "./components/hero/Hero"
import NewsLetterForm from "./components/newsletter/NewsletterForm"
import Newsletter from "./components/newsletter/Newsletter"
function App() {

  return (
    <>
    <Feature title={'dzidiqdqizdijoIi'}/>
    <OrderButton>I'm button</OrderButton>
    <ContactButton>Send</ContactButton>
    <HeroButton>Try For Free</HeroButton>
    <Hero></Hero>
    <Newsletter/>
    </>
  )
}

export default App

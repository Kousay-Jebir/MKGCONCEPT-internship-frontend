import Feature from "./components/FeatureCard"
import "./app.css"
import Button from "./components/utility/Button"
import OrderButton from "./components/pricing/OrderButton"
import ContactButton from "./components/contact/ContactButton"
import HeroButton from "./components/hero/HeroButton"
import Hero from "./components/hero/Hero"
function App() {

  return (
    <>
    <Feature title={'dzidiqdqizdijoIi'}/>
    <OrderButton>I'm button</OrderButton>
    <ContactButton>Send</ContactButton>
    <HeroButton>Try For Free</HeroButton>
    <Hero></Hero>
    </>
  )
}

export default App

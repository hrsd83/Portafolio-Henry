import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import Portafolio from "./components/Portafolio"
import Experiencia from "./components/Experiencia"
import Contacto from "./components/Contacto"

function App() {

  return(
    <div>
      <NavBar/>
      <Home/>
      <Portafolio/>
      <Experiencia/>
      <Contacto/>

      <SocialLinks/>

      
    </div>
  )
    
  
}

export default App

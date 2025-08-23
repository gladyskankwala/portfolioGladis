import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <div className="h-[200vh] bg-gray-900"></div>
      <Footer/>
    </>
  )
}

export default App

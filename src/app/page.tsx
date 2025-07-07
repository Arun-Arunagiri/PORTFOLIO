import Home from "@/Components/Home"
import Navbar from "@/Components/Navbar"
import About from "@/Components/About"
import Projects from "@/Components/Projects"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"

function page() {
  return (
    <div>
      <Home />
      <Navbar />
      <div id='about' className='backdrop-blur-fix py-6 md:mx-5'>
        <About />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default page
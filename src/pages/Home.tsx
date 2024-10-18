import Navbar from "../components/navbar/Navbar"
import { styles } from "../styles/styles"
import bg from "../styles/assets/background.svg"
import { HeroSection } from "../components/home/HeroSection"
export const Home = () => {
  return (
    <section className={styles.mainSectionContiner}>
      <div className="absolute inset-0 w-full h-full lg:bg- bg-cover bg-top bg-no-repeat " style={{backgroundImage: `url(${bg})`, backgroundPosition:'top', maxHeight: 'calc(100vw - 100px)'}}>
      <Navbar/>
       <HeroSection/>

        
      </div>
       
    </section>
  )
}
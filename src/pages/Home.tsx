import Navbar from "../components/navbar/Navbar"
import { styles } from "../styles/styles"

export const Home = () => {
  return (
    <section className={styles.mainSectionContiner}>
      <Navbar/>
        <div className={styles.headerStyle}>
            Home
        </div>
       
    </section>
  )
}
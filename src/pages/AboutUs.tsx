import { useEffect } from "react"
import { styles } from "../styles/styles"

export const AboutUs = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
  }
  useEffect(() => {
    handleLogout()
  }, [])
  return (
    <section className={styles.mainSectionContiner}>
        <h3 className={styles.headerStyle}>About US</h3>
    </section>
  )
}
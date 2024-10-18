import { styles } from "../../styles/styles"

export const HeroSection = () => {
    return (
        <section className={styles.heroContainter}>
            <div className={styles.headerContainer}>
                <div className="text-[16px] sm:text-[18px] md:text-[24px] lg:text-[32px] font-bold italic text-justify">
                    <p className="w-[80%] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    </p>
                    </div>
                <div className="text-[10px] sm:text-sm md:text-md lg:text-lg text-justify xs:p-20">
                    <p className="w-[80%]">
                    Nullam scelerisque sagittis enim mi; dapibus nam. Vitae aptent rhoncus donec adipiscing conubia velit
                    </p>
                    </div>
                <div className="place-self-start">
                    <button className={styles.buttonStyle2}>Enroll Now</button>
                </div>
            </div>
        </section>
    )
}
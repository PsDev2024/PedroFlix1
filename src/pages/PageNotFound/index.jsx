import styles from "./PageNotFound.module.css"
import error404 from "./error404.png"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function PageNotFound() {
    return (
        <>
        <Header />
        <section className={styles.container}>
            <h2>Page Not Found</h2>
            <img src={error404} alt="Logo Page Not Found" />
        </section>
        <Footer />
        </>
    );
}

export default PageNotFound
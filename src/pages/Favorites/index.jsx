import styles from "./Favorites.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import VideoList from "../../components/VideoList"
import { useFavoriteContext } from "../../context/favorites"

function Favorites() {

    const { favorite } = useFavoriteContext()

    return (
        <>
        <Header />
        <Container>
            <section className={styles.favorites}>
                <h2>My Favorites</h2>
                { <VideoList videos={favorite} emptyHeading="No Favorite Videos at the Moment!" />}
            </section>
        </Container>
        <Footer />
        </>
    )
}

export default Favorites
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import iconFavorite from "./favorite.png"
import iconUnFavorite from "./unfavorite.png"
import { useFavoriteContext } from "../../context/favorites"


function Card({ id }) {
    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icon = !isFavorite ? iconFavorite : iconUnFavorite

    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                alt="cover" className={styles.cover} />
            </Link>
            <figure className={styles.icon}>
                <img 
                src={icon} 
                alt="favicon"
                onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    );
}

export default Card
/* eslint-disable react-refresh/only-export-components */
import styles from "./Category.module.css"
import videos from "../../json/videos.json"

export const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia",
    "Musica"
]
  
export function filterCategory(id) {
    return videos.filter( video => video.category === categories[id] )
}
  
// eslint-disable-next-line react/prop-types
function Category({ category, children }) {
    return (
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                {children}
            </div>
        </section>
    )
}

export default Category

/* eslint-disable react/prop-types */
import styles from "./SearchVideoList.module.css"
import VideoList from "../VideoList"
import Loader from "../Loader"
import { useEffect, useState } from "react"

// filtrando videos por categoria ou titulo
function filterVideos(videos,searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.
    title.includes(searchText))
}

function Search({ videos }) {
    const [ searchText, setSearchText] = useState('')
    const foundVideos = filterVideos(videos, searchText)

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [])

    return (
        <>
            <section className={styles.container}>
                <input 
                    type="search"
                    placeholder="Search..."
                    value={searchText}
                    onChange={event => setSearchText(event.target.value)}
                />
                { 
                    loading ? <Loader /> :
                    <VideoList 
                        videos={foundVideos}
                        emptyHeading={`No videos about  "${searchText}"`}
                    />
                }
            </section>
        </>
    )
}

export default Search
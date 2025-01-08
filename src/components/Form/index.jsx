/* eslint-disable react/jsx-key */
import styles from "./Form.module.css"
import { categories } from "../Category"
import { useState } from "react"

function Form() {
    const [ url, setUrl ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ msgAlert, setMsgAlert  ] = useState('')

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.coom\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(!regex.test(url) || url.length < 43) {
            setMsgAlert('Error: Invalid Url')
            return false
        } else {
            return url.substring(32, 43) // ID do video
        }
    }

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)
        // validar url
        const urlVideo = valideUrl(url)
        if(urlVideo && category){
            // Salvar os dados
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem("videos", JSON.stringify([...videos, newVideo]))
            // limpar o form
            setUrl('')
            setCategory('')
        } else {
            setMsgAlert('Error: Invalid Url')
        }
        // validar category
        if(!category || category === '-') {
            setMsgAlert('Error: Select a Category!')
            return
        } else {
            setMsgAlert('')
        }
        // guardar  a url e category
        const newVideo = { url, category }
        setVideos([...videos, newVideo])
        localStorage.setItem("videos", JSON.stringify([...videos, newVideo]))
        // limpar o form
        setUrl('')
        setCategory('')
    }


    return (
        <>
            <section className={styles.container}>
                <h2>Register New Video</h2>
                <form onSubmit={onSave}>
                    <div>
                        <label>Video Url</label>
                        <input 
                            type="text"
                            placeholder="Enter Video URL"
                            required="required"
                            value={url}
                            onChange={ e => setUrl(e.target.value)}
                            minLength="43"
                            maxLength="43"
                        />                   
                    </div>
                    <div>
                        <label>Category</label>
                        <select
                            required="required"
                            value={category}
                            onChange={ e => setCategory(e.target.value)}
                        >
                            <option value="-">Select a Category</option>
                            { categories.map(item => {
                                return <option value={item}>{item}</option>
                            } ) }                            
                        </select>
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                    <div>
                        <section className={styles.errors}>
                            <h2>{ msgAlert }</h2>
                        </section>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form
import React from "react"
import { useHistory } from "react-router-dom"
import { useField } from '../hooks/index'

const CreateNew = (props) => {
    const {reset: resetContent, ...content} = useField('text')
    const {reset: resetAuthor, ...author} = useField('text')
    const {reset: resetInfo, ...info} = useField('text')
    

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0
        })
        history.push('/')
        props.setNotification(`a new anecdote ${content.value} created!`)
        setTimeout(() => props.setNotification(null), 10000)
    }

    const handleReset = () => { [resetInfo, resetContent, resetAuthor].forEach(a => a())}
    

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
            <input {...content} />
                </div>
                <div>
                    author
            <input {...author} />
                </div>
                <div>
                    url for more info
            <input {...info} />
                </div>
                <button type="submit">create</button>
                <button type="button" onClick={handleReset}>reset</button>
            </form>
        </div>
    )

}

export default CreateNew
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes
        .filter(a => a.content.includes(state.filter))
        .sort((a, b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(addVote(anecdote))

        dispatch(setNotification(`you voted '${anecdote.content}'`, 3))
    }
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AnecdoteList
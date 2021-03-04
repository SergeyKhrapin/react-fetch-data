import React, { useState, useEffect } from 'react'
import fetchData from './fetch/fetchData'

const firstLoadOptions = {
    usersQuantity: 6
}

const loadMoreOptions = {
    usersQuantity: 3
}

function App() {
    const [counter, setCounter] = useState(0)
    const [userData, setUserData] = useState([])

    function getAndProcessData(options) {
        fetchData(options).then(data => {
            setUserData(userData.concat(data))
        })
    }

    useEffect(() => getAndProcessData(firstLoadOptions), [])

    return (
        <>
            <div className="user-list">
                {/* <pre>{ Date.now() } <br/> { JSON.stringify(userData, null, 2) }</pre> */}
                {
                    userData.map(user => {
                        const { name: {title, first, last},
                                picture: {thumbnail} } = user
                        return (
                            <div className="user">
                                <img src={thumbnail} alt="" />
                                <span>{title} {first} {last}</span>
                            </div>
                        )
                    })
                }
                <button onClick={() => getAndProcessData(loadMoreOptions)}>Load more users</button>
            </div>
            <hr/>
            <div className="counter">
                <p>{ counter }</p>
                <button onClick={() => setCounter(counter + 1)}>Click on me if you want to change a state</button>
            </div>
        </>
    )
}

export default App

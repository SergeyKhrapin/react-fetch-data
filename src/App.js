import React, { useState, useEffect } from 'react'
import UserList from './users/UserList'
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
            <UserList userList={userData} />
            <button onClick={() => getAndProcessData(loadMoreOptions)}>Load more users</button>
            <hr/>
            <div className="counter">
                <p>{ counter }</p>
                <button onClick={() => setCounter(counter + 1)}>Click on me if you want to change a state</button>
            </div>
        </>
    )
}

export default App

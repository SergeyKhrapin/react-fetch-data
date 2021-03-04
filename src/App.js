import React, { useState, useEffect } from 'react'
import fetchData from './fetch/fetchData'

function App() {
    const [counter, setCounter] = useState(0)
    const [userData, setUserData] = useState({})

    function getAndProcessData() {
        fetchData().then(data => {
            setUserData({
                title: data[0].name.title,
                firstName: data[0].name.first,
                lastName: data[0].name.last,
                image: data[0].picture.thumbnail
            })
        })
    }

    useEffect(getAndProcessData, [])

    return (
        <>
            <div className="user">
                <pre>{ Date.now() } <br/> { JSON.stringify(userData, null, 2) }</pre>
                <img src={userData.image} alt="" />
                <span>{userData.title} {userData.firstName} {userData.lastName}</span>

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

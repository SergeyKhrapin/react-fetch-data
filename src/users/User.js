import React, { memo } from 'react'

function User({ user }) {
    const { name: {title, first, last},
            picture: {thumbnail} } = user

    return (
        <div className="user">
            <img src={thumbnail} alt="" />
            <span>{title} {first} {last} - {Date.now()}</span>
        </div>
    )
}

export default memo(User)

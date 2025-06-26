import React from 'react'

export default function Buttons({name='Button'}) {
    return (
        <button className='p-Buttonspace bg-button hover:bg-buttonHover rounded-full'>{name}</button>
    )
}

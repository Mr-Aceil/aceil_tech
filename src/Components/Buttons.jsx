import React from 'react'

export default function Buttons({name='Button', link='#'}) {
    return (
        <a href={link} target='_blank'>
        <button className='p-Buttonspace bg-button hover:bg-buttonHover rounded-full'>{name}</button>
        </a>
    )
}

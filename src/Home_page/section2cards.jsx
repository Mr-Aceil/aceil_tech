import React from 'react'

export default function section2cards({description='descriptffffion', icon='Icon', others}) {
    return (
        <div className={`grow-[1] p-section3 flex flex-col justify-center items-center gap-[10px] poppins ${others}`}>
            {icon}
            <p className='poppins text-center text-smallText text-textAsh1'>{description}</p>
        </div>
    )
}

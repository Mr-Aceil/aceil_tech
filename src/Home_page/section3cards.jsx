import React from 'react'
import Image from '../assets/projects/44DB.png'

export default function section3cards({image=Image, name='Project name', description='Write a description'}) {
    return (
        <div className='bg-borderColor rounded-cardround p-[5px] pb-[20px] w-full gap-[15px] grow-[1] flex flex-col items-center'>
            <img src={image} alt=""  className='rounded-cardround bg-imgbackup'/>

            <div className='flex flex-col gap-[5px] w-full'>
                <p className='text-mainTetx'>{name}</p>
                <p className='text-textAsh2'>{description}</p>
            </div>
        </div>
    )
}

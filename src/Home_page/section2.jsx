import React from 'react'
import Cards from './section2cards'

export default function section2() {
    const fast= <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24"><path fill="#fff" d="M11 15H6l7-14v8h5l-7 14z"/></svg>


    return (
        <section className='text-mainText outside flex-col'>
            <div className='outside inside flex-col start p-section3'>
                <h2 className='text-h2'>What would you like to build?</h2>
                <p className='poppins text-textAsh1 text-smallText'>Our expert designers are masters of their craft, meticulously crafting stunning and intuitive user interfaces that prioritize user experience above all else. Leveraging the power of Figma and a suite of other essential design tools, they bring your vision to life with pixel-perfect precision. Once these beautiful designs are finalized, our dedicated team of web and mobile app developers takes over, seamlessly transforming every intricate detail into high-quality, professional code. This meticulous hand-off ensures that the final product not only looks exceptional but also performs flawlessly across all platforms.</p>
            </div>

            <div className='inside start between noPadding section2 max-[480px]:flex-col'>
                <Cards icon={fast} description='Fast and reliable'/>
                <Cards icon={fast} description='User-centric designs' others='border-x-1 border-dashed border-borderColor max-[480px]:border-x-0 max-[480px]:border-y-1'/>
                <Cards icon={fast} description='Good communication skills'/>
            </div>
        </section>
    )
}

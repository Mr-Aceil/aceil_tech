import React from 'react'
import Image from '../../src/assets/Images/Gemini_Generated_Image_6bw4pl6bw4pl6bw4.png'


export default function section1() {
    const search= <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24"><path fill="#fff" d="M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10"/></svg>

    return (
        <section className='outside'>
            <div className='inside between section1 gap-[30px]'>
                <div className='flex gap-[20px] flex-col max-w-[800px] w-full text-white'>
                    <h1 className='text-h1 w-full'>Modern web design, built for tomorrow. We create engaging experiences that stand out.</h1>
                    <p className='poppins text-smallText text-textAsh1'>Your vision. Our expertise. Together, we create exceptional digital realities.</p>

                    <label className='flex justify-between items-center max-w-[500px] w-full gap-[10px]'>
                        <input type="text" placeholder='Search our projects'  className='poppins text-smallText border-[1px] w-full border-borderColor p-[10px] rounded-[10px] grow-[1] focus:outline-none focus:border-blue'/>
                        <button className='bg-borderColor p-[11px] rounded-full hover:bg-ashHover'>{search}</button>
                    </label>
                </div>
            
                <img src={Image} alt=""  className={`w-[400px] shadow-[20px_20px_0_#13121b] mr-[15px] rounded-[10px] max-[1150px]:w-[300px] max-[810px]:hidden`}/>
            </div>
        </section>
    ) 
}

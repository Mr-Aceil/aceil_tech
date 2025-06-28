import React from 'react'
import Cards from './section3cards'
import AviBank from '../assets/projects/Avibankk.png'
import Gropad from '../assets/projects/GRO.png'
import Tipper from '../assets/projects/tipper.png'
import Button from '../Components/Buttons'

export default function section3() {
    return (
        <section className='outside text-mainText flex-col'>
            <div className='inside outside flex flex-col inp3'>
                <h2 className='text-h2 text-center w-full'>We make our clients proud!</h2>
                <p className='text-smallText poppins text-textAsh1 w-full text-center'>The feedback is in, and our customers truly love the impact we've made for them. We're proud of the results!</p>
            </div>

            <div className='grid3 inside outside inp3'>
                <Cards name='44DB UI design' description='44db is a record label website that was redesigned from old-school to a modern web UI using simple UI design concepts'/>
                <Cards image={AviBank} name='Avi Bank UI design' description='AviBank is a micrifinance bank that was created to help ease bank transactions nation-wide across each 36 states of Nigeria'/>
                <Cards image={Gropad} name='Gropad' description='Gropad a freelance mobile platform for students to hunt jobs'/>
                <Cards image={Tipper} name='Tipper' description="As the name implies, its a webapp for a business admin to monitor the tips that are been given to employee's"/>
                <Cards image={Gropad} name='Go-rider' description="A transportation company built to make transportation of good's and services easier nation-wide in Nigeria. Go rider comes with so many intersting features to be brought to the market."/>
            </div>

            <div className='inside outside inp3'>
                <Button name='Tap to hire'/>
            </div>

            <div className='inside text-textAsh1 inp4'>
                <p className='text-smallText poppins text-center'>Bring your ideas lets make it a reality, we book a call with us lets start your design process.</p>
            </div>
        </section>
    )
}
import React from 'react'
import {Waterdrop2} from "../components/Waterdrop2"

export const Hero = () => {
    return (
        <section className='section-wrapper'>
            <div className="min-w-200px">
                <Waterdrop2>
                <h1 className='text-2xl text-yellow-500 font-bold'>Hi I&apos;m Jason<span>.</span></h1>
                   </Waterdrop2>
                   <Waterdrop2>
                    <h2 className='text-white'>I'm an h2 tag</h2>
                   </Waterdrop2>
                    </div>
        </section>
    )
}
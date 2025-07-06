import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='flex flex-col bg-[#282828] h-[15vh] md:h-[25vh] items-center justify-center space-y-3'>
            {/* <h1 className='text-white'>Footer</h1> */}
            <div className='flex justify-center space-x-5'>
                <Link href={'https://github.com/Arun-Arunagiri'}><img className='h-8' src="/images/gitlogo.png" alt="github" /></Link>
                <Link href={'mailto:sarunagiri.2022@gmail.com'}><img className='h-8' src="/images/mail.png" alt="gmail" /></Link>
                <Link href={'https://www.linkedin.com/in/arunagiri-sekar'}><img className='bg-white h-8 rounded-2xl' src="/images/linkedin.png" alt="linkedin" /></Link>
            </div>
            <p className='text-white'>Arunagiri@2025</p>
        </div>
    )
}

export default Footer
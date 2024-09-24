import React from 'react'

function SocialMediaIcons() {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a className='hover:opacity-50 transition duration-500 '
        href='https:www.linkedin.com'
        target='_blank'
        rel='noreferrer'>
            <img alt='linkedin icon ' src='../assets/linkedin.png'/>
        </a>
        <a className='hover:opacity-50 transition duration-500 '
        href='https:www.facebook.com'
        target='_blank'
        rel='noreferrer'>
            <img alt='linkedin icon ' src='../assets/facebook.png'/>
        </a>
        <a className='hover:opacity-50 transition duration-500 '
        href='https:www.twitter.com'
        target='_blank'
        rel='noreferrer'>
            <img alt='linkedin icon ' src='../assets/twitter.png'/>
        </a>
        <a className='hover:opacity-50 transition duration-500 '
        href='https:www.intagram.com'
        target='_blank'
        rel='noreferrer'>
            <img alt='linkedin icon ' src='../assets/instagram.png'/>
        </a>
    </div>
  )
}

export default SocialMediaIcons
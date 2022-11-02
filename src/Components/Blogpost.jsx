import React from 'react'
import hello from "../Images/Hi.JPG";

const Blogpost = () => {
  return (
    <div className='bg-background h-full'>
      <div className='flex flex-col item-center justify-center mx-auto text-2xl px-36 pt-6'>
        <p className='pb-2'>November 2nd, 2022 13:00</p>
        <div className='grid grid-cols-2'>
          <img src={hello}  className='object-fit rounded-lg shadow-lg' alt="hello"></img>
            <p className='flex items-center justify-center p-4 text-6xl'>Hi! 👋🏼 </p>
        </div>
            <p className='pt-4'>I've built this blog through npm-create-react-app and installed tailwind. I know that writing through a template like blogger or square-space would have made more sense and less time consuming but c'est la vie, let's give this ☆ space ☆ a chance.
            I'm currently sitting through my 4th Lockdown of the year with my dog. Here's a pic of him. I'm not sure if I should be creating a new component for each blog post or just add into the already existing component.</p>
            <p>Ever since being introduced to tailwind, I'd like to think we've become very good friends and I'd like to think I will develope the same, cordial friendship with <span className='font-blue'>JavaScript.</span></p>

      </div>
    </div>
  )
}

export default Blogpost

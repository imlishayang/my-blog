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
            <p className='py-6'>I've built this blog through npm-create-react-app and installed tailwind. I know that writing through a template like blogger or square-space would have made more sense and less time consuming but c'est la vie, let's give this ☆ space ☆ a chance.
            I'm not sure if I should be creating a new component for each blog post or just add more content into the already existing component. Will need to google this.</p>

      </div>
    </div>
  )
}

export default Blogpost

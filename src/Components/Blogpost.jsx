import React from 'react'
import hello from "../Images/Hi.JPG";
import favicon from "../Images/faviconreact.JPG";

const Blogpost = () => {
  return (
    <div className='bg-background h-full'>

      <div className='flex flex-col item-center justify-center mx-auto px-4 md:px-44 pt-6'>
        <p className='pb-2 md:text-xl'>November 2nd, 2022 16:41</p>
        <p className='md:py-4 text-xl md:text-2xl'> The last aspect I worked on today is making the website responsive. It's funny playing around with the different text sizes and colors. </p>
      </div>

      <div className='flex flex-col item-center justify-center mx-auto px-4 md:px-44 pt-6'>
        <p className='pb-2 md:text-xl'>November 2nd, 2022 14:50</p>
        <img src={favicon} alt="How to change favicon in React" width="600" className='flex object-center'/>
        <p className='py-4 text-xl md:text-2xl'> I used <a href="https://www.canva.com" target="_blank" rel="noopener noreferrer" className='text-blue hover:underline'>Canva</a> to create a customzied favicon(literally a yellow sqaure haha). All you have to do is delete and replace the favicon icon from the public folder. Thats it. I'm not sure why I thought this would be such a tedious change...(Youtube is your best friend!).</p>
      </div>

      <div className='flex flex-col item-center justify-center mx-auto px-4 md:px-44 pt-6'>
        <p className='pb-2 text-xl'>November 2nd, 2022 13:00</p>
        <div className='grid grid-cols-2'>
        <img src={hello}  className='object-fit rounded-lg shadow-lg' alt="hello"></img>
        <p className='flex items-center justify-center p-4 text-2xl md:text-6xl'>Hi! 👋🏼 </p>
        </div>
            <p className='py-4 text-xl md:text-2xl'>I've built this blog through npm-create-react-app and installed tailwind. I know that writing through a template like blogger or square-space would have made more sense and less time consuming but c'est la vie, let's give this ☆ space ☆ a chance.
            I'm not sure if I should be creating a new component for each blog post or just add more content into the already existing component. Will need to google this.</p>
      </div>
    </div>
  )
}

export default Blogpost

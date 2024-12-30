import React from 'react'

export default function AuthoreCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>

        <img
        className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500' src='/images/rija.png' alt='Author Image'/>
    <div>
      <h3 className='text-xl font-bold'>
        Rija Zeeshan
      </h3>
      <p className='text-slate-500'> Web Developer</p>
    </div>
      </div>
      <p className='mt-4 text-black leading-relaxed'>"I am Rija Zeeshan, a passionate and creative web developer specializing in crafting engaging and user-friendly interfaces. With a strong foundation in frontend technologies like TypeScript, HTML, CSS, JavaScript, and Next.js, I bring designs to life with precision and aesthetics. My expertise in Tailwind CSS ensures that every project is not only functional but also visually appealing. Driven by innovation and a love for problem-solving, I aim to create seamless digital experiences that leave a lasting impression."






</p>
      <div className='mt-4 flex space-x-3 '>
        <a href='www.linkedin.com/in/rija-zeeshan-43075a2b8

' className=' px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 '>Linkedin
</a>
<a href='#' className=' px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 '>GitHub
</a>
<a href='#' className=' px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 '>Facebook
</a>


      </div>
      
    </div>
  )
}

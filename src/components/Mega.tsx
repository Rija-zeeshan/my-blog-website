import React from 'react';
import Blogcard from './BlogCard';

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Exploring the World of AI",
      description: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines. AI enables machines to perform tasks that typically require human intelligence, such as recognizing speech, making decisions, translating languages.",
      date: "2024-12-20",
      image: "../images/slide1.jpeg", 
    },
    {
      id: "2",
      title: "Mastering the Art of Web Development",
      description: "Web development involves creating and maintaining websites. It includes designing the front end (what users see), developing the back end (server and database management), and ensuring websites are fast, secure, and user-friendly. It's the backbone of modern web applications.",
      date: "2024-12-20",
      image: "../images/slide2.jpg",  
    },
    {
      id: "3",
      title: "Staying Safe in the Digital World",
      description: "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access or attacks. It ensures digital safety by using tools and techniques like firewalls, encryption, and secure passwords.",
      date: "2024-12-20",
      image: "../images/slide3.png",  
    },
    {
      id: "4",
      title: "Unlocking the Power of Machine Learning",
      description: "Machine Learning is a branch of Artificial Intelligence where computers learn from data and improve their performance over time without being explicitly programmed. It powers applications like recommendation systems, image recognition, and predictive analytics.",
      date: "2024-12-20",
      image: "../images/slide4.png",  
    },
    {
      id: "5",
      title: "What is ChatGPT: Strategic Guide for Startups and Development Teams",
      description: "ChatGPT is an advanced AI language model developed by OpenAI. It can generate human-like text, answer questions, assist with writing, and engage in conversations.",
      date: "2024-12-20",
      image: "../images/slide5.jpeg",  // Corrected image path
    },
    {
      id: "6",
      title: "How Artificial Intelligence Will Transform Web Development in 2024",
      description: "In 2024, AI is poised to significantly transform web development by automating repetitive tasks, enhancing user experience, and enabling smarter applications.",
      date: "2024-12-20",
      image: "../images/slide6.jpg",  // Corrected image path
    },
  ];

  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
        Exploring the World of Artificial Intelligence and Technology
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className='blog-card'>
              <Blogcard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

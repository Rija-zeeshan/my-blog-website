"use client"
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';


const posts = [
    {
      id: '1',
      title: 'Exploring the World of AI',
       description:"Artificial Intelligence (AI) refers to the simulation of human intelligence in machines. AI enables machines to perform tasks that typically require human intelligence, such as recognizing speech, making decisions, translating languages, and visual perception. There are various subfields within AI, including machine learning, natural language processing, and computer vision. AI systems can analyze large amounts of data, learn from experience, and improve their performance over time, making them an invaluable tool in a wide range of industries, from healthcare to finance.",
      
      image:"../images/slide1.jpeg",
    },
    {
      id: '2',
      title: 'Mastering the Art of Web Development',
      description:'Web development involves creating and maintaining websites. It includes designing the front end (what users see), developing the back end (server and database management), and ensuring websites are fast, secure, and user-friendly. It’s the backbone of the online world',

      
      image:"../images/slide2.jpg"
    },
    {
      id: '3',
      title: 'Staying Safe in the Digital World',
      description:'Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access or attacks. It ensures digital safety by using tools and techniques like firewalls, encryption, and secure passwords, keeping personal and business information secure',

      
      image:"../images/slide3.png",
    },
    {
      id: '4',
      title: 'Unlocking the Power of Machine Learning',
      description:'Machine Learning is a branch of Artificial Intelligence where computers learn from data and improve their performance over time without being explicitly programmed. It powers applications like recommendation systems, image recognition, and predictive analytics',
      date:'2024-11-28',
      image:"../images/slide4.png",
    },
    {
      id: '5',
      title: 'What is ChatGPT: Strategic Guide for Startups and Development Teams',
      description:'ChatGPT is an advanced AI language model developed by OpenAI. It can generate human-like text, answer questions, assist with writing, and engage in conversations. Powered by deep learning, it’s designed to understand and respond to a wide range of topics with natural language processing',

      
      image:"../images/slide5.jpeg",
    },
    {
      id: '6',
      title: 'How Artificial Intelligence Will Transform Web Development in 2024?',
      description:'In 2024, AI is poised to significantly transform web development by automating repetitive tasks, enhancing user experience, and enabling smarter applications. AI-powered tools can help developers write cleaner code, generate designs, and optimize web performance. Chatbots and virtual assistants powered by AI will improve customer service on websites, while AI-driven personalization algorithms will offer customized content to users. Additionally, AI will streamline testing, security, and accessibility, allowing developers to focus more on innovation and less on manual tasks. The future of web development will be deeply intertwined with AI, making websites more intelligent and user-friendly.',
      
      image:"../images/slide6.jpg",
    },
  ];
export default function Post({params} : {params : {id: string}}) {
  const {id} = params;
  const post = posts.find((p) => p.id === id);

  if(!post){
    return(
      <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>
    );
  }

  const renderParagraphs = (description:string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4mtext-jutify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-blue-900 animate-color-change text-center'>{post.title}</h1>

      {post.image && (
        <img
        src={post.image}
        alt={post.title}
        className='w-full h-auto rounded-md mt-4'/>
      )}

      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id}/>
      <AuthorCard/>
    </div>
  )
}
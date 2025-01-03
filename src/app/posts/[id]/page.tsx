"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";

const posts = [
  {
    id: "1",
    title: "Exploring the World of AI",
    description: `Artificial Intelligence (AI) refers to the simulation of human intelligence in machines. 
      AI enables machines to perform tasks that typically require human intelligence, 
      such as recognizing speech, making decisions, and translating languages. AI is at the forefront 
      of technological advancements, influencing industries like healthcare, finance, and transportation. 
      Its applications range from chatbots and virtual assistants to autonomous vehicles.`,
    image: "/images/slide1.jpeg",
  },
  {
    id: "2",
    title: "Mastering the Art of Web Development",
    description: `Web development involves creating and maintaining websites. 
      It includes designing the front end (what users see) and developing the back end (server and database management). 
      Web development ensures websites are fast, secure, and user-friendly. 
      It's the backbone of the internet, enabling businesses to establish an online presence and interact with users effectively.`,
    image: "/images/slide2.jpg",
  },
  {
    id: "3",
    title: "Staying Safe in the Digital World",
    description: `Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access or attacks. 
      In today's digital age, cybersecurity ensures digital safety by using tools and techniques like firewalls, encryption, 
      and secure passwords. It is essential for personal and business information security, safeguarding sensitive data from cyber threats.`,
    image: "/images/slide3.png",
  },
  {
    id: "4",
    title: "Unlocking the Power of Machine Learning",
    description: `Machine Learning is a branch of Artificial Intelligence where computers learn from data and improve their performance 
      over time without being explicitly programmed. It powers applications like recommendation systems, image recognition, and predictive 
      analytics. Machine Learning is transforming industries by enabling more intelligent and data-driven decision-making.`,
    image: "/images/slide4.png",
  },
  {
    id: "5",
    title: "What is ChatGPT: Strategic Guide for Startups and Development Teams",
    description: `ChatGPT is an advanced AI language model developed by OpenAI. It can generate human-like text, answer questions, 
      assist with writing, and engage in conversations. Startups and development teams can leverage ChatGPT for customer support, 
      content generation, and more. It represents a significant step forward in natural language processing.`,
    image: "/images/slide5.jpeg",
  },
  {
    id: "6",
    title: "How Artificial Intelligence Will Transform Web Development in 2024",
    description: `In 2024, AI is poised to significantly transform web development by automating repetitive tasks, 
      enhancing user experience, and enabling smarter applications. AI-powered tools will make development faster and more efficient, 
      paving the way for more dynamic and personalized web solutions.`,
    image: "/images/slide6.jpg",
  },
];

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h1 className="text-2xl text-center mt-10">Post Not Found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={450}
        className="rounded-lg mb-6 object-cover"
      />
      <p className="text-lg leading-relaxed text-gray-700">{post.description}</p>
      <AuthorCard />
      <CommentSection postId={post.id} />
    </div>
  );
}

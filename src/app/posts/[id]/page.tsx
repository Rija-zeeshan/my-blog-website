"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import { useParams } from "next/navigation"; // Using useParams for dynamic routes in the app directory

const posts = [
  {
    id: "1",
    title: "Exploring the World of AI",
    description:
      "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines...",
    image: "/images/slide1.jpeg",
  },
  {
    id: "2",
    title: "Mastering the Art of Web Development",
    description:
      "Web development involves creating and maintaining websites...",
    image: "/images/slide2.jpg",
  },
  {
    id: "3",
    title: "Staying Safe in the Digital World",
    description:
      "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access or attacks...",
    image: "/images/slide3.png",
  },
  // Other posts...
];

export default function Post() {
  const { id } = useParams(); // Get the post id using useParams() in the /app directory

  // State to check if the component is mounted (client-side)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true once the component is mounted on the client side
  }, []);

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>;
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-blue-900 animate-color-change text-center">
        {post.title}
      </h1>

      {/* Render post image if it exists and mounted is true */}
      {mounted && post.image && (
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
          width={800}
          height={450}
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {/* Render description paragraphs */}
        {renderParagraphs(post.description)}
      </div>

      {/* Render CommentSection and AuthorCard components */}
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}

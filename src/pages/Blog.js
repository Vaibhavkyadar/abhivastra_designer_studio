// src/pages/Blog.js
import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "5 Fashion Tips for Every Occasion",
      excerpt: "Discover essential fashion tips that will elevate your style for any occasion.",
      date: "March 1, 2023",
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Top 10 Fashion Trends of 2023",
      excerpt: "Stay ahead of the curve with the latest fashion trends that are taking the world by storm.",
      date: "February 15, 2023",
      image: "/path/to/image2.jpg",
    },
    {
      id: 3,
      title: "How to Style Ethnic Wear",
      excerpt: "Learn how to style ethnic wear for a modern twist on traditional outfits.",
      date: "January 10, 2023",
      image: "/path/to/image3.jpg",
    },
    // Add more posts as needed
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.excerpt}</p>
            <button onClick={() => alert(`Read more about ${post.title}`)}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
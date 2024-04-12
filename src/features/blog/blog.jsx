import React, { useState } from "react";
import "./blog.css";
import Article_item from "./article-item/article-item";
import blogsData from '../../data/blogs.json';

const Blog = () => {

  const [selectedTag, setSelectedTag] = useState(null);

  const filterArticlesByTag = (articles, tag) => {
    if (!tag) return articles; // If no tag selected, return all articles
    return articles.filter(article => article.tags.includes(tag));
  };


  return (
    <div className="blog-page">

      <span className="blog-heading heading1">blogs

      
      
      </span>

       {/* Filter by tag */}
       <div className="tag-filter">
        <span>Filter by Tag:</span>
        <select onChange={(e) => setSelectedTag(e.target.value)}>
          <option value="">All</option>
          {/* Assuming all available tags are known */}
          <option value="AI">AI</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Technology">Technology</option>
          {/* Add more options for other tags */}
        </select>
      </div>
       
      
      <div className="list-article-container">
 

        {/* Render filtered articles */}
        {filterArticlesByTag(blogsData, selectedTag).map((blog) => (
          <Article_item
            key={blog.id}
            id={blog.id}
            title={blog.title}
            time_to_read={blog.time_to_read}
            img={blog.img}
          />
        ))}

        {
          blogsData.length == 0 ? <h1 className="list-blog-error">nothing posted yet</h1> : <></>
        }

      </div>





    </div>
  );
};

export default Blog;

const articles = [
    {
        title: 'React Hooks Guide',

        content: 'A comprehensive guide to using React Hooks.',
        author: 'John Doe',

      },
    {
        title: 'React Hooks Guide',
        content: 'A comprehensive guide to using React Hooks.',
        author: 'John Doe'
      },
    {
      title: 'React Hooks Guide',
      content: 'A comprehensive guide to using React Hooks.',
      author: 'John Doe'
    },
    {
      title: 'Building Modern Web Apps with React',
      content: 'Learn how to build modern web applications with React.',
      author: 'Jane Smith'
    },
    {
        title: 'Building Modern Web Apps with React',
        content: 'Learn how to build modern web applications with React.',
        author: 'Jane Smith'
      },
    // Add more articles as needed
  ];
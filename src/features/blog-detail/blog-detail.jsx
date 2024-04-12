import React from 'react'
import './blog-detail.css'
import { useParams } from 'react-router-dom';
import blogsData from '../../data/blogs.json';

const Blog_detail = () => {

    const { id } = useParams();
    const blog = blogsData.find(blog => blog.id === parseInt(id));
  
  return (
    <div className='blog-detail-page-container'>


    <div className='blog-detail-page margin-1'> 
        <div className="blog-detail-thumbnail">

          <img src={blog.img} alt="" srcset="" />

        </div>
        <div className="blog-detail-title">
        {blog.title}

        </div>
        <div className="date-publish">
        { (blog.time_to_read)} read .
        <div className='mr-2'></div> {formate_date(blog.date_published)}

        </div>

        <div className="blog-detail-text">
        {blog.content} </div>


    </div>
    </div>

  )
}

export default Blog_detail


function formate_date(params) {
    var datePublished = new Date(params);
var formattedDate = datePublished.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});
    return  formattedDate;
}
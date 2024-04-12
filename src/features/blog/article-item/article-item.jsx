import React from 'react'
import "./article-item.css"
import { Link } from 'react-router-dom'

const Article_item = ({ id, title, img , time_to_read, }) => {
  return (
     <div className="list-article-item">

    <div className="article-thmbnail"><img src={img} alt="thubnail"   /></div>
    <Link to={`/port3/blog/${id}`} className="article-link">

    <div className="article-title">{title}</div>
    </Link>

    <div className="profile">
      <div className='name-img'>
      <img src={img} className="profile-img" alt= ""/>
        <span className="profile-name">{"sarvottam"}</span>
       

      </div>
         <span className="time_to_read">{time_to_read} read</span>

      </div>

  </div> 
  )
}

export default Article_item
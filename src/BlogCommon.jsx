import React from 'react'

const BlogCommon = (props) => {
return (
<>

    <div className="card">
        <a className="card-img" href="/blog"><img className="card-img-top" src={props.img} alt={props.alt} /></a>
        <div className="card-body">
            <h6><span className="icon icon-calendar"></span> {props.date}</h6>
            <h4><a href="/blog">{props.title}</a></h4>
            <p>{props.detail}</p>
            <a href="/blog" className="more">View More <img src={props.arrow} alt="View More" /></a>
        </div>
    </div>

</>
)
}

export default BlogCommon;
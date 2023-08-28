import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card my-3" >
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
        {source}
      </span>
      <img src={imageUrl ? imageUrl : "https://feeds.abplive.com/onecms/images/uploaded-images/2023/07/16/e3d7e8182b2ffe3163d72ce9fe0e9fa61689508260782324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm  btn-dark">Read More</a>
      </div>
    </div>
  )

}

export default NewsItem
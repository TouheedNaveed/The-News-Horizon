import React from 'react'

const NewsItem =(props)=> {

        let { title, description, imgurl, newsUrl, publishedAt, author, source } = props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded bg-danger z-1" style={{left:"90%"}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={!imgurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RKDWOFbkjawcN_8yfUcBEV30lg4MHYSM1g&s" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{!title?"Unknown":title}</h5>
                        <p className="card-text"> {description} </p>
                        <p style={{ color: 'grey', fontSize: "10px", fontWeight: 'bold' }}>By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem

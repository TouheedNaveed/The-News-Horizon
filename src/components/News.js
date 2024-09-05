import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        document.title = !document.title ? "Unknown" : `The News Horizon - ${capitalizeFirstLetter(props.category)}`;
        updateNews();
        //eslint-disable-next-line
    }, []);

    const updateNews = async () => {
        const { pageSize, country, category, apikey } = props;
        setLoading(true);
        try {
            props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
            let data = await fetch(url);
            props.setProgress(40);
            let parsedData = await data.json();
            props.setProgress(70);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error("Failed to fetch news articles:", error);
            setArticles([]);
            setLoading(false);
        }
    };

    const fetchMoreData = async () => {
        const { pageSize, country, category, apikey } = props;

        // Check if there are more articles to fetch
        if (articles.length < totalResults) {
            setPage(page + 1);
            setLoading(true);
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page + 1}&pageSize=${pageSize}`;
                let data = await fetch(url);
                let parsedData = await data.json();
                setArticles(articles.concat(parsedData.articles));
                setTotalResults(parsedData.totalResults);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch news articles:", error);
                setArticles([]);
                setLoading(false);
            }
        } else {
            setLoading(false); // No more articles to fetch
        }
    };

    return (
        <>
            <div className='my-5'>
                <h2 id='heading' style={{ textAlign: 'center', color: 'black', marginTop: "90px" }}>
                    The News Horizon - Top {capitalizeFirstLetter(props.category)} Headlines
                </h2>
            </div>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults} // Check if there are more articles to load
                loader={<Spinner />}>
                <div className="container">
                    <div className="row my-5 row-gap-4">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.defaultProps = {
    category: 'general',
    pageSize: 6,
    country: 'nz',
    apikey: "81e494b7891949acafde00011a3f9160"
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string,
};

export default News;

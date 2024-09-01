import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "general",
        apikey: "5cc1612c09724249a36de63ce869d1fa"
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apikey: PropTypes.string,
    };

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
        document.title = `The News Horizon - ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    async componentDidMount() {
        this.updateNews();
    }

    updateNews = async () => {
        const { pageSize, country, category, apikey} = this.props;
        const { page } = this.state;
        this.setState({ loading: true });
        try {
            this.props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
            let data = await fetch(url);
            this.props.setProgress(40);
            let parsedData = await data.json();
            this.props.setProgress(70);
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            });
            this.props.setProgress(100);
        } catch (error) {
            console.error("Failed to fetch news articles:", error);
            this.setState({ articles: [], loading: false });
        }
    }

    fetchMoreData = async () => {
        const { pageSize, country, category, apikey } = this.props;
        const { page } = this.state;
        this.setState({ page: page + 1, loading: true });
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page + 1}&pageSize=${pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading: false
            });
        } catch (error) {
            console.error("Failed to fetch news articles:", error);
            this.setState({ articles: [], loading: false });
        }
    };

    render() {
        const { articles, loading, totalResults } = this.state;

        return (
            <>
                <div className='my-5'>
                    <h2 id='heading' style={{ textAlign: 'center', color: 'black' }}>The News Horizon - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                </div>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={this.fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row my-5 row-gap-4">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} /></div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;

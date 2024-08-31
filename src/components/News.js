import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category:"general",
        apikey:"93da10ad8cd84c85b61772ad49dce9d9"
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apikey: PropTypes.string,
    };
    capitalizeFirstLetter=(string) =>{
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
        document.title=`The News Horizon - ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    async componentDidMount() {
        this.updateNews();
    }

    updateNews = async () => {
        const { pageSize, country,category,apikey } = this.props;
        const { page } = this.state;
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ 
                articles: parsedData.articles, 
                totalResults: parsedData.totalResults, 
                loading: false 
            });
        } catch (error) {
            console.error("Failed to fetch news articles:", error);
            this.setState({ articles: [], loading: false });
        }
    }

    prvClick = async () => {
        this.setState({ page: this.state.page - 1 }, this.updateNews);
    }

    nxtClick = async () => {
        this.setState({ page: this.state.page + 1 }, this.updateNews);
    }

    render() {
        const { articles, loading, page, totalResults } = this.state;
        const { pageSize } = this.props;

        return (
            <div className='container my-3'>
                <h2 id='heading' style={{ textAlign: 'center', color: 'black' }}>The News Horizon - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {loading && <Spinner />}
                <div className="row my-5 row-gap-4">
                    {!loading && articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} /></div>
                    })}
                </div>
                <div className="container d-flex justify-content-end gap-2">
                    <button disabled={page <= 1} onClick={this.prvClick} type="button" className="btn btn-dark">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button disabled={page >= Math.ceil(totalResults / pageSize)} onClick={this.nxtClick} type="button" className="btn btn-dark">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default News;

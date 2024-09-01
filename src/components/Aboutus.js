import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Aboutus extends Component {
    componentDidMount() {
        this.props.setProgress(10);
        setTimeout(() => {
            this.props.setProgress(100);
        }, 200);
    }
    render() {
        return (
            <div className='container my-5'>
                <div className='p-4 bg-dark text-light rounded shadow'>
                    <h4 className='text-center mb-4'>About Us</h4>
                    <p className='lead'>
                        Welcome to <strong>The News Horizon</strong>, your trusted source for the latest and most important news from around the world. We believe in the power of information and strive to bring you the news that matters most, with integrity, accuracy, and a commitment to unbiased reporting.
                    </p>
                    <p className='lead'>
                        At <strong>The News Horizon</strong>, we cover a wide range of topics, including <Link to="/sports">sports</Link>, <Link to="/business">business</Link>, <Link to="/technology">technology</Link>, <Link to="/science">science</Link>, <Link to="/health">health</Link>, and <Link to="/entertainment">entertainment</Link>. Our goal is to provide our readers with a comprehensive view of the world, helping you stay informed about the issues that impact your life and the global community.
                    </p>
                    <p className='lead'>
                        Our dedicated team of journalists and editors work tirelessly to deliver timely and relevant news, cutting through the noise to bring you the facts. We understand the importance of trust in journalism, and we are committed to upholding the highest standards of ethical reporting.
                    </p>
                    <p className='lead'>
                        Whether you're looking for in-depth analysis, breaking news, or just want to stay updated on the latest trends, <strong>The News Horizon</strong> is here to provide you with the insights and information you need.
                    </p>
                    <p className='lead'>
                        Thank you for choosing <strong>The News Horizon</strong> as your news source. Together, we explore the horizon of news, delivering stories that shape our world.
                    </p>
                </div>
            </div>
        );
    }
}

export default Aboutus;

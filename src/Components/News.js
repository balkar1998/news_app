import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page: 1,
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=16d6583be1994da7a19c6b80613b4bf7&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let data = await(await fetch(url)).json()
    console.log(data)
    this.setState({
        articles : data.articles,
        totalCount : data.totalResults,
        loading: false,
      })
  }

  handleNextClick = async () => {
    if( this.state.page+1 <= Math.ceil(this.state.totalCount/this.props.pageSize) )
    {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=16d6583be1994da7a19c6b80613b4bf7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let data = await(await fetch(url)).json()
    this.setState({
      page: this.state.page + 1,
      articles: data.articles,
      loading: false,
    })
    }
  }

  handlePreClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=16d6583be1994da7a19c6b80613b4bf7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let data = await(await fetch(url)).json()
    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false,
    })
  }

  render() {
    return (
      <>
      <div className="container my-3">
        <h2 className='text-center'>News - Top headlines</h2>
        { this.state.loading && <Spinner /> }
        <div className="row">
          {!this.state.loading && this.state.articles.map((e) =>{
            return(
              <div className="col-md-4" key={e.url} >
                <NewsItem title={e.title?e.title.slice(0,40):''} description={e.description?e.description.slice(0,80):''} imageUrl={e.urlToImage} newsUrl={e.url} />
              </div>
            )
          })}
        </div>
      </div>
      <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page==1} className='btn btn-dark' onClick={this.handlePreClick}> &larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalCount/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr; </button>
      </div>
      </>
    );
  }
}
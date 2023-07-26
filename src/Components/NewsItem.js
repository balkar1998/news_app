import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className='my-3'>
        <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read more</a>
        </div>
      </div>
      </div>
    )
  }
}

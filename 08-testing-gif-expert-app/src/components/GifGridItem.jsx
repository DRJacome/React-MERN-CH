import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="carta animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}


GifGridItem.propTypes = {
  title: PropTypes.string.isRequired
};
GifGridItem.propTypes = {
  url: PropTypes.string.isRequired
}

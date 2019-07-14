import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(img/${image}.jpg)`,
    ////////// IMAGE URL HERE ///////////////////
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}

export default Slide
import React from 'react'

const LeftArrow = ({ prevSlide, coolButtons }) => {
  return (
    <div className={coolButtons ? 'left-arrow cool-buttons' : 'left-arrow'} onClick={prevSlide}>
    {/**HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII */}
      <img src="img/slider-left-arrow.svg" />
    </div>
  )
}

export default LeftArrow

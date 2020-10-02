import React from 'react';
import { useSwipeable } from 'react-swipeable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function SlideShow({
	imgPath,
	images,
	activeIdx,
	setActiveIdx,
	showSlideShow,
	slideShowToggle,
	maxIdx,
	backBtnHandler,
	nextBtnHandler
}){

	const swipeHandlers = useSwipeable({onSwiped: (eventData) => {
		const direction = eventData.dir
		if(direction === 'Right'){
			backBtnHandler( activeIdx - 1)
		}
		if(direction === 'Left'){
			nextBtnHandler( activeIdx + 1)
		}
	}})

	return(
		<div className={`slideshow-app ${slideShowToggle ? 'slideshowtoggled' : ''}`}>
			<div id="closeBtn" onClick={() => showSlideShow(false)}>
				<FontAwesomeIcon icon={faArrowLeft}/>
			</div>

			<div className="slider-wrapper">
				<div className="slider-wrapper__btn slider-wrapper__btn--backbtn" onClick={() => backBtnHandler(activeIdx - 1)}>
					<FontAwesomeIcon icon={faChevronLeft}/>
				</div>
				<div className="slider" {...swipeHandlers}>
					<div className="slider__image">
						<img src={`${imgPath}${images[activeIdx]}`} alt=""/>
					</div>
				</div>
				<div className="slider-wrapper__btn slider-wrapper__btn--nextbtn" onClick={() => nextBtnHandler(activeIdx + 1)}>
					<FontAwesomeIcon icon={faChevronRight}/>
				</div>
			</div>

			<div className="pagination">
				{images.map((img,idx) => (
					<div 
						className={`pagination__dot ${idx === activeIdx && 'pagination__dot--active'}`}
						onClick={() => setActiveIdx(idx)}
						key={idx}
					></div>
				))}
			</div>


		</div>
	)
}

export default SlideShow
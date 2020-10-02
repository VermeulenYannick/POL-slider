import React, {useState, useEffect} from 'react';
import PictureList from './components/PictureList'
import SlideShow from './components/SlideShow'
import './App.css';

function App() {
	const imgPath = '/img/';
	const images = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg'];
	const maxIdx = images.length - 1;
	const sliderSpeed = 2000;

	const [activeIdx, setActiveIdx] = useState(0);
	const [slideShowToggle, showSlideShow] = useState(false)

	const backBtnHandler = (idx) => {
		if(idx < 0){
			setActiveIdx(maxIdx)
		}else{
			setActiveIdx(idx)
		}
		
	}
	
	const nextBtnHandler = (idx) => {
		if(idx > maxIdx){
			setActiveIdx(0)
		}else{
			setActiveIdx(idx)
		}
	}

	useEffect(() => {
		if(slideShowToggle){
			const interval = setInterval(() => {
				setActiveIdx(activeIdx => activeIdx <  maxIdx ? activeIdx + 1 : 0)
			}, sliderSpeed);
			return () => clearInterval(interval);
		}
	});

  return (
	<div className="App">
		<div className="pictureApp">
			<PictureList
				imgPath={imgPath}
				images={images}
				setActiveIdx={setActiveIdx}
				showSlideShow={showSlideShow}
				maxIdx={maxIdx}
				slideShowToggle={slideShowToggle}
			/>
			<SlideShow
				imgPath={imgPath}
				images={images}
				activeIdx={activeIdx}
				setActiveIdx={setActiveIdx}
				showSlideShow={showSlideShow}
				slideShowToggle={slideShowToggle}
				backBtnHandler={backBtnHandler}
				nextBtnHandler={nextBtnHandler}
			/>
		</div>
	</div>
  );
}

export default App;

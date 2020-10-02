import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function PictureList({
    imgPath,
    images,
    setActiveIdx,
    showSlideShow,
    slideShowToggle,
}){

    const handleImageClick = (idx) => {
        setActiveIdx(idx)
        showSlideShow(true)
    }
   
    return(
        <div className={`picture-list-app ${slideShowToggle ? 'slideshowtoggled' : ''}`}>
            <Scrollbars style={{ width: '100%', height: '100vh' }}>
            <div className="picture-list">
                {images.map((img,idx) => (
                    <div className="picture-list__image" key={idx} >   
                        <img 
                            src={`${imgPath}${img}`}
                            onClick={()=> handleImageClick(idx)}
                            alt=""
                        />
                    </div>
                ))}
            </div>
            </Scrollbars>
        </div>
    )
}

export default PictureList;
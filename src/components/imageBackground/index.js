import React from 'react'
import './styles.css'
import image from '../../assets/images/image1.jpg'

function ImageBackground() {
    return (
        <div className='imageBackgroundWrapper'>
            <img src={image} className="image" />
            <div className='overlay'>
                <div className='paraghraphWrapper'>
                    <div className='paragraphContainer'>
                        <div className='paragraphTitle'>
                            <p>Title</p>
                        </div>
                        <div className='paragraph'>
                            <p>Lorem ipsum dollor sit amet, cinscteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className='cf'>
                        <p>CF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageBackground
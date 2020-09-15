import React from 'react';
import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div className="homepage">
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>
                        <h1 className="title">HATS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>
                        <h1 className="title">JACKETS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>
                        <h1 className="title">HATS</h1>
                        <span className='subtitle'>SNEAKERS</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>
                        <h1 className="title">WOMEN</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>
                        <h1 className="title">MEN</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default HomePage;

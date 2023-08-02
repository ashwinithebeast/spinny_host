import React from 'react';
import "./Header.css"
function Header() {
    return (
        <div className="top-header">
            <div className="main-container">
                <div className="main-heading">
                    <div className='first-heading'>
                        <p>Virtual</p>
                        <p>Cloud Servers</p>
                    </div>
                    <div className='second-heading'>
                        <p>  <i class="fi fi-ss-check-circle"></i> Immediate scalability</p>
                        <p>  <i class="fi fi-ss-check-circle"></i>  High performance</p>
                        <p>  <i class="fi fi-ss-check-circle"></i> Fast deployment</p>
                    </div>
                    <div className='third-heading'>
                        <div className='main-button'>
                            <div className='first-button' >Get Prices</div>
                            <div className='second-button'> Learn More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
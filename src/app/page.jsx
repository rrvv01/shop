import React from 'react';
import './css/page.css';
import Footer from './Footer/Footer'

export default function Home() {
    return (
        <div>
            <div className='top w-full'>
                <img className="banner w-full" src="image/logo.jpg" alt="logo" />
                {/* <TopText /> */}
            </div>
            <Footer />
        </div>
    );

}


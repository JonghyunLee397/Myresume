import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <div>
            <div className="h2">
            <ReactTypingEffect speed="4s" text="JonghyunLee's Resume"/> 
            </div>
            <div className="headerbody">
            <Link to="/home" className="item">Home</Link>
            <Link to="/home" className="item">H</Link>
            <Link to="/home" className="item">Home</Link>
            </div>
        </div>
    )
}

export default Header
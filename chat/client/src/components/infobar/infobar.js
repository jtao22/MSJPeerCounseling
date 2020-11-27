import React from 'react';
import './infobar.css';
import closeIcon from '../../icons/closeIcon.png';
import activeIcon from '../../icons/activeIcon.png';

const InfoBar = ({room}) => (
    <div className = "infoBar">
        <div className = "leftInnerContainer">
            <img className = "activeIcon" src = {activeIcon} alt = "active"/>
            <h3>{room}</h3>
        </div>
        <div className = "rightInnerContainer">
            <a href = "/"><img src={closeIcon} alt = "close" /></a>
        </div>
    </div>
) 
export default InfoBar;

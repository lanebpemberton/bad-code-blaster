import React from 'react';
import backButton from '../styles/images/interface/back_button.png'

const backButtonStyles = {
    backgroundImage: `url("${backButton}")`,
    backgroundSize: '100% 100%',
    height: 100,
    width: 100,
    flexGrow: 0
}

const BackButton = ({ onClick, hide, style = {} }) => (
    <div className={hide ? "hide" : ""} onClick={onClick} style={{
        ...backButtonStyles,
        ...style
    }}></div>
)

export default BackButton;
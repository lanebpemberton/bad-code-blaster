import React from 'react';
import forwardButton from '../styles/images/interface/forward_button.png'

const nextButtonStyles = {
    backgroundImage: `url("${forwardButton}")`,
    backgroundSize: '100% 100%',
    height: 100,
    width: 100,
    flexGrow: 0
}

const NextButton = ({ hide, onClick, style }) => (
    <div className={hide ? "hide" : ""} onClick={onClick} style={{
        ...nextButtonStyles,
        ...style
    }}></div>
)

export default NextButton;
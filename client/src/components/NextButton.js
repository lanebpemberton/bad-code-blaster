import React from 'react';
import forwardButton from '../styles/images/interface/forward_button.png'

const nextButtonStyles = {
    backgroundImage: `url("${forwardButton}")`,
    backgroundSize: '100% 100%',
    height: 100,
    width: 100,
    flexGrow: 0
}

const NextButton = ({ onClick }) => (
    <div onClick={onClick} style={nextButtonStyles}></div>
)

export default NextButton;
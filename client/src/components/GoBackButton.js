import React from 'react';
import goBackButton from '../styles/images/interface/back button hex match.png'
import { useHistory } from 'react-router-dom'

const goBackButtonStyles = {
    backgroundImage: `url("${goBackButton}")`,
    backgroundSize: '100% 100%',
    flexGrow: 0
}

const GoBackButton = ({ height = 50, width = 50, style }) => {
    const history = useHistory()

    const onClick = () => {
        history.goBack()
    }

    return (
        <div onClick={onClick} style={{
            ...goBackButtonStyles,
            height,
            width,
            ...style
        }}></div>
    )
}

export default GoBackButton;
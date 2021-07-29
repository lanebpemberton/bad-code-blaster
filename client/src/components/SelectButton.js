import React from 'react';
import selectImg from "../styles/images/interface/select_button.png";

const selectButtonStyles = {
    backgroundImage: `url("${selectImg}")`,
    backgroundSize: '100% 100%',
    flexGrow: 0
}

const SelectButton = ({ onClick, height = 75, width = 75, style = {} }) => {
    return (
        <div onClick={onClick} style={{
            ...selectButtonStyles,
            height,
            width,
            ...style
        }}></div>
    )
}

export default SelectButton;

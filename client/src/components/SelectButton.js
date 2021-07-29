import React from 'react';
import selectImg from "../styles/images/interface/select_button.png";

const selectButtonStyles = {
    backgroundImage: `url("${selectImg}")`,
    backgroundSize: '100% 100%',
    height: 50,
    width: 50,
    flexGrow: 0
}

const SelectButton = ({ onClick, height = 50, width = 50 }) => {
    return (
        <div onClick={onClick} style={{
            ...selectButtonStyles,
            height,
            width
        }}></div>
    )
}

export default SelectButton;

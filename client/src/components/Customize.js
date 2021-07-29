import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import shipRelationships from "../game/ShipViews";
import NextButton from './NextButton';
import BackButton from './BackButton';
import GoBackButton from './GoBackButton';
import SelectButton from './SelectButton';

const Customize = () => {
    const history = useHistory();
    const [currentShipIndex, setCurrentShipIndex] = useState(0)
    const [shipView, setShipView] = useState(shipRelationships[0]);
    
    const handleShipChange = useCallback((value) => {
        setCurrentShipIndex(value)
        setShipView(shipRelationships[value])
    }, [setCurrentShipIndex, setShipView])

    const handleShipSelect = useCallback(() => {
        localStorage.setItem('currentShipIndex', currentShipIndex);
    }, [currentShipIndex])

    return (
        <div className="default background">
            <div className="default border">
                <div className="row" style={{ alignItems: 'center', justifyContent: 'space-evenly', height: '100%' }}>
                    {currentShipIndex > 0 && (
                        <BackButton onClick={() => handleShipChange(currentShipIndex - 1)} />
                    )}
                    <div className="default play centerContent">
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Ship shipImageUrl={shipView} />
                        </div>
                        <div>
                            <SelectButton onClick={handleShipSelect} />
                            <GoBackButton height={100} width={100} />
                        </div>
                    </div>
                    {currentShipIndex < (shipRelationships.length - 1) && (
                        <NextButton onClick={() => handleShipChange(currentShipIndex + 1)} />
                    )}
                </div>
            </div>
        </div>
    )
}

const shipStyles = {
    height: 200,
    width: 200
}
const Ship = ({ shipImageUrl }) => {
    return (
        <img src={shipImageUrl} style={shipStyles} />
    )
}

export default Customize;
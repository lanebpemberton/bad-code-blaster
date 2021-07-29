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

    useEffect(() => {
        const currentShip = localStorage.getItem('currentShipIndex') || 0
        if (currentShip > 0) {
            handleShipChange(currentShip)
        }
    }, [])
    
    const handleShipChange = useCallback((value) => {
        if (value >= 0 && value < shipRelationships.length) {
            setCurrentShipIndex(value)
            setShipView(shipRelationships[value])
        }
    }, [setCurrentShipIndex, setShipView])

    const handleShipSelect = useCallback(() => {
        localStorage.setItem('currentShipIndex', currentShipIndex);
    }, [currentShipIndex])

    return (
        <div className="default background">
            <div className="default border">
                <div className="title font" style={{justifyContent: 'center', display:'flex', alignItems:'center',width:'100%',border:'none'}}>
                    <h1 style={{position: 'absolute', top:'18%', fontSize: '3em'}}>
                        Select your ship
                    </h1>
                </div>
                <div className="row" style={{ alignItems: 'center', justifyContent: 'space-evenly', height: '100%' }}>
                    <BackButton hide={currentShipIndex <= 0} onClick={() => handleShipChange(currentShipIndex - 1)} style={{ marginRight: '4em' }} />
                    <div className="default play centerContent" style={{ top: '25%', height: '50%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Ship shipImageUrl={shipView} />
                        </div>
                        <div>
                            <SelectButton onClick={handleShipSelect} height={75} width={75} style={{ marginBottom: '4px'}} />
                            <GoBackButton height={75} width={75} />
                        </div>
                    </div>
                    <NextButton hide={currentShipIndex >= (shipRelationships.length - 1)} onClick={() => handleShipChange(currentShipIndex + 1)} style={{ marginLeft: '4em' }} />
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
        <img src={shipImageUrl} alt="Player's Ship" style={shipStyles} />
    )
}

export default Customize;
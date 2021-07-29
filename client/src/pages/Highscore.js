import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_HIGHSCORE } from '../utils/queries'

export default function Highscore() {
    const { loading, error, data } = useQuery(QUERY_USER_HIGHSCORE, {
        variables: {
            user_id: '60ff4a746d4e5e393cd036de'
        }
    });

    return (
        <React.Fragment>
            {loading && <h1 className="title font">Loading...</h1>}
            {!loading && data.getUserHighScore && (
                <div style={{ paddingLeft: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    {data.getUserHighScore.map(
                        (highScore, index) => (
                            <div key={`highscore_${index}`}>
                                <h2 className="title font">{index+1}: {highScore.score}, {highScore.timestamp}</h2>
                            </div>
                        )
                    )}
                </div>
            )}
        </React.Fragment>
    )
}


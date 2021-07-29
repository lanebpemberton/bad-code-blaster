import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_HIGHSCORE } from '../utils/queries'
const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
}
export default function Highscore() {
    const { loading, error, data } = useQuery(QUERY_USER_HIGHSCORE, {
        variables: {
            user_id: localStorage.getItem('loggedInUserId')
        }
    });

    return (
        <React.Fragment>
            {loading && <h1 className="title font">Loading...</h1>}
            {!loading && data.getUserHighScore && (
                <div style={{ paddingLeft: '6em', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    {data.getUserHighScore.slice(0)
                        .sort((highScore1, highScore2) => highScore2.score - highScore1.score)
                        .slice(0, 15).map(
                            (highScore, index) => (
                                <div key={`highscore_${index}`}>
                                    <h2 className="title font">{index+1}: {highScore.score} -- {formatDate(new Date(highScore.timestamp * 1))}</h2>
                                </div>
                            )
                        )
                    }
                </div>
            )}
        </React.Fragment>
    )
}


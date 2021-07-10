import React from 'react';

const styles = {
    navbar:{
        color:'white'
    },
    links:{
        marginRight:10,
        textDecoration:"none",
        color:"white",
        fontSize:22
    }
}

function Navigation()
{
    //loop through navigation links and highlight the correct one (e.g 'active' class)

    return (
        <div style={styles.navbar}>
            <a style={styles.links} href="#">Home</a>
            <a style={styles.links} href="#">About</a>
            <a style={styles.links} href="#">Projects</a>
        </div>
    );
}

export default Navigation;
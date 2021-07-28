import React from 'react';

const highscoretb = tbHigh({
    table: {
        minwidth: 650,
    },
});

function createData(username, score, ship, kills, deaths) {
    return { username, score, ship, kills, deaths };
} 

const rows = [
  createData('Brent SkyWalker', 1000, Millenium, 1500, 0),
  createData('Chan Man Can', 800, Hulk, 1100, 2),
  createData('Doge Trenton', 500, Roof, 600, 10),
  createData('Lame Came', 100, Ryan, 20, 80),
];

export default function BasicTable() {
    const classes = useStyles();

    return(

    )
}


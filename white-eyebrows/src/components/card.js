import React from 'react';


function Card(props) {
    return (
        <div style={styles.card}>
            {props.card_number}
        </div>
    )
}

const styles = {
    card : {
        width: '920px',
        height: '360px',
        background: 'blue',
        fontSize:'2.5em',
        color:'white'
    }
}

export default Card;
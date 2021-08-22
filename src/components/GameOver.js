import React, { Fragment } from 'react';


export default function GameOver(props){

    return (props.show?
        <div id="gameOver">
            <div>
                Parabéns, você ganhou!!
            </div>
            <button id="restart" onClick={props.handleRestart}>Reiniciar!</button>
        </div> : <Fragment />
    )
}
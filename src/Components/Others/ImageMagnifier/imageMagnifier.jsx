import React from 'react';

function ImageMagnifier({display, src, cursorPosition}) {
    if (!display) return;
    const styles = {
        position: 'absolute',
        top: '50%',
        right: '0%',
        transform: 'translate(100%, -50%)',
        height: '350px',
        width: '500px',
        border: '1px solid lightgray',
        borderRadius: '5px',
        zIndex: '900',
        backgroundColor: 'white',
        backgroundImage: `url('${src}')`,
        backgroundRepeat: 'no-repeat',
        pointerEvents: 'none',
        backgroundSize: `${500 *1.5}px ${500*1.5}px`,
        backgroundPositionX: `${-cursorPosition.x * 1.5 + 300 / 2}px`,
        backgroundPositionY: `${-cursorPosition.y * 1.5 + 300 / 2}px`
    }

    return (
        <div style={styles}>
            
        </div>
    )
}

export default ImageMagnifier

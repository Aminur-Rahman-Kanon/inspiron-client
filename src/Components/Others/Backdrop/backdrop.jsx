import React from 'react';

const styles = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '500',
    backgroundColor: '#0000004f'
}

function Backdrop ({ backdrop, togglebackdrop }) {
    if (!backdrop) return;

    return (
        <div style={styles} onClick={togglebackdrop}>
        
        </div>
    )
}

export default Backdrop 

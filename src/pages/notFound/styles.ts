import type { CSSProperties } from "react";

export const styles = {
    hero: {
        display        : 'flex',
        height         : '100vh',
        backgroundSize : 'cover',
        backgroundColor: '#fff',
    },

    mainPage: {
        display       : 'flex',
        flexDirection : 'column',
        maxWidth      : '1200px',
        width         : '100%',
        margin        : '0 auto',
        justifyContent: 'center',
        alignItems    : 'center',
        textAlign     : 'center',
        color         : 'black',
    } as CSSProperties,

};
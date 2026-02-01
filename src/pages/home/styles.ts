import type { CSSProperties } from "react";

export const styles = {
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8
    },

    hero: {
        display        : 'flex',
        height         : '100vh',
        backgroundSize : 'cover',
        backgroundColor: '#fff',
    },

    mainPage: {
        display      : 'flex',
        flexDirection: 'column',
        maxWidth     : '1200px',
        width        : '80%',
        margin       : '0 auto',
        color        : 'black',
    } as CSSProperties,

};
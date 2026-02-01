import type { CSSProperties } from "react";

export const styles = {
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8
    },

    antagonist: {
        maxHeight : '3000px',
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
        color         : 'white',
    } as CSSProperties,

    recette: {
        margin : '20px auto',
        marginTop: '20px',
        marginBottom: '20px',

        display        : 'flex',
        flexDirection  : 'column',

        color : 'black',
        backgroundColor: 'rgb(255, 255, 255)', 

        borderRadius: 25, padding: '20px', 
        boxShadow: '0 2px 3px rgba(0,0,0,0.5)', 

        minHeight      : '100vh',
        width: '50%',
        minWidth: '320px',
        maxWidth: '900px',
    } as CSSProperties,

    ingredients: {
        display: 'flex',
        flexDirection: 'column',

        width: '260px',
        flexShrink: 0, 

        backgroundColor: '#fff',
        color: 'black',

        borderRadius: 20,
        padding: '20px',

        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    } as CSSProperties,

    steps:{
        flex: 1,
        textAlign: 'left',
    } as CSSProperties,

    contenu:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start', 
        gap: '32px',
    } as CSSProperties,

}
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
        display : 'flex',
        flexDirection : 'column',
        margin : '0 auto',
        justifyContent : 'center',
        alignItems : 'left',
        textAlign : 'left',
        color : 'black',
        backgroundColor: 'rgb(255, 255, 255)', 
        borderRadius: 25, padding: '20px', 
        marginBottom: '20px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)', 
    } as CSSProperties,

    ingredients: {
        margin : '0 auto',
        justifyContent : 'left',
        alignItems : 'left',
        textAlign : 'left',
        color : 'black',
        backgroundColor: 'rgb(255, 255, 255)', 
        borderRadius: 25, padding: '20px', 
        marginBottom: '20px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)', 

    } as CSSProperties,
};
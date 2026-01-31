import type { CSSProperties } from "react";
import homeBanner from '../../assets/nappe-home.jpg';


export const styles = {
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8
    },

    hero: {
        display        : 'flex',
        height         : '100vh',
        backgroundSize : 'cover',
        backgroundImage: `url(${homeBanner})`,
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
        justifyContent : 'left',
        alignItems : 'left',
        textAlign : 'left',
        color : 'black',
    } as CSSProperties,

};
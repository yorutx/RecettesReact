import type { CSSProperties } from "react";

export const styles = {
    link: {
        display       : 'inline-block',
        textDecoration: 'none',
    } as CSSProperties,

    container: {
        height         : '350px',
        width          : '300px',

        display        : 'flex',
        flexDirection  : 'column',
        gap            : 50,
        backgroundColor: '#fff',
        textAlign      : 'center',
        alignItems     : 'center',
        justifyContent : 'center',
        borderRadius   : '25px',
        boxShadow      : '0 2px 4px rgba(0,0,0,0.3)',
    } as CSSProperties,

    titre: {
        color     : 'black',
        fontSize  : '18px',
        fontWeight: 'bold',
        margin    : 0,
        lineHeight: 1.2,
    },
}

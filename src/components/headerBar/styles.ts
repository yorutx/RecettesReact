export const styles = {
    container: {
        backgroundColor: '#fff',
        backgroundImage: "url('./src/assets/nappe-bleue.jpg')",
        justifyContent : 'space-between',
        display        : 'flex',
        alignItems     : 'center',
        fontSize       : '20px',
    },

    siteTitle: {
        color      : 'black',
        fontWeight : 'bold',
        paddingLeft: '20px',
    },

    containerTab: {
        display     : 'flex',
        gap         : '30px',
        paddingRight: '20px',
    },

    link: {
        color          : 'black',
        textDecoration : 'none',
        fontWeight     : 'bold',
        fontSize       : '20px',
        
        backgroundColor: 'white',
        padding        : '10px 20px',
        borderRadius   : 25,
        boxShadow      : '0 2px 4px rgba(0,0,0,0.5)',
    },

    linkHovered: {
        color          : 'black',
        textDecoration : 'none',
        fontWeight     : 'bold',
        fontSize       : '20px',
        
        backgroundColor: 'white',
        padding        : '10px 20px',
        borderRadius   : 25,
        boxShadow      : '0 2px 4px rgba(0,0,0,0.5)',
        animation      : 'spin 2s linear infinite',
    },
    
};

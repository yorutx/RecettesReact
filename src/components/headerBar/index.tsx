import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from './styles';

function HeaderBar() {
    const [hoverHome, setHoverHome] = useState(true);
    const [hoverRecette1, setHoverRecette1] = useState(true);
    const [hoverNotFound, setHoverNotFound] = useState(true);
    
    return (
        <div style={styles.container}>
            <p style={styles.siteTitle}>Site MAJU</p>
            <div style={styles.containerTab}>
                <Link to="/home" style={hoverHome ? styles.link : styles.linkHovered} onMouseEnter={() => setHoverHome(false)} onMouseLeave={() => setHoverHome(true)}>Home</Link>
                <Link to="/recette1" style={hoverRecette1 ? styles.link : styles.linkHovered} onMouseEnter={() => setHoverRecette1(false)} onMouseLeave={() => setHoverRecette1(true)}>Recette 1</Link>
                <Link to="/caca" style={hoverNotFound ? styles.link : styles.linkHovered} onMouseEnter={() => setHoverNotFound(false)} onMouseLeave={() => setHoverNotFound(true)}>Not found</Link>
            </div>
        </div>
    );

}

export default HeaderBar;
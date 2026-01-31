import { Link } from 'react-router-dom';

import { styles } from './styles';

function HeaderBar() {
    return (
        <div style={styles.container}>
            <p style={styles.siteTitle}>Site MAJU</p>
            <div style={styles.containerTab}>
                <Link to="/home" style={styles.link}>Home</Link>
                <Link to="/recette1" style={styles.link}>Recette 1</Link>
                <Link to="/caca" style={styles.link}>Not found</Link>
            </div>
        </div>
    );

}

export default HeaderBar;
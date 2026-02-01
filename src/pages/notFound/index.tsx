import { Button } from '../../components';
import { styles } from './styles';

function NotFound() { 
    return (
        <div style={styles.hero}>
            <div style={styles.mainPage}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <Button title="Back to home" to="/home" />
            </div>
        </div>
    );
}

export default NotFound;
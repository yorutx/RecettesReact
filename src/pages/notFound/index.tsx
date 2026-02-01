import { Button, Template } from '../../components';
import { styles } from './styles';

function NotFound() { 
    return (
        <Template>
            <div style={styles.mainPart}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <Button title="Back to home" to="/home" />
            </div>
        </Template>
    );
}

export default NotFound;
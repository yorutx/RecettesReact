import { Button } from '../../components';

function NotFound() { 
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Button title="Back to home" to="/home" />
        </div>
    );
}

export default NotFound;
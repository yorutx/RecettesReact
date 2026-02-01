import { Link } from 'react-router-dom';
import { styles } from './styles';

type RecetteCardType = {
    titre       : string;
    imageUrl    : string;
    toGo        : string;
};

function RecetteCard({ titre, imageUrl, toGo }: RecetteCardType) {
    return (
        <Link to={toGo} style={styles.link}>
            <div style={styles.container}>
                <p style={styles.titre}>{titre}</p>
                <img src={imageUrl} height={200} alt={titre} style={{ borderRadius: 10 }} />
            </div>
        </Link>
    )
};

export default RecetteCard;
